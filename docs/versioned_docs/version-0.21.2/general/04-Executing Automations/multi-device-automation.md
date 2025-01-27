---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Automating Multiple Devices

This tutorial shows how to automate multiple devices on the same network by using AskUI. After following this page, you will be able to automate more than one device across different platforms, whether Linux, macOS, Windows or Android.

📌 *The following tutorial assumes that you have already installed and set up the AskUI library on your local device. The code for the configuration is based on the generated code. See [Getting Started](../01-Getting%20Started/write-your-first-instruction.md) for more details.*

![multi-device-automation](images/multi-device-diagram.png)

## Automate Remote Devices Running on Windows, Linux or macOS

### 1. Run the AskUI Controller for Each Device
Run the following command to start the *AskUI Controller* for your local device on port 6769:

```bash
# DisplayNum specifies the display the AskUI Controller is controlling
# If you have more than 1 display you have to change accordingly (0 main display)
# The AskUI Controller renders a white border overlay around the controlled display
AskUI-StartController -DisplayNum 0 -RunInBackground -Port 6769
```

If running successfully, you should see the logs printed on the terminal, for example:

```bash
[2024-10-07 14:04:25.663 +0200] INFO (AskUI Controller): Selecting display number '1'.
[2024-10-07 14:04:25.665 +0200] INFO (AskUI Controller): Successfully started.
```

### 2. Configure the `helpers/askui-helper.ts`
For a remote device you can use the [Silent Installer option of the installer (Only Linux and macOS)](../../suite/02-Components/silent-unix-installer.md). After the installation you have to first start the AskUI controller and then find out the IP of the remote device. You need it for connecting to the AskUI Controller from your local device:

```bash
# Windows only
ipconfig /all

# macOS only
ipconfig getifaddr en0

# Linux only
hostname -I
```

And then change the `<ip-address-remote-device*>` in the `helpers/askui-helper.ts`:

```ts
import { UiControlClient, UiController } from 'askui';

let remoteDevice1: UiControlClient;
let remoteDevice2: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {

    // This client will communicate with
    // the controller running on the remote device 1.
    // Replace the <ip-address-remote-device1>
    // with the IP from remote device 1
    remoteDevice1 = await UiControlClient.build({ 
        uiControllerUrl: "ws://<ip-address-remote-device2>:6769",
    });

    await remoteDevice1.connect();

    // This client will communicate with
    // the controller running on the remote device 2.
    // Replace the <ip-address-remote-device2>
    // with the IP from remote device 2
    remoteDevice2 = await UiControlClient.build({    
        uiControllerUrl: "ws://<ip-address-remote-device2>:6769",
    });

    await remoteDevice2.connect();

    // Add more UiControlClients for more devices
});

afterAll(async () => {
    remoteDevice1.disconnect();
    remoteDevice2.disconnect();

    // Do not forget:
    // Add disconnect for additional UIControlClients
});

export { remoteDevice1, remoteDevice2 };
```

## Automate Remote Device(s) Running on Android

:::info
Automating a remote Android device works differently than automating a Windows, Linux or macOS remote device.
Your local machine communicates with the remote Android device over the _Android Debug Bridge_.

Thus the AskUI Controller runs on your local machine and __not__ on the remote Android device!
:::

Also [check out our example repository](https://github.com/askui/askui-example-android-multi-device) to see the setup in action 🙂.

### 1. Prepare Your Android Device(s)

Prepare your remote Android device(s) with [this tutorial](mobile-automation.md#android).

Use the commands below, if you want to connect an Android device via `adb` wirelessly:

```bash
# Connect the Android device with a
# USB cable, and run this command:

# Run this command to confirm that your
# Android device is discoverable
adb devices # will print the <device-id>

# Replace <device-id> with your device-id
# This sets the port the adb is listening
# on for commands.
#
# IMPORTANT:
# Set this to a different port for each device
# you connect!
adb -s <device-id> tcpip 9000

# Replace the <local-ip-address>
# In this example localhost: 127.0.0.1
adb -s <device-id> connect <local-ip-address>:9000

# Run this command, if you want to check the local
# ip address of the android device
adb -s <device-id> shell ip -f inet addr show wlan0

# Now you can disconnect the USB cable from the Android device.
# Confirm that the Android device is recognised by adb wirelessly.
adb devices
```

### 2. Start AskUI Controller for Each Device
You __must__ start a separate AskUI Controller for each Android device you are automating. The `-Port` argument sets the port the AskUI Controller is listening on for commands. Choose a different one for each device.

:::tip

Run `adb devices` in a terminal to get a list of connected devices and their device ids.

```bash
$ adb devices
emulator-1 device product:sdk_google_phone_x86_64 model:Android_SDK_built_for_x86_64 device:generic_x86_64
emulator-2 device product:sdk_google_phone_x86 model:Android_SDK_built_for_x86 device:generic_x86
```

:::

Set a different port for each AskUI Controller and specify which Android device to connect to with the `-d` flag.

```bash
# Activate AskUI Development Environment (ADE) first
# Connects to the first device returned by 'adb devices'
AskUI-StartController -Runtime android -RunInBackground -Port 6769 -DeviceId "<your-device-id-1>"

# Connects to the second device returned by 'adb devices'
AskUI-StartController -Runtime android -RunInBackground -Port 6770 -DeviceId "<your-device-id-2>"
```

### 3. Configure the `helpers/askui-helper.ts`

```typescript
import { UiControlClient } from 'askui';

// Client is necessary to use the askui API
let auiAndroidDevice1: UiControlClient;
let auiAndroidDevice2: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {

  // Connects to AskUI Controller 1 (emulator-1)
  remoteDevice1 = await UiControlClient.build({
    uiControllerUrl: "ws://127.0.0.1:6769",
  });
  await remoteDevice1.connect();
  
  // Connects to AskUI Controller 2 (emulator-2)
  remoteDevice2 = await UiControlClient.build({
    uiControllerUrl: "ws://127.0.0.1:6770",
  });
  
  await remoteDevice2.connect();
});

...

afterAll(async () => {
  remoteDevice1.disconnect();
  remoteDevice2.disconnect();
});

export { remoteDevice1, remoteDevice2 };
```

## Write the AskUI Code

Write the AskUI code in `test/my-first-askui-test-suite.test.ts`:

```ts
import { remoteDevice1, remoteDevice2 } from './helper/jest.setup';

describe('jest with askui', () => {
    it('should work with multiple devices', async () => {
        const everyElementRemote1 = await remoteDevice1.getAll().exec();
        console.log(everyElementRemote1);

        await localDevice.moveMouse(500,500).exec();
        const everyElementRemote2 = await remoteDevice2.getAll().exec();
        console.log(everyElementRemote2);
    });
});
```

## Run the Code

Run the command below to run the AskUI code:

Switch into ADE by running `askui-shell` in a command prompt first.

```powershell
AskUI-RunProject
```

## Conclusion
Now you should be able to automate multiple devices in the network. If you got any issues while following this tutorial, don't hesitate to ask our [Outverse-Community](https://community.askui.com/forums/home)!
