---
title: Condition-Based Execution
---

# Condition-Based Execution
A common problem of UI Automation is that the user interface changes from run to run for some of the following reasons:

* A popup appears _randomly_
* Elements like buttons have different labels depending on the app state
* ...

In this case, you need to check if an element is visible —or not visible depending on your use case— and change the workflow execution accordingly.

We will show you how to do that with an example.

## Check for (Non-) Existence of an Element
On our [AskUI Practice Page](https://askui.github.io/askui-practice-page/) we have a theme switcher-button. It either has the label **Switch to Dark** or **Switch to Light** depending on which theme is enabled:

![Button with label _Switch to Dark_](./images/condition-based-execution-button-switch-to-dark.png)

![Button with label _Switch to Light_](./images/condition-based-execution-button-switch-to-light.png)

### Check for Existence
To check if the button with the label _Switch to Dark_ is present on the screen you first use `get()` and then test if the length of the returned array is greater than zero:

```typescript
const switchToDark = await aui.get()
                              .text('Switch to Dark')
                              .exec();

if (switchToDark.length > 0) {
  // Do something here
}
```

### Check for Non-Existence
To check if the button with the label _Switch to Light_ is **not** present on the screen you first use `get()` and then test if the length of the returned array is zero:

```typescript
const switchToLight = await aui.get()
                               .text('Switch to Light')
                               .exec();
if (switchToLight.length === 0) {
   // Do something here
}
```

## Recommendation
Following the example above you can create a theme switch inside your workflow like this:

```typescript
const switchToDark =
    await aui.get()
              .text('Switch to Dark')
              .exec();
const switchToLight =
    await aui.get()
              .text('Switch to Light')
              .exec();

if (switchToLight.length > 0) {
  await aui.click()
            .text('Switch to Light')
            .exec();
}
else if (switchToDark.length > 0) {
  await aui.click()
            .text('Switch to Dark')
            .exec();
}
```

But this will clutter your workflow and make it hard to maintain. It is better to move the code into a separate function which can be called from anywhere. With that you create a modular piece of workflow that can be used anywhere:

```typescript
async function switchDarkLight() {
  const switchToDark =
      await aui.get()
                .text('Switch to Dark')
                .exec();
  const switchToLight =
      await aui.get()
                .text('Switch to Light')
                .exec();

  if (switchToLight.length > 0) {
    await aui.click()
              .text('Switch to Light')
              .exec();
  }
  else if (switchToDark.length > 0) {
    await aui.click()
              .text('Switch to Dark')
              .exec();
  }
}

// Call it like this from other workflows
await switchDarkLight();
```
