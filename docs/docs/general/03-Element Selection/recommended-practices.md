---
sidebar_position: 2
title: Recommended Practices
---

# Recommended Practices
On this page you will learn the different methods to detect elements. Every method has its strength and weaknesses.

You will learn:

* What methods AskUI offers and their strengths and weaknesses
* Use case based recommendations on what method to use

## Methods of Detecting Elements

* `Custom element`
  * Detect elements with a screenshot
* `Text`
  * Finds an element of class text. If you pass an argument `text('hello')` it also uses text-recognition
  * **Limitation**: Sometimes dependent on resolution, font and linebreaks
* `Button, textfield, checkbox, ...` [all classes](../../api/03-Element-Descriptions/button.md)
  * Finds an element of the class
* `Icon`
  * Finds elements of type icon and then filters for _specific_ icon
  * Detects icons reliably
  * **Limitation**: Naming of icons inconsistent
* `Matching`
  * Natural language description.
  * Works on logos and images with text
  * **Limitation**: Only finds the best matching element

## Text Detection Fails
This section describes typical problems you will run into when you try to detect text and provide **solutions**.

### Single Character Not Detected as Text
If a single character does not get detected you have two options depending on the use case:

* Use a custom element if the single character is not enclosed in another class like `button``
* Target the element that contains the single character. You _must_ use [relational selectors](../../api/04-Relations/above.md) for this as the enclosing class is not specific enough to select the correct element (you may have more than one textfield for example).

```typescript
// Custom element instead of text('<your_character>')
await aui.click().customElement({
                     customImage: 'custom_elements/character.text.png'
                   })
                   .exec();

// Select element by finding the enclosing element
// with a relational selector
await aui.click().textfield()
                   .nearestTo().button().withText('Login')
                   .exec();
```

### Text In Overlay Merges with Text Below
Some overlays like dialogues do not have enough padding so the text under the overlay appears to be on the same line as the text inside the overlay. This leads to text-merging where you can not reliably target a specific text because the similarity score will never be reached.

You have a few options you can try depending on your use case:

* Maximize the dialogue/overlay if possible in your workflow, for example with a shortcut: This removes the underlying text.
* Use a custom element as a fallback with `or()`
* If you just need to interact with the text and it is not important where it is exactly: Target the beginning of the text

```typescript
await aui.click().text('So it starts')
                 .or()
                 .customElement({
                     customImage: 'custom_elements/beginning.text.png'
                   })
                   .exec();

/**
 *  Given this text is merged from two texts:
 *  1lKBASDF Aeb567878
 *  First text: 1lKBASDF
 *  Second text: Aeb567878
 *
 *  Target the first element
 */
await aui.click().text().containsText('1lKBASDF').exec();
```

### Text Detection Fails Because of Linebreaks
If text is responsive and a linebreak is added the following text detection may fail:

```typescript
await aui.click()
         .text('A very long text that breaks after the comma, oh no!')
         .exec();
```

You have to change the code to use `containsText()` and match for the start of the text to remedy this:

```typescript
await aui.click()
         .text()
         .containsText('A very long text that')
         .exec();
```

### Coherent Text is Detected as Separate Text-Elements
Sometimes coherent text is split up into two or more text-elements.

* If you need to match the exact-text: Use a custom element
* If you just need to interact with the text and it is not important where it is exactly: Target any part of the text

```typescript
// Custom element instead of text(<your_text>)
await aui.click().customElement({
                     customImage: 'custom_elements/mytext.text.png'
                   })
                   .exec();

/**
 *  Given this text will be split in two text elements:
 *  1lKBASDF_Aeb567878
 *  First element: 1lKBASDF
 *  Second element: Aeb567878
 *
 *  Target the first element
 */
await aui.click().text('1lKBASDF').exec();
```

---

## Detection Fails on a Different Machine / in Pipeline
When the resolution changes for a workflow run on a different machine or inside a Continuous integration pipeline for example, you may encounter the following problems:

<!-- vale off -->
* Text linebreaks and text detection fails: See [Text Detection Fails Because of Linebreaks](#text-detection-fails-because-of-linebreaks)
* Elements change shape or color during a workflow run: See [Color of Same Element Changes](#color-of-same-element-changes) and [Duplicate Elements](#duplicate-elements)
<!-- vale oon -->

---

## Detection Is Flaky or Mislabeled

### Flaky Detection Across Runs
Visual detection of elements is highly sensitive to changes in your UI, even if they are small. For example a button that you target may fail randomly on a workflow run every now and then:

```typescript
await aui.click().button().withText('Sign in').exec();
```

You can do three things about this:

1. Make the element-description more specific, for example with [relational selectors](../../api/04-Relations/above.md)
2. Add a custom element with `or()` as a fallback
3. Combine the two methods

All three of them you can find in the following code:

```typescript
// Make element-description more specific
await aui.click().button().withText('Sign in')
                 .leftOf().button().withText('Login')
                 .exec();

// Fallback to custom element
await aui.click().button().withText('Sign in')
                 .or()
                 .customElement({
                     customImage: 'custom_elements/signin.button.png'
                   })
                 .exec();

// Add additional element-description and a custom element as fallback
await aui.click().button().withText('Sign in');
                 .or().button().containsText('Sign')
                 .or().customElement({
                     customImage: 'custom_elements/signin.button.png'
                   })
                 .exec();
```

### Icon Detection Fails or Labels Wrong Icon Name
Detecting icons correctly is difficult because there are millions of icons available. You typically run into two problems:

* Icon is not detected at all
* Icon name changes from run to run: `Search` becomes `Calendar` for example

Our recommended approach in both cases is to use a custom element instead. In case the icon is detected reliably, but only the name changes, you can alsso use a more specific element-description together with [relational selectors](../../api/04-Relations/above.md) to select the icon:

```typescript
// Custom element instead of icon
await aui.click().customElement({
    customImage: 'custom_elements/file.icon.png'
  }).exec();

// Make element-description more specific
// with a relational selector
await aui.click().icon()
                 .leftOf().text('File')
                 .exec();
```

### Button Not Detected as Element
Sometimes a button is not detected as one. Usually this is because of low contrast or the button lacking typical characteristics of a button.

The only thing you can do is to use a custom element:

```typescript
// Custom element instead of button().withText()
await aui.click().customElement({
                     customImage: 'custom_elements/signout.button.png'
                   })
                   .exec();
```

---

<!-- vale off -->
## Color of Same Element Changes
<!-- vale on -->
AskUI can not detect color (yet). But you can use two custom elements together with `or()` to prepare for a change of color of the element:

```typescript
await aui.click().customElement({customImage: 'custom_elements/red.text.png'})
                   .or()
                   .customElement({customImage: 'custom_elements/blue.text.png'}).exec()
```

---

## Duplicate Elements
Sometimes you run into duplicate elements on an UI and you want to target a specific one. You need to make your element-description more specific in this case by doing one or all of the following:

* Add [relational selectors](../../api/04-Relations/above.md)
* Add more element-descriptions with `and()`

```typescript
// Add relational selector to custom element
await aui.click().customElement({
                     customImage: 'custom_elements/submit.button.png'
                   }).leftOf().button().withText('Cancel')

// More specificity with and() and additional element-description
await aui.click().customElement({
                     customImage: 'custom_elements/submit.button.png'
                   }).leftOf().button().withText('Cancel')
                   .and()
                   .button().withText('Submit').above().text('Welcome')
                   .exec();
```
