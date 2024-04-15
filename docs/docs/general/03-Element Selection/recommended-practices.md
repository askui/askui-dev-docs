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

## Use Cases
This section describes typical use cases and problems you will eventually run into and their **solutions**.

### Detection Fails Randomly
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

### Detection Fails on a Different Machine / in Pipeline
When the resolution changes for a workflow run on a different machine or inside a Continuous integration pipeline for example, you may encounter the following problems:

* Text linebreaks and text detection fails
* Elements change shape or color during a workflow run

#### Text Detection Fails Because of Linebreaks
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

<!-- vale off -->
### Color of Same Element Changes
<!-- vale on -->
AskUI can not detect color (yet). But you can use two custom elements together with `or()` to prepare for a change of color of the element:

```typescript
await askui.click().customElement({customImage: 'custom_elements/red.text.png'})
                   .or()
                   .customElement({customImage: 'custom_elements/blue.text.png'}).exec()
```

### Duplicate Elements
Sometimes you run into duplicate elements on an UI and you want to target a specific one. You need to make your element-description more specific in this case by doing one or all of the following:

* Add [relational selectors](../../api/04-Relations/above.md)
* Add more element-descriptions with `and()`

```typescript
// Add relational selector to custom element
await askui.click().customElement({
                     customImage: 'custom_elements/submit.button.png'
                   }).leftOf().button().withText('Cancel')

// More specificity with and() and additional element-description
await askui.click().customElement({
                     customImage: 'custom_elements/submit.button.png'
                   }).leftOf().button().withText('Cancel')
                   .and()
                   .button().withText('Submit').above().text('Welcome')
                   .exec();
```
