---
sidebar_position: 2
title: Recommended Practices
---

# Recommended Practices
On this page you will learn the different recommended practices for:

* [Detecting elements](#methods-of-detecting-elements)
* [Selecting elements by proximity](#select-elements-by-proximity)
* [Extracting data from Elements](#extracting-data-from-elements)
* [Scrolling](#scrolling)
* [Implementing assertions](#implement-assertions)

## Methods of Detecting Elements

You will learn:

* What methods AskUI offers and their strengths and weaknesses
* Use case based recommendations on what method to use

* `AI Element`
  * Capture elements from your screen.
* `Text`
  * Finds an element of class text. If you pass an argument `text('hello')` it also uses text-recognition
  * **Limitation**: Sometimes dependent on resolution, font and linebreaks
* `Button, textfield, checkbox, ...` [all classes](../../api/03-Element-Descriptions/button.md)
  * Finds an element of the class

### Text Detection Fails
This section describes typical problems you will run into when you try to detect text and provide **solutions**.

#### Single Character Not Detected as Text

:::tip

[Try our OCR Teaching to get better text recognition!](../../suite/02-Components/AskUI-OCR-Teaching.md)

:::

If a single character does not get detected you have two options depending on the use case:

![Single character not enclosed and undetected.](images/recommended-practices/recommended-practices-single-character-not-detected.png)

* Use an [AI Element](aielement.md) if the single character is not enclosed in another class like `button`.

```typescript
// AI Element instead of text('<your_character>')
await aui.click().aiElement('seven-text').exec();
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

#### Text In Overlay Merges with Text Below
Some overlays like dialogues do not have enough padding so the text under the overlay seems to be on the same line as the text inside the overlay. This leads to text-merging where you can not reliably target a specific text because the similarity score will never be reached.

You have a few options you can try depending on your use case:

* Maximize the dialogue/overlay if possible in your workflow, for example with a shortcut: This removes the underlying text.
* Use an [AI Element](aielement.md) as a fallback with [or()](../../api/04-Relations/or.md)

```typescript
await aui.click().text('So it starts')
                 .or()
                 .aiElement('beginning-text')
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

#### Text Detection Fails Because of Linebreaks
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

#### Coherent Text is Detected as Separate Text-Elements
Sometimes coherent text is split up into two or more text-elements.

![](images/recommended-practices/recommended-practices-this-should-not-be-split-up.png)

* If you need to match the exact-text, use an [AI Element](aielement.md).

```typescript
// AI element instead of text(<your_text>)
await aui.click().aiElement('thisshouldnot-text').exec();
```

* If you just need to interact with the text and it is not important where it is exactly: Target any part of the text

```typescript
await aui.click().text("'This should not").exec();
```

---

### Detection Fails on a Different Machine / in Pipeline
When the resolution changes for a workflow run on a different machine or inside a Continuous integration pipeline for example, you may encounter the following problems:

<!-- vale off -->
* Text linebreaks and text detection fails: See [Text Detection Fails Because of Linebreaks](#text-detection-fails-because-of-linebreaks)
* Elements change shape or color during a workflow run: See [Color of Same Element Changes](#color-of-same-element-changes) and [Duplicate Elements](#duplicate-elements)
<!-- vale oon -->

---

### Detection Is Flaky or Mislabeled

#### Flaky Detection Across Runs
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

2. Add an [AI Element](aielement.md) with [or()](../../api/04-Relations/or.md) as a fallback:

```typescript
// Fallback to ai element
await aui.click().button().withText('Sign in')
                 .or()
                 .aiElement('signin-button')
                 .exec();
```

3. Add multiple fallbacks with [or()](../../api/04-Relations/or.md) and different element-descriptions:

```typescript
// Add additional element-description and an ai element as fallback
await aui.click().button().withText('Sign in');
                 .or().button().containsText('Sign')
                 .or().aiElement('signin-button')
                 .exec();
```

#### Icon Detection Fails - Use AI Element
Detecting icons correctly is difficult because there are millions of icons available. Therefore, you may run into the problem that an icon is not detected sometimes:

![](images/recommended-practices/recommended-practices-icon-not-recognized.png)

Our recommended approach is to use an [AI Element](aielement.md) instead.

```typescript
// AI element to target the microwave icon
// from the image above
await aui.click().aiElement('microwave-icon').exec();
```

#### Button Not Detected as Element
Sometimes a button is not detected as one. Usually this is because of low contrast or the button lacking typical characteristics of a button.

![](images/recommended-practices/recommended-practices-button-not-recognized.png)

If the button is not detected but the text or label inside it, you can target the text element. Assume the `1` is recognized as a `text`-element in the image above. Then you can target the button like this if there is no other `text`-element `1` on the screen:

```typescript
await aui.click().text('1').exec();
```

As not even the `1` is detected as `text` in the case above, you cannot use this approach. In these cases, you can try out using an [AI Element](aielement.md) instead:

```typescript
// AI element instead of button().withText()
await aui.click().aiElement('one-button').exec();
```

---

<!-- vale off -->
### Color of Same Element Changes
<!-- vale on -->
AskUI can not detect color (yet). If you have an element that changes color like the button shown below:

* Button light themed
![](images/recommended-practices/recommended-practices-button-two-light.png)

* Same button dark themed
![](images/recommended-practices/recommended-practices-button-two-dark.png)

You can try the following:

* Use two [AI Elements](aielement.md) together with [or()](../../api/04-Relations/or.md).

```typescript
// Use two elements that compare with color
await aui.click().aiElement('light-button')
                 .or()
                 .aiElement('dark-button').exec();
```

---

### Duplicate Elements
Sometimes you run into duplicate elements on an UI and you want to target a specific one. You need to make your element-description more specific in this case by doing one or all of the following:

![](images/recommended-practices/recommended-practices-duplicate-button.png)

* Add a [relation](../../api/04-Relations/above.md)

```typescript
// Add relational selector to ai element
await aui.click().aiElement('submit-button')
                 .leftOf().button().withText('Sign up')
                 .exec();
```

* Add more element-descriptions with [and()](../../api/04-Relations/and.md)

```typescript
// More specificity with and() and additional element-description
await aui.click().aiElement('submit-button')
                 .leftOf().button().withText('Sign up')
                 .and()
                 .button().withText('Submit')
                          .rightOf().button().withText('Login')
                 .exec();
```

---

## Select Elements by Proximity
A common problem while writing instructions that one encounters is interacting with elements that share the same text.

An example can be seen when you interactively annotate your Visual Studio Code Editor.
Notice that the magnifying glass icon and many other elements throughout the UI share the same name:

![Icon mobile annotation one.](images/relational_selectors_same_icon1.png)


![Icon mobile annotation one.](images/relational_selectors_same_icon2.png)

To ensure you’re able to instruct AskUI to select the correct element, the use of relational element-descriptions can be employed.
Relational element-descriptions describe the element relative to other elements in the UI.

### Selecting an Element by Visual Relation
After reading the next section you will know how to use the full power of all the relational element-descriptions. Additionally, you learn what pitfalls you can fall into and how to avoid them in the future.

We will use the [Selectorshub practice page](https://selectorshub.com/xpath-practice-page/) for the demonstration.

We’ll discuss the following relational element-descriptions:

- [above()](#above)
- [below()](#below)
- [contains()](#contains)
- [in()](#in)
- [leftOf()](#leftof-and-rightof)
- [rightOf()](#leftof-and-rightof)
- [nearestTo()](#nearestto)

### above()

When you want to click on a textfield and it is above an element, like for example a button with the text Submit. You can do it with `above()`. The following code snippet moves the mouse to the textfield above the *Submit*-button:

```ts
await aui
  .click()
  .textfield()
  .above()
  .button()
  .withText('Submit')
  .exec();
```
![above](/img/gif/above.gif)


### below()

When you want to select a textfield you can do so by finding the correct label, which is often above the textfield. The following code snippet moves the mouse to the textfield below the text *Mobile Number*:

```ts
await aui
  .moveMouseTo()
  .textfield()
  .below()
  .text()
  .withText('Mobile Number')
  .exec();
```

![below](/img/gif/below.gif)

### contains()

For selecting an element, that contains another element, `contains()` is the right candidate. It is especially useful if you want to select a textfield with a placeholder text inside it. The text inside the textfield is annotated as an element itself.

If you have problems with selecting a specific element, always run `annotate()` to create a screenshot of all the annotations or use `annotateInteractively()` to see if you need to use `contains()`.

The following snippet moves the mouse to a textfield based on its placeholder text *First Crush* which is contained in the textfield:

```ts
await aui
  .moveMouseTo()
  .textfield()
  .contains()
  .text()
  .withText('First Crush')
  .exec();
```

![contains](/img/gif/contains.gif)

### in()

When you want to target an element that is inside another element you can use `in()`.

```ts
--------------------
|     outerEl      |
|  --------------  |
|  |  innerEl   |  |
|  --------------  |
|                  |
--------------------
```

The following code snippet moves the mouse pointer to the text of the first textfield AskUI found:

```ts
await aui
  .moveMouseTo()
  .text()
  .in()
  .textfield()
  .exec();
```

![in](/img/gif/in.gif)

### leftOf() and rightOf()
If you want to select an element based on its location left or right of another element you have to use `leftOf()` or `rightOf()` respectively.

💡 If you do not specify another element-description like `withText()` then you will get the nearest element. Otherwise, AskUI retrieves the nearest element that matches the element-description!

```ts
await aui
  .moveMouseTo()
  .text()
  .leftOf()
  .text()
  .withText('Denmark')
  .exec();
```

![leftOf](/img/gif/leftOf.gif)

```ts
await aui
  .moveMouseTo()
  .text()
  .rightOf()
  .text()
  .withExactText('Joe Root')
  .exec();
```

![rightOf](/img/gif/rightOf.gif)


### nearestTo()

Filtering with the `nearestTo()` will return the element nearest to another element. This is useful when the direction is not clear on where to search. Especially responsive designs are prone to wrap elements into a new line where `leftOf()` and `rightOf()` would fail.

```ts
await aui
  .moveMouseTo()
  .textfield()
  .nearestTo()
  .text()
  .withTextRegex('User Em*')
  .exec();
```

![nearestTo](/img/gif/nearestTo.gif)

### Additional Considerations About the Distance Metric
The distance is based entirely on physical distance __to the bounding box of a specified element__ for `above()`, `below()`, `leftOf()` and `rightOf()`.

For `above()` it takes the upper-left and upper right-corner coordinates of the bounding box. The area that is searched is bordered by orthogonal lines upwards from these coordinates. Every element that is touched by that area can be found.

```typescript
  |  ------------  |
  |  | Returned |  |
  |  ------------  |
  |                |
  |                |   ----------------
  |   SEARCHED     |   | Not returned |
  |     AREA       |   ----------------
  |                |
  ------------------
  |     button     |
  ------------------
```

For `nearestTo()` it also considers special cases, for example, modal dialogues. Therefore the element selected by AskUI might sometimes be wrong from a user's point of view.

You can use `moveMouseTo()` like in the following example to see what element an instruction targets.

```ts
await aui
  .moveMouseTo()
  .textfield()
  .above()
  .button()
  .withText('Submit')
  .exec()
```

---

## Extracting Data from Elements
In this section you will learn how to extract elements and their values out of your User Interface.

We will also cover on how to use the extracted information in your code, so you can introduce real interactivity into your workflow.

### Basic Usage
The [get()](../../api/06-Getters/get.md)-Instruction returns an array of all the elements it found. It looks like this example:

```text 
 console output: [
  DetectedElement {
     name: 'TEXT',
     text: 'Sign In',
     bndbox: BoundingBox {
        xmin: 1128.2720982142857,
        ymin: 160.21332310267857,
        xmax: 1178.8204241071428,
        ymax: 180.83512834821428
     }
   },
   ...
 ]
```

Usually you do not want every element from your UI returned. So you pair it with an element-selector:

```typescript
const textFieldText = 
  await aui
    .get()
    .text()
    .in()
    .textfield()
    .exec();
```



```text
[
  DetectedElement {
    name: 'text',
    text: 'Search',
    bndbox: BoundingBox { xmin: 488, ymin: 138, xmax: 548, ymax: 164 },
    colors: [ '', '', '' ]
  }
]
```

### Extract the Value
You can extract the value by reading the `text`-property of the `DetectedElement`.

**Notice: `textFieldText` is an array. You have to iterate over it or use an index to access the `DetectedElement`.**

```typescript
// Access by index
// textFieldTextValue gets the value 'Search'
const textFieldTextValue = textFieldText?.[0]?.text;
```

### Use Extracted Value as Input
You can use the extracted value as input for another textfield for example:

```typescript
await aui
  .typeIn(textFieldTextValue)
  .textfield()
  .contains()
  .text()
  .withText("AskUI")
  .exec();
```

---

## Scrolling
When you use AskUI you can only interact with elements that you can see on your screen. Therefore you have to scroll down/sideways to interact with currently invisible elements.

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

### Scrolling on Touch Displays
On touch displays you have to recreate the swipe gesture:

:::tip
If you want to swipe an element instead of the whole screen: [Checkout the swipe() API docs](../../api/02-Actions/swipe.md).
:::

```javascript
// Touch the display with your finger, move finger to the left, release
// Important: Make sure not to accidentially touch a swipeable element
// as this might only swipe the element!
await aui.mouseToggleDown().exec()
await aui.moveMouseRelatively(-1500, 0).exec()
await aui.mouseToggleUp().exec()
```

---

## Implement Assertions
In this section we will show you how to assert if an element is there or not.

### Assert the (non) Existence of Elements
To validate if an element exists or not we use [expect()](../../api/02-Actions/expect.md) in combination with [exists()](../../api/05-Checks/exists.md) or [notExists](../../api/05-Checks/notexists.md).

```typescript
// Expect that a button with text 'Go for it' exists
await aui.expect().text('Login').exists().exec();

// Expect that a text 'Do not go for it' not exists
await aui.expect().text('Login').notExists().exec();
```

### Assert the Correctness of Values
Let's say you want to check if your automation actually wrote something into a textfield. You can do two things:

#### 1. Use expect() to check if the text in the textfield matches
This technique is useful if the text you entered is unique on the screen.

```typescript
// Type something into a textfield
await aui.typeIn("Please find me").textfield().contains().text("Enter email").exec();

// Assert if the textfield contains the value
await aui.expect().textfield().contains().text('Please find me').exists().exec();
```

#### 2. Retrieve the element with [get()](../../api/06-Getters/get.md) and use an assertions library
If your value is not unique on your screen you can retrieve the element with [get()](../../api/06-Getters/get.md) and a different selector. For example with a relational selector like [below()](../../api/04-Relations/below.md). With an assertion library you can assert if the value is correct.

Jest comes with assertions. You only have to import them into your AskUI-file.

:::info
Do not forget the import mentioned at the start of the snippet!
:::

```typescript
// Add this to the start of your AskUI-file containing your workflows/instructions
import {expect, jest, test} from '@jest/globals';

// Type something into a textfield
await aui.typeIn("Please find me").textfield().contains().text("Enter email").exec();

// You have to retrieve the text you wrote inside the textfield here
// If you retrieve the textfield it does not contain the text inside of it
const textfield = await aui.get().text().below().text("User email").exec();

// below() returns an array. We want the first element of that array!
expect(textfield[0].text).toBe("Please find me");
```
