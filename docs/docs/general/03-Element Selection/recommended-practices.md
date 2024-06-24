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
* `Matching`
  * Natural language description.
  * Works on logos and images with text
  * **Limitation**: Only finds the best matching element instead of all elements matching the natural language description.

## Text Detection Fails
This section describes typical problems you will run into when you try to detect text and provide **solutions**.

### Single Character Not Detected as Text
If a single character does not get detected you have two options depending on the use case:

![Single character not enclosed and undetected.](images/recommended-practices/recommended-practices-single-character-not-detected.png)

* Use a [custom element](../../api/03-Element-Descriptions/customelement.md) if the single character is not enclosed in another class like `button`.

```typescript
// Custom element instead of text('<your_character>')
await aui.click().customElement({
                     customImage: 'custom_elements/seven.text.png'
                   })
                   .exec();
```

* Target the element that contains the single character. If you only have one `button` for example you can target the class. If you have more than one `button` on your screen you can use a [relational selector](../../api/04-Relations/above.md).

![](images/recommended-practices/recommended-practices-single-character-not-detected-enclosed.png)

```typescript
// Select element by finding the enclosing element
// with a relational selector
await aui.click().button()
                 .below().button().withText('2')
                 .exec();
```

### Text In Overlay Merges with Text Below
Some overlays like dialogues do not have enough padding so the text under the overlay seems to be on the same line as the text inside the overlay. This leads to text-merging where you can not reliably target a specific text because the similarity score will never be reached.

You have a few options you can try depending on your use case:

* Maximize the dialogue/overlay if possible in your workflow, for example with a shortcut: This removes the underlying text.
* Use a [custom element](../../api/03-Element-Descriptions/customelement.md) as a fallback with [or()](../../api/04-Relations/or.md)

```typescript
await aui.click().text('So it starts')
                 .or()
                 .customElement({
                     customImage: 'custom_elements/beginning.text.png'
                   })
                   .exec();
```

* If you just need to interact with the text and it is not important where it is exactly: Target the beginning of the text

```typescript
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
If text is responsive, as in the example below, a linebreak is added and the text detection detects two text elements instead of one:

![](images/recommended-practices/recommended-practices-text-without-linebreak.png)

```typescript
await aui.click()
         .text('Web Automation Simplified.')
         .exec();
```

![](images/recommended-practices/recommended-practices-text-with-linebreak.png)

You have to change the code to use `containsText()` and match for the start of the text to remedy this:

```typescript
await aui.click()
         .text()
         .containsText('Web Automation')
         .exec();
```

### Coherent Text is Detected as Separate Text-Elements
Sometimes coherent text is split up into two or more text-elements.

![](images/recommended-practices/recommended-practices-this-should-not-be-split-up.png)

* If you need to match the exact-text, use a [custom element](../../api/03-Element-Descriptions/customelement.md).

```typescript
// Custom element instead of text(<your_text>)
await aui.click().customElement({
  customImage: 'custom_elements/thisshouldnot.text.png'
                   })
                   .exec();
```

* If you just need to interact with the text and it is not important where it is exactly: Target any part of the text

```typescript
await aui.click().text("'This should not").exec();
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
Visual detection of elements is highly sensitive to changes in your UI, even if they are small. For example a text that you target may fail randomly on a workflow run every now and then. For example in the following picture there is a button with a `4`:

![](images/recommended-practices/recommended-practices-button-with-4-detected.png)

You can target it like this:

```typescript
await aui.click().button().withText('4').exec();
```

But when you change the screen resolution, the `4` may not be recognized anymore:

![](images/recommended-practices/recommended-practices-button-with-4-undetected.png)

You can do three things about this:

1. Make the element-description more stable, for example, with a [relation](../../api/04-Relations/above.md):

```typescript
// Make element-description more stable
await aui.click().button().withText('Sign in')
                 .leftOf().button().withText('Login')
                 .exec();
```

2. Add a [custom element](../../api/03-Element-Descriptions/customelement.md) with [or()](../../api/04-Relations/or.md) as a fallback:

```typescript
// Fallback to custom element
await aui.click().button().withText('Sign in')
                 .or()
                 .customElement({
                     customImage: 'custom_elements/signin.button.png'
                   })
                 .exec();
```

3. Add multiple fallbacks with [or()](../../api/04-Relations/or.md) and different element-descriptions:

```typescript
// Add additional element-description and a custom element as fallback
await aui.click().button().withText('Sign in');
                 .or().button().containsText('Sign')
                 .or().customElement({
                     customImage: 'custom_elements/signin.button.png'
                   })
                 .exec();
```

### Icon Detection Fails
Detecting icons correctly is difficult because there are millions of icons available. Therefore, you may run into the problem that an icon is not detected sometimes:

![](images/recommended-practices/recommended-practices-icon-not-recognized.png)

Our recommended approach is to use a [custom element](../../api/03-Element-Descriptions/customelement.md) instead.

```typescript
// Custom element to target the microwave icon
// from the image above
await aui.click().customElement({
    customImage: 'custom_elements/microwave.icon.png'
  }).exec();
```

### Button Not Detected as Element
Sometimes a button is not detected as one. Usually this is because of low contrast or the button lacking typical characteristics of a button.

![](images/recommended-practices/recommended-practices-button-not-recognized.png)

If the button is not detected but the text or label inside it, you can target the text element. Assume the `1` is recognized as a `text`-element in the image above. Then you can target the button like this if there is no other `text`-element `1` on the screen:

```typescript
await aui.click().text('1').exec();
```

As not even the `1` is detected as `text` in the case above, you cannot use this approach. In these cases, you can try out using a [custom element](../../api/03-Element-Descriptions/customelement.md) instead:

```typescript
// Custom element instead of button().withText()
await aui.click().customElement({
                     customImage: 'custom_elements/one.button.png'
                   }).exec();
```

---

<!-- vale off -->
## Color of Same Element Changes
<!-- vale on -->
AskUI can not detect color (yet). If you have an element that changes color like the button shown below:

* Button light themed
![](images/recommended-practices/recommended-practices-button-two-light.png)

* Same button dark themed
![](images/recommended-practices/recommended-practices-button-two-dark.png)

You can try the following:

* Use a [custom element](../../api/03-Element-Descriptions/customelement.md) with `imageCompareFormat` set to `grayscale` (default value)

```typescript
// Use custom element default
await aui.click().customElement({
  customImage: 'custom_elements/light.button.png',
                 }).exec();
```

* Use two [custom elements](../../api/03-Element-Descriptions/customelement.md) together with [or()](../../api/04-Relations/or.md) and `imageCompareFormat` set to `RGB`

```typescript
// Use two elements that compare with color
await aui.click().customElement({
  customImage: 'custom_elements/light.button.png',
                   imageCompareFormat: 'RGB'
                 })
                 .or()
                 .customElement({
                   customImage: 'custom_elements/dark.button.png',
                    imageCompareFormat: 'RGB'
                    }).exec();
```

---

## Duplicate Elements
Sometimes you run into duplicate elements on an UI and you want to target a specific one. You need to make your element-description more specific in this case by doing one or all of the following:

![](images/recommended-practices/recommended-practices-duplicate-button.png)

* Add a [relation](../../api/04-Relations/above.md)

```typescript
// Add relational selector to custom element
await aui.click().customElement({
  customImage: 'custom_elements/submit.button.png'
                   })
                   .leftOf().button().withText('Sign up')
                   .exec();
```

* Add more element-descriptions with [and()](../../api/04-Relations/and.md)

```typescript
// More specificity with and() and additional element-description
await aui.click().customElement({
                     customImage: 'custom_elements/submit.button.png'
                   })
                   .leftOf().button().withText('Sign up')
                   .and()
                   .button().withText('Submit')
                            .rightOf().button().withText('Login')
                   .exec();
```
