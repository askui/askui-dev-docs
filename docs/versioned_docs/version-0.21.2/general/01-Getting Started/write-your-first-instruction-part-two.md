---
sidebar_position: 7
pagination_next: general/Getting Started/whats-next
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Interact with Elements

### Step 1: Interacting with Your Target Element
You first need an _action_ to interact with the element. You want to `click` the button so you add a `click()` to the instruction as you can see in the following code. Check our [API documentation](../../api/02-Actions/click.md) for all the actions.

The code is commented out for now as it is not valid yet.

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
it('should click on my element', async () => {
//  await aui
//    .click(); // your action
});
```

---

### Step 2: Identifying Your Target Element
This step is about pinpointing the exact UI element (like a button or link) you want to interact with. The element's properties (called _element-description_) act like a unique identifier for each UI component.

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

As you can see AskUI tries to click a `button()` but it does not know _which one_ yet. Generally you need to think about what makes the target element unique visually. Possibly over multiple runs. In this case, there is no other button with the label `2`, so targeting a button that contains the text `2` should be a reliable way to target this specific element. Also check out all the [element-descriptions](../../api/01-API/table-of-contents.md#element-descriptions).

```typescript title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers
it('should click on my element', async () => {
  await aui
           .click() // your action
           .button().contains().text('2') // your element-description
           .exec();
});
```

:::tip
You can freely go to [Step 3: Executing an Instruction](#step-3-execute-an-instruction) before you finish the whole example to see how your workflow runs before you are finished.
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

After you entered `6` as described [in step 2 and 3](#step-1-interacting-with-your-target-element) you realize that the `+` is not recognized as text but as an icon. For these cases where an element is not recognized correctly or not recognized at all, you can use `customElement()` with which you select the element based on an image of the element. 

:::warning

The annotation is dependent on your screen resolution and settings! The `+` may be detected correctly on your machine. In this case, please follow along as if it were _not_ detected correctly.

:::

Do the following to select the `+`-button:

1. Create a new folder `custom_elements` in your AskUI Project. Then 
2. Crop out the `+`-button from your screen like this with a snipping tool.  
(**Make sure to get the whole element, but crop it out as tightly as possible**): ![Cropped out `+`-button](./images/create-first-instruction-plus-button.png)
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
  await aui.click()
           .customElement({
             customImage: './custom_elements/plus.clickable.button.png',
           })
           .exec();
```

---

### Step 3: Execute an Instruction

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
    await aui.click()
             .customElement({
               customImage: './custom_elements/plus.clickable.button.png',
             })
             .exec();
    await aui.click().button().contains().text('2').exec();

    // The attentive reader might notice that the last step
    // is missing: You should know how that works by now hopefully ;-)
    // If you need help visit https://app.outverse.com/askui/home
  });
});
```

As before, run the code in your terminal:
- Windows: Enter ADE and run `AskUI-RunProject`.
- macOS/Linux: Run `npm run askui`.

You should see AskUI take over your mouse, mouse over the elements you chose and click.

Congratulations! You’ve just built your first automation using AskUI. :tada:

## Where to Go Next?
:::tip
We compiled a **[list of Recommended Practices](../03-Element%20Selection/recommended-practices.md)** that will help you to implement your workflows.

You can check out **[tutorials for inspiration](../06-Tutorials/index.mdx)**.

Or learn about **[Mobile Automation](../04-Executing%20Automations/mobile-automation.md)**.
:::
