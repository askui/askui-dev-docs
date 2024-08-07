---
sidebar_position: 4
---

# AskUI Controller
The AskUI Controller is a service that runs on your operating system. It can control inputs and observe the visuals on the operating system. The AskUI SDK connects to it and issues commands for user input like mouse movement and keypresses to it which the AskUI Controller executes like a real human user.

![Architecture drawing how the AskUI Controller works together with AskUI SDK. The AskUI Controller runs in an environment and executes commands given to it by AskUI SDK: keypresses, mouse movement and clicks. It also takes screenshots and sends them over the AskUI SDK to the AskUI Inference.](./images/askui-device-controller-simple-architecture.png)

:::caution
The AskUI Controller only works on __Windows__ and you have to __disable mouse acceleration__ for the AskUI Controller to work properly!
:::

## Start Over Terminal (AskUI Development Environment)
First switch into the [AskUI Development Environment (ADE)](AskUI-Development-Environment.md) by executing the command `askui-shell` in a terminal. The `AskUI-StartController` command is used to launch the **AskUI Controller**.

You have several configuration options, which you can find [here](AskUI-Development-Environment.md#askui-controller-management).

## Render Status Indicator (AskUI Development Environment)
The **Status Indicator** renders a border around your selected screen.

It can be activated by using the keyboard-shortcut `alt + f1` or by providing the option `showOverlay` to the `AskUI-StartController` command:

```powershell
AskUI-StartController -showOverlay
```

### Example

```powershell
AskUI-StartController -LogLevel debug -RunInBackground
```
:::info
Note: Adjust the parameters as needed for your specific use case.
:::

## Show All Controllers Over Terminal (AskUI Development Environment)
First switch into the [AskUI Development Environment (ADE)](AskUI-Development-Environment.md) by executing the command `askui-shell` in a terminal. The `AskUI-ShowControllers` command is used to show the running **AskUI Controller** processes.

:::info
Only AskUI Controller processes started by the `AskUI-StartController` command during the same session can be shown by this command.
:::

### Example

```powershell
# Show all AskUI running AskUI Controllers.
AskUI-ShowControllers

# Output
ProcessId DisplayNum Runtime Port
--------- ---------- ------- ----
     3528          0 desktop 6769
    15184          0 android 6781
```

## Stop Over Terminal (AskUI Development Environment)
First switch into the [AskUI Development Environment (ADE)](AskUI-Development-Environment.md) by executing the command `askui-shell` in a terminal. The `AskUI-StopControllers` command is used to stop the **AskUI Controller**.

You have several configuration options, which you can find [here](AskUI-Development-Environment.md#askui-controller-management).

:::info
Only AskUI Controller processes started by the `AskUI-StartController` command during the same session can be stopped by this command.
:::

### Examples

```powershell
# Stops the AskUI Controller with the following options: Port: 6769
AskUI-StopControllers -Port 6769

# Stop the AskUI Controller with the following options: DisplayNum: 0, Runtime: desktop
AskUI-StopControllers -DisplayNum 0 -Runtime desktop
```

:::info
Note: Adjust the parameters as needed for your specific use case.
:::

## Features

### Type Like a Human
Together with the asynchronous execution of actions we also introduce natural typing. The 
first iteration of this feature uses the typical typing speed of a human.

### Android on Windows
AskUI automation works on an Android device that is controlled from a Windows machine. It allows you to run a workflow on an Android device, including recording the session. Instructions on how to set up the Android workflow can be found in our [documentation](../../general/04-Executing%20Automations/mobile-automation.md).

> Please also read the [known issues section](#known-issues).

## Known Issues

### Mouse Movement
- You may encounter issues when mouse pointer acceleration is enabled.

### Log Files
- Log files are stored under `<YOUR_USER_FOLDER>/.askui/`.

### Android
- Recording on an Android device is not stable.
- Recorded resolution might be lower than the device resolution.
- Recorded video might be empty or single frame in cases no screen updates occurred during recording.
- We don't support landscape mode on Android.
- Devices with high DPI screen might not work as expected.
