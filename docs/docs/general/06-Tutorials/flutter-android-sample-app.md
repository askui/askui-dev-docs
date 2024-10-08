---
sidebar_position: 6
---

# Flutter Sample Android App

This tutorial shows how to use AskUI to automate an Android app built with [Flutter](https://flutter.dev/). We provide the source code for the Flutter demo app used in this tutorial ([GitHub repository](https://github.com/askui/flutter-example-automation)). Set up the demo app by following the instructions below. This tutorial assumes that you already have your Android device prepared. It can be a real Android device or an Android Emulator.

**If you haven't set up your Android device or Emulator yet, [follow this tutorial](../04-Executing%20Automations/mobile-automation.md#android).**

This tutorial includes:

* Build and Run the Flutter Demo App
* Set up the ADBKeyboard
* Click/Touch Automation
* Type Automation
* Swipe Automation

## Live Demo in Action (playback speed x3)
![Flutter sample app in action](/img/gif/flutter-sample-app-tutorial-inaction-fast.gif)

## Setup
The source code for the Flutter demo app used in this tutorial is provided in [this repository](https://github.com/askui/flutter-example-automation).

### 1. Build and Run Flutter Demo App
1) [Install Flutter](https://docs.flutter.dev/get-started/install)

2) Clone [this repository](https://github.com/askui/flutter-example-automation) and run `flutter create demo_app` within the directory:

```shell
git clone https://github.com/askui/flutter-example-automation
cd flutter-example-automation
flutter create demo_app
cd demo_app
```

3) Install dependencies for the Flutter demo app:

```shell
# run this command inside the flutter project
# directory `demo_app/`
flutter pub add camera intl
```

4) To use the camera, we need to set the `minSdkVersion` in `android/app/build.gradle`:

```json
// inside the 'android/app/build.gradle' 
// set the 'minSdkVersion' to 21
default config {
  ...
  minSdkVersion 21
  ...
}
```

5) (optional) The app is ready to be built but will throw deprecation warnings. If you want to clear the deprecation warnings, follow this step ([See also this issue.](https://github.com/flutter/flutter/issues/89578#issuecomment-945916643)).

```shell
# change the respective part inside the 'pubspec.yaml'
dependencies:
  camera:
    git:
      url: https://github.com/flutter/plugins
      path: packages/camera/camera
      ref: 9e46048ad2e1f085c1e8f6c77391fa52025e681f
```

6) Run the Android Emulator.

7) Run the demo app:

```shell
flutter run
```

Now you should see the demo app running on your Android device.

### 2. Setup ADBKeyboard
In this example, we are going to automate the typing on the Android device. To let AskUI fluently type as desired, we will use a virtual keyboard that handles the keyboard input via `adb`: [ADBKeyboard.apk](https://github.com/senzhk/ADBKeyBoard)


1) Download the ADBKeyboard package: [Link to GitHub Repository](https://github.com/senzhk/ADBKeyBoard/blob/master/ADBKeyboard.apk)

2) Find your device:

```shell
# Make sure that your Android device is connected, and the USB debugging mode is enabled
adb devices
```

3) Install the ADBKeyboard on the device:

```shell
adb -s <your device id> install ADBKeyboard.apk
```

4) Configure the ADB Keyboard:

```shell
adb -s <your device id> shell settings put secure default_input_method com.android.adbkeyboard/.AdbIME
```

5) Enable the ADB Keyboard:

```shell
# inside ADBKeyBoard-2.0/
adb -s <your device id> shell ime enable com.android.adbkeyboard/.AdbIME
```

7) To check if it is enabled:

Click on a textfield in an app and see if the `ADB Keyboard {ON}` notification is shown at the bottom of the screen.

## 3. Setup AskUI
1) Setup AskUI by following the *Getting Started Guide* for your operating system:

* [Windows](../01-Getting%20Started/Installing%20AskUI/getting-started.md)
* [macOS](../01-Getting%20Started/Installing%20AskUI/getting-started-macos.md)
* [Linux](../01-Getting%20Started/Installing%20AskUI/getting-started-linux.md)

2) We need to run the AskUI Controller directly with extra arguments to specify the runtime mode and the device id of your Android device.

```powershell
AskUI-StartController -Runtime android -RunInBackground -DeviceId "<your-device-id>"
```

If you got them both (emulator and AskUI Controller) running, then we are ready to go for the UI automation.
‍
3) Next, you have to change a few lines of the generated code in  `helpers/askui-helper.ts`. It should look like this:

```ts
import { UiControlClient} from 'askui';

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  aui = await UiControlClient.build({});
  await aui.connect();
});

afterAll(async () => {
  aui.disconnect();
});

export { aui };
```

## Breaking Down the AskUI Code
This chapter will walk you through the provided `askui-test/demo-automation.ts` step by step.
The code is divided into three parts, and each part automates a different tab within the demo app:

* **Outline tab**: Find a textfield and type in characters.
* **Datepicker tab**: Select a desired date within the date picker widget.
* **Camera tab**: Open the camera and push the record button.

## 0. General Tips for Using AskUI as a More Friendly Tool:
1) **Try to annotate**: Use `await aui.annotateInteractively()` or `await aui.annotate()` in order to see how AskUI is understanding the visible elements on your screen. By using `await aui.annotate()`, the result of the annotation will be saved in the folder `report/` as an HTML file.

2) **Be aware of the screen size of your device**: AskUI understands your application based on the screen shown and captured. Therefore, on some occasions, you may want to know your screen size to for example properly scroll or swipe within your application. You may need to change the numbers for the `input swipe` command within the provided code so that it suits the screen size of your device.

3) **Try to select the elements by their text**

*tip: If you are using a device with a larger screen for example Tablet, then the screen of your device (real Android device or emulator) might be big enough to see the whole page without scrolling.*

### 1. Click and Type
The code is within the file `askui-test/demo-automation.ts`. Copy and paste the code into your AskUI code.

We start the run from the very first tab of our demo app.

![First tab of the demo app](images/flutter-sample-app-first-tab.jpeg)

To type into a textfield, we first need to get focus on the desired textfield. We can achieve it by running the code below:

```typescript
// click on the textfield and type characters
// repeat this as many times as the textfields
await aui.clickText({text: 'Enter your username', type: 'similar'});
await aui.type('askui').exec();
```

As we have multiple of textfields in our demo app, we can iterate the same procedure for each of them:

```typescript
// click on the textfield and type characters
// repeat this as many times as the textfields
await aui.clickText({text: 'Enter your username', type: 'similar'});
await aui.type('askui').exec();

// click and type the email address
await aui.clickText({text: 'Enter your email', type: 'similar'});
await aui.type('askui@askui.com').exec();

// Click and type the address
await aui.clickText({text: 'Enter your address', type: 'similar'});
await aui.type('Haid-und-Neu-Straße 18').exec();

// Pressing enter is the equivalent of pressing the return button on the on-screen-keyboard
// This gets rid of the focus from the textfield
await aui.pressAndroidKey('enter').exec();
```

After filling up the textfields, we can push the buttons at the bottom of the page:

```typescript
// Press the 'Submit' button
await aui.clickText({text: 'Submit', type: 'similar'});

// We will have a popup window that has two buttons. Press the 'Refuse' button
await aui.clickText({text: 'Refuse', type: 'similar'});

// Here we press multiple toggle buttons one by one
await aui.clickTexts(['Banana', 'Mango', 'Sunny', 'Rainy', 'Windy']);

// Attention for swiping!
/*  Swipe/scroll within the page
  - execOnShell() can run shell commands within the device via adb.
  - Note that, you have to adjust the four numeric parameters,
          in order to make it fit to your device's screen.
  - The syntax is:
      input swipe <startX> <startY> <endX> <endY>
  - Depending on the screen size of your device,
          the coordinates should stay within the scrollable/swipeable area of the app.
          i.e. the 'Tabbar' at the top of the demo app is not scrollable.
*/

// Here we swipe the page two times in a row
await aui.execOnShell('input swipe 1000 1000 100 1000').exec();
await aui.execOnShell('input swipe 1000 1000 100 1000').exec();
```

## Datepicker
After running the code above, we should see the demo app swiped to the Datepicker tab.

![Datepicker tab of the demo app](images/flutter-sample-app-second-tab-datepicker.jpeg)

First, we select and type characters into two different textfields:

```typescript
// First, we type in the desired values into the textfields.
await aui.clickText({text: 'Title', type: 'similar'});
await aui.type('My vacation plan').exec();
await aui.clickText({text: 'Description', type: 'similar'});
await aui.type('0. Drink a lot of water').exec();
await aui.pressAndroidKey('tab').exec();
```

Thereafter, we interact with two different date picker widgets that are represented with edit buttons:

```typescript
// Second, we select a desired date from the Datepicker widget.
await aui.click().text('edit').nearestTo().text('Depature').exec(); // this will open up the calendar

// Notice how we select the icon 'chevron right/left' to shift the calendar month.
// We use a relational selector and the text '11'
// which is generally recognized reliably
await aui.moveMouseTo().icon().above().text('11').exec();
await aui.mouseLeftClick().exec();

// within the calendar, we push the > icon on the top right corner
await aui.mouseLeftClick().exec();
await aui.clickText({text: '7', type: 'similar'}); // select 7
await aui.clickText({text: 'ok', type: 'similar'}); // then, press OK

// Repeat the step for the next Datepicker widget.
await aui.click().text('edit').nearestTo().text('Return').exec();
await aui.moveMouseTo().icon().above().text('11').exec();
await aui.mouseLeftClick().exec();
await aui.mouseLeftClick().exec();
await aui.mouseLeftClick().exec();
await aui.clickText({text: '5', type: 'similar'});
await aui.clickText({text: 'ok', type: 'similar'});
```

Let's go further below to the bottom of the page, and then interact with more interfaces:

```typescript
// click and check the checkbox
await aui.click().element().leftOf().text('Brushed Teeth').exec();

// finally, we turn on the switch
await aui.click().switch().rightOf().text('Enable feature').exec();

// Swipe the page to the Camera tab
await aui.execOnShell('input swipe 1000 1000 100 1000').exec();
```

## Take a Picture with the Camera
In the final tab **Camera**, we can launch the device's camera and take a picture by pressing the record button.
‍
![Camera tab of the demo app](images/flutter-sample-app-third-tab-camera.jpeg)

```typescript
// Click on the button 'Take a Picture', then it will launch the camera
await aui.clickButton({label: 'Take a Picture'});

// Notice how we select the record button.
// Our demo-app intends to have the record button in a circular shape.
// It is generally recognized as an element of type 'switch'
// We select it by anchoring it in relation to the camera icon
await aui.click().switch().rightOf().icon().exec();
```

## Complete AskUI Code
This is the complete code that runs AskUI to automate our workflow:

```typescript
import { aui } from './helpers/askui-helper';

describe('jest with askui', () => {
    xit('annotate', async () => {
        await aui.annotateInteractively();
    });

    it('should fill up the textfields and push buttons', async () => {
        // click on the textfield and type characters
        // repeat this as many times as the textfields
        await aui.clickText({text: 'Enter your username', type: 'similar'});
        await aui.type('askui').exec();

        // click on the textfield and type the email        
        await aui.clickText({text: 'Enter your email', type: 'similar'});
        await aui.type('askui@askui.com').exec();

        // Click and type the address
        await aui.clickText({text: 'Enter your address', type: 'similar'});
        await aui.type('Haid-und-Neu-Straße 18').exec();

        // Pressing enter is the equivelant to pressing the return button on the on-screen-keyboard
        // This gets rid of the focus from the textfield
        await aui.pressAndroidKey('enter').exec();

        // Press the 'Submit' button
        await aui.clickText({text: 'Submit', type: 'similar'});

        // We will have a popup window that has two buttons. Press the 'Refuse' button
        await aui.clickText({text: 'Refuse', type: 'similar'});

        // Here we press multiple of toggle buttons one by one
        await aui.clickTexts(['Banana', 'Mango', 'Sunny', 'Rainy', 'Windy']);

        // Attention for swiping!
        /*  Swipe/scroll within the page
            - execOnShell() can run shell commands within the device via adb.
            - Note that, you have to adjust the four numeric parameters,
            in order to make it fit to your device's screen.
            - The syntax is:
                input swipe <startX> <startY> <endX> <endY>
            - Depending on the screen size of your device,
            the coordinates should stay within the scrollable/swipeable area of the app.
            i.e. the 'Tabbar' at the top of the demo app is not scrollable.
        */

        // Here we swipe the page two times in a row
        await aui.execOnShell('input swipe 1000 1000 100 1000').exec();
        await aui.execOnShell('input swipe 1000 1000 100 1000').exec();
    });


    it('should pick the dates', async () => {
        // First, we type in the desired values into the textfields.
        await aui.clickText({text: 'Title', type: 'similar'});
        await aui.type('My vacation plan').exec();
        await aui.clickText({text: 'Description', type: 'similar'});
        await aui.type('0. Drink a lot of water').exec();
        await aui.pressAndroidKey('tab').exec();

        // Second, we select a desired date from the Datepicker widget.
        await aui.click().text('edit').nearestTo().text('Depature').exec(); // this will open up the calendar
        // We use a relational selector and the text '11'
        // which is generally recognized reliably
        await aui.moveMouseTo().icon().above().text('11').exec();
        await aui.mouseLeftClick().exec();
        await aui.mouseLeftClick().exec();
        await aui.clickText({text: '7', type: 'similar'}); // select 7
        await aui.clickText({text: 'ok', type: 'similar'}); // then, press OK


        // Repeat the step for the next Datepicker widget.
        await aui.click().text('edit').nearestTo().text('Return').exec();
        // We use a relational selector and the text '11'
        // which is generally recognized reliably
        await aui.moveMouseTo().icon().above().text('11').exec();
        await aui.mouseLeftClick().exec();
        await aui.mouseLeftClick().exec();
        await aui.mouseLeftClick().exec();
        await aui.clickText({text: '5', type: 'similar'});
        await aui.clickText({text: 'ok', type: 'similar'});

        // click and check the checkbox
        await aui.click().element().leftOf().text('Brushed Teeth').exec();

        // finally, we turn on the switch
        await aui.click().switch().rightOf().text('Enable feature').exec();

        // Swipe the page to the Camera tab
        await aui.execOnShell('input swipe 1000 1000 100 1000').exec();

    });

    it('should take a picture', async ()=>{
        // Click on the button 'Take a Picture', then it will launch the camera
        await aui.click().button().contains().text('Take a Picture').exec();

        // Notice how we select the record button.
        // Our demo-app intends to have the record button in a circular shape.
        // It is generally recognized as an element of type 'switch'
        // We select it by anchoring it in relation to the camera icon
        await aui.click().switch().rightOf().icon().exec();
    });
});
```

## Conclusion
After following through this tutorial, you should be able to automate the interaction with the provided demo app. Although this example specifically provides a demo app built with Flutter, the overall method of using AskUI should also work with any mobile app running on an Android device.

If you got an issue while following this example, or in case you would like to share your use case, don't hesitate to join our [community on Outverse](https://community.askui.com/forums/home)!
