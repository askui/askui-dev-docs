---
sidebar_position: 7
pagination_next: general/Getting Started/whats-next
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Your First Instruction

:::tip
What you will learn

- Understanding AskUI Workflow files
- Creating and running your first automation
- How to select Elements that are not recognized
:::

## Prerequisites
- AskUI is installed on your computer.
- The AskUI Controller is running.
- We recommend using a second monitor to ensure AskUI is not interacting with your code editor.
- You have a workflow file open on your main display e.g. the original template `askui_example/my-first-askui-test-suite.test.ts` in the directory you initialized your AskUI-Project before.

:::info
**For macOS Users**  
Some users have reported instability running AskUI on macOS with external displays and/or [virtual desktops (called Spaces)](https://support.apple.com/en-gb/guide/mac-help/mh14112/mac). If you experience similar issues, please disconnect external displays and close virtual desktops.
:::

## Anatomy of an AskUI Workflow File
An AskUI Workflow file, using the Jest framework, is a versatile tool for automating user interface (UI) interactions across various applications, extending beyond traditional testing scenarios. It allows users to script complex UI interactions for both automation tasks and testing purposes.

### Key Components
**Import Statements**: Begin by importing necessary AskUI modules and helpers.

**`describe` Block**: Groups related UI automation scenarios or tests.

**`it` Blocks**: Each block defines a specific UI interaction or automation task, such as form submissions, navigation, or simulating user actions.

**AskUI API**: Utilized within it blocks for direct UI interactions, like clicking, typing, or navigating.
<!-- vale off -->
**Execution Instructions**: Commands provided for running the automated tasks or tests through the terminal.
<!-- vale on -->

### Example

```typescript showLineNumbers
import { aui } from './helpers/askui-helper';

describe('AskUI Automation Scenarios', () => {
  it('executes a specific task', async () => {
    await aui.click().text("Button Name").exec();
    // Additional automation logic
  });

  // More it blocks for different scenarios
});
```

## Step-by-Step Implementation With Example
You will automate a [web calculator](https://askui.github.io/askui-practice-page) in this example to show you all the different techniques. Feel free to follow along. Our goal is to type `2.6+2` by clicking the buttons and then get the result by clicking `=`.

![The Google calculator](images/create-first-instruction-calculator-raw.png)

:::tip
You will learn:

- How to see and get element-descriptions from an annotated screen
- Use different element-selectors
- Select elements that were not recognized by AskUI at first

:::

---

### Step 1: Annotate Your Screen
The (interactive) annotation serves as the first step in automating UI interactions. It's a process where the tool captures a snapshot of the user interface and identifies all interactive elements like buttons, textfields, and other controls.

<Tabs>
  <TabItem value="windows" label="Windows" default>

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
import { aui } from './helpers/askui-helper';

describe('AskUI on Windows', () => {
  it('should generate an HTML annotation', async () => {
    await aui.annotate();
  });
});
```
  </TabItem>
  <TabItem value="macos" label="MacOS">

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
import { aui } from './helpers/askui-helper';

describe('AskUI on MacOS', () => {
  it('should generate an interactive annotation', async () => {
    await aui.annotateInteractively();
  });
});
```
  </TabItem>
  <TabItem value="linux" label="Linux">

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
import { aui } from './helpers/askui-helper';

describe('AskUI on Linux', () => {
  it('should generate an interactive annotation', async () => {
    await aui.annotateInteractively();
  });
});
```
  </TabItem>
</Tabs>

---

#### Run the Annotation

To execute the instruction:

<Tabs>
  <TabItem value="windows" label="Windows" default>
  Switch into [AskUI Development Environment (ADE)](../../adk/02-Components/AskUI-Development-Environment.md) by running `askui-shell` in a Command Prompt first.

  ```shell
  AskUI-RunProject
  ```
  </TabItem>
  <TabItem value="macOS" label="macOS" default>
  Enter into your terminal:

  ```shell
  npm run askui
  ```
  </TabItem>
  <TabItem value="linux" label="Linux" default>
  Enter into your terminal:

  ```shell
  npm run askui
  ```
  </TabItem>
</Tabs>

A few seconds later an (interactive) annotation will be generated. If you have used the `annotate()` command, the annotation files are saved under `<project_root>/report`.

Your (interactive) annotation looks something like this:

![Annotation of the Google calculator](images/create-first-instruction-calculator-annotated.png)

:::warning

Your annotation may look differently and some red bounding boxes could be missing as AskUI detects elements visually. This means the detection is dependent on your screen resolution and settings! You will learn how to deal with this in a moment. 

:::

To close the interactive annotation, use `CMD/CTRL + W` or `ESC`.

If you’d like a deeper explanation as to what an (interactive) annotation is, read about it here. [Explanation of (Interactive) Annotations](../03-Element%20Selection/annotations-and-screenshots.md)

---

### Step 2: Interacting with Your Target Element
You first need an _action_ to interact with the element. You want to `click` the button so you add a `click()` to the instruction as you can see in the following code. Check our [API documentation](../../api/02-Actions/click.md) for all the actions.

The code is commented out for now as it is not valid yet.

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
it('should click on my element', async () => {
//  await aui
//    .click(); // your action
});
```

---

### Step 3: Identifying Your Target Element
This step is about pinpointing the exact UI element (like a button or link) you want to interact with. The element's properties (called _element-description_) acts like a unique identifier for each UI component.

First hover over the button containing the `2` and do a left mouse click. You now have the element-description in your clipboard.

![Hovering over the button containing the `2`](images/create-first-instruction-two-button.png)

Then add it to your action as shown in the code below.

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
it('should click on my element', async () => {
  await aui
    .click() // your action
    .button() // your element-description
    .exec();
});
```

As you can see AskUI tries to click a `button()` but it does not know _which one_ yet. Generally you need to think about what makes the target element unique visually. Possibly over multiple runs. In this case there is no other button with the label `2`, so targeting a button that contains the text `2` should be a reliable way to target this specific element. Also check out all the [element-descriptions](../../api/01-API/table-of-contents.md#element-descriptions).

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
it('should click on my element', async () => {
  await aui
    .click() // your action
    .button().contains().text('2') // your element-description
    .exec();
});
```

:::tip
You can freely go to [Step 4: Executing an Instruction](#step-4-execute-an-instruction) before you finished the whole example to see how your workflow runs before you are finished.
:::

---

Now you run into a problem that somehow `.` is not detected as a text and you have a lot of buttons already. So targeting the button with `.` only by specifying a button will not work. But you can use a relational selector for this.

You will target the `.`-button by selecting it in _relation_ to another button that is recognized. You already know that the `2`-button works. So you instruct AskUI to click the button `below` the `2`-button:

```typescript
await aui.click()
         .button() // This is your target
         .below() // This is your relation
         .button().contains().text('2') // This is your anchor
         .exec();
```

---

After you entered `6` as described [in step 2 and 3](#step-2-interacting-with-your-target-element) you realize that the `+` is not recognized as text, but as an icon. For these cases where an element is not recognised correctly or not recognised at all you can use `customElement()` with which you basically select the element based on an image of the element. 

:::warning

The annotation is dependent on your screen resolution and settings! The `+` may be detected correctly on your machine. In this case, please follow along as if it were _not_ detected correctly.

:::

Do the following to select the `+`-button:

1. Create a new folder `custom_elements` in your AskUI Project. Then 
2. Crop out the `+`-button from your screen like this with a snipping tool: ![Cropped out `+`-button](./images/create-first-instruction-plus-button.png)
3. Save it with the name `plus.clickable.button.png` in `custom_elements`

```bash
project_root/
├─ askui_example/
├─ node_modules/
├─ custom_elements/
  ├─ plus.clickable.button.png
├─ .eslintignore
├─ .eslintrc.json
├─ package.json
├─ tsconfig.json
```

```typescript
  await aui
    .click()
    .customElement({
      customImage: './custom_elements/plus.clickable.button.png',
    })
    .exec();
```

---

### Step 4: Execute an Instruction

Comment out the annotation instruction: Use `xit` to ignore the annotation instruction in future runs.
The final version should look like this:

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
describe('jest with askui', () => {

  xit('should generate an annotation', async () => {
    await aui.annotate(); // your inactive annotation
  });

  it('should click on my element', async () => {
    await aui.click().button().contains().text('2').exec();
    await aui.click()
        .button() // This is your target
        .below()
        .button().contains().text('2') // This is your anchor
        .exec();
    await aui.click().button().contains().text('6').exec();
    await aui
        .click()
        .customElement({
          customImage: './custom_elements/plus.clickable.button.png',
        })
        .exec();
    await aui.click().button().contains().text('2').exec();

    // The attentive reader might notice that the last step
    // is missing: You should know how that works by now hopefully ;-)
    // If you need help visit https://community.askui.com/forums/home
  });
});
```

As before, run the code in your terminal:
- Windows: Enter ADE and run `AskUI-RunProject`.
- macOS/Linux: Run `npm run askui`.

You should see AskUI take over your mouse, mouse over the elements you chose and click.

Congratulations! You’ve just built your first automation using AskUI. :tada:

:::tip
We compiled a **[list of Recommended Practices](../03-Element%20Selection/recommended-practices.md)** that will help you to implement your workflows.
:::
