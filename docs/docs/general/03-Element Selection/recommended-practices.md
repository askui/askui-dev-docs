---
sidebar_position: 2
title: Recommended Practices
---

# Recommended Practices
On this page you will learn the different methods to detect elements. Every method has its strength and weaknesses, for example one is more accurate than another but also more effort when using it.

## The Overarching Goal
As a user you want to detect elements reliably. There are two axes of reliability:

* False Positives: Detecting the wrong element or detecting more elements than you want to detect.
* False Negatives: Detecting no element where there is one.

## Methods of Detecting Elements in AskUI

**Ranked by detection accuracy:**

| Method         | Description                               |   Advantages     | Disadvantages                            |
| :------------- | :-------------                            | :--------------- | :---------------                         | 
| custom element | Detects elements by image-in-image search | Reliable         | Elaborate creation |
| text           | Finds an element of class text. If you pass an argument `text('hello')` it also uses text-recognition | Fast to write. High reliability | Dependent on resolution, font and linebreaks |
| button, textfield, checkbox, ...| Finds an element of the class      | Reliable when element is clearly distinguishible | Sometimes fails if element, for example a button, is clearly distinguishable as a specific class |
| icon           | Finds elements of type icon and then filters for _specific_ icon | Detects icons reliably | Naming of icons inconsistent. |
| matching       | Natural language description.             | Works on logos and images with text; Needs experimentation for detecting the correct element | Only finds the best matching element |

## Recommendation for Optimal Detection Experience
The general recommendation is to use a class-based method like `text`, `button` or `textfield` first. When you run into non-detectable elements, like a button AskUI does not detect, you can use a custom element.

Here are two problems to consider while implementing workflows:

* Responsive text causes linebreaks: Custom element detection and text detection fails.
* The color of element/text changes during workflow.

## Avoid False Negatives by Using More than One Method
Detecting elements reliably can be achieved through chaining detection methods with `or()`. Chain them always from highest to lowest quality, so the highest quality methods get executed first. This makes sure to minimize the chance of _false positive_ detection of wrong elements. Here are a few examples of how that looks like:

```typescript
// custom element or() class based method or() matching
await askui.click().customElement({
                     customImage: 'custom_elements/submit.button.png'
                   }).leftOf().button().withText('Cancel')
                   .or().button().withText('Submit')
                   .or().button().containsText('Submit')
                   .or().element().matching('green submit button').leftOf().button().withText('Cancel').exec();

await askui.click().customElement({customImage: 'custom_elements/figure.icon.png'}).leftOf().text('Maps')
                   .or().icon().withText('human')
                   .or().element().matching('a human figure icon').leftOf().text('Maps').exec();
```

## Avoid False Positives by Using More than One Method
When you want to detect a specific button and AskUI falsely detects more elements, than you can use `and()` to use more than one method. This makes the detection more specific:

```typescript
await askui.click().customElement({
                     customImage: 'custom_elements/submit.button.png'
                   }).leftOf().button().withText('Cancel')
                   .and()
                   .button().withText('Submit')
                   .exec();
```

## Dealing with Linebreaks in Responsive Text
AskUI detects based visually. If text is responsive and a linebreak is added the following text detection fails:

```typescript
await aui.click()
         .text('A very long text that breaks after the comma, oh no!')
         .exec();
```

You have to change the code to use `containsText()` and match for the start of the text:

```typescript
await aui.click()
         .text('A very long text that breaks after the comma, oh no!')
         .containsText('A very long text that')
         .exec();
```

## Dealing with Changing Custom Elements
You may have a text that can change its color and thus you can not use a _single_ custom element. When you chain a custom element for each color with `or` the text can be detected reliably:

```typescript
await askui.click().customElement({customImage: 'custom_elements/red.text.png'})
                   .or()
                   .customElement({customImage: 'custom_elements/blue.text.png'}).exec()
```

## Recommendation for Fast Speed of Inference

### Avoid Optical Character Recognition (OCR) on Too Many Element

If you use `containsText()`, `withText()`, `withExactText()` or `withTextRegex()` **OCR** is applied to all elements detected on your screen. This can slow down AskUI. It is more efficient to narrow down the elements first. For example, if you want to click a `button` with a specific text you should select all buttons first.

```javascript
// Do this
await aui.click().button('See here').exec();
await aui.clickText('Sign in');

// And NOT this
await aui.click('See here').exec();
await aui.click('Sign in').exec();
```

### Avoid Custom Element Detection if Possible

If you use `customElement()` you are doing an image-in-image search. Use this sparingly for elements that you can not detect as the execution time is sometimes slower!

```javascript
// Do this
await aui.clickButton('Login');
await aui.clickText('Overview');

// And NOT this
await aui.click().customElement({
  customImage: '.../login_button.png', 
  name: 'login button',
}).exec();
await aui.click().customElement({
  customImage: '.../text_overview.png', 
  name: 'overview button',
}).exec();
```

## Scrolling
When you use AskUI you can only interact with elements that you can see on your screen. Therefore you have to scroll down/sideways to interact with currently invisible elements.

### Scrolling on Touch Displays
On touch displays you have to recreate the swipe gesture:

```javascript
// Touch the display with your finger, move finger to the left, release
await aui.mouseToggleDown().exec()
await aui.moveMouseRelatively(-1500, 0).exec()
await aui.mouseToggleUp().exec()
```

### Scrolling With Mouse Wheel
If you want to scroll with your mouse wheel you can use the `scroll()` action:

```javascript
// Scroll 10 down in y direction<>
await aui.scroll(0, -10).exec()
```

### Scrolling With Key Press
If you want to scroll with a key press you could use your arrow keys (`up`, `down`, `left`, `right` ) or the `pagedown`-key.

```javascript
// Press down arrow key
await aui.pressKey('down').exec()

// Press up arrow key
await aui.pressKey('up').exec()

// Scroll down a page
await aui.pressKey('pagedown').exec()

// Scroll up a page
await aui.pressKey('pageup').exec()
```

## Wait for an Element to Appear
AskUI implements a careful retry strategy to wait for an element to appear. But sometimes this is not long enough.
You can wait for an element to appear with the [convenience function `waitUntil()` API docs](../../api/08-Convenience/waituntil.md):

```typescript
await aui.waitUntil(aui.expect().text('GitHub').exists());
```
