---
sidebar_position: 3
---

# AskUI Development Environment (ADE)
After installation, the **ADE** is available for all users. No administrator privileges are necessary. ADE aims to reduce the amount of code needed to be written by you. It provides user-friendly commands that will assist you with AskUI product usage.

Start by typing `askui-shell` in the terminal and this will make all ADE commands available.

## Settings Management
ADE comprises three types of settings:

1. **Global Settings:**
    - Created by the installer.
    - Available for all users.
    - Includes configurations set during installation (for example, proxy settings).
2. **User Settings:**
    - Located in **`<USER_HOME_DIR>/.askui/Settings/AskuiEnvironmentSettings.json`**.
    - Applied to all new projects.
3. **Project Settings:**
    - Located in **`<PROJECT_DIR>/.askui/Settings/AskuiEnvironmentSettings.json`**.

:::info
Project settings override user settings, and user settings override default settings.
:::

### `AskUI-SetSettings` Command
The `AskUI-SetSettings` command configures ADE settings. It allows you to set parameters like proxy addresses, `AskUI access token`, and `workspace ID`. This function updates environment variables in both user and project configurations. Accepted parameters:

- `HttpProxy`: HTTP proxy address for AskUI configuration.
- `HttpsProxy`: HTTPS proxy address for AskUI configuration.
- `Token`: AskUI token for AskUI configuration.
- `WorkspaceId`: AskUI workspace ID for AskUI configuration.
- `LogLevel`: Log level for AskUI configuration.
- `Location`: Specifies the settings to be updated (User or Project). Default is User.
- `TLSConnectionCertificate`: Sets a server identity certificate that shall be accepted by our tooling.

#### Example

```powershell
# Set HTTP proxy address and AskUI token.
AskUI-SetSettings -HttpProxy "http://proxy.example.com" -Token "askui_token"
```

```powershell
# Set both HTTP and HTTPS proxy addresses, and AskUI workspace ID.
AskUI-SetSettings -HttpProxy "http://proxy.example.com" -HttpsProxy "https://proxy.example.com" -WorkspaceId "your_workspace_id"
```

### `AskUI-ShowSettings` Command
The `AskUI-ShowSettings` command retrieves and displays the AskUI configuration. 

Parameters:

- **`Location`**: Specifies the settings to be displayed (Merged or User or Project or Default). Default is Merged.
- **`WithSecrets`**: Specifies whether to display the settings secrets.

**Example:**

```powershell
# Get and display AskUI Merged Settings.
# Access token will be masked with *.
AskUI-ShowSettings
```

```powershell
# Get and display AskUI Merged Settings.
# Access token will be unmasked.
AskUI-ShowSettings -WithSecrets
```

```powershell
# Get and display AskUI User Settings.
AskUI-ShowSettings -Location User
```

### `AskUI-RemoveSettings` Command

The `AskUI-RemoveSettings` command is used to configure AskUI settings, allowing you to unset parameters such as proxy addresses, AskUI token, and workspace ID. The function has the following parameters:

- `HttpProxy`: Removes the HTTP proxy address from the AskUI Settings.
- `HttpsProxy`: Removes the HTTPS proxy address from the AskUI Settings.
- `Token`: Removes the AskUI token from the AskUI Settings.
- `WorkspaceId`: Removes the AskUI workspace ID from the AskUI Settings.
- `LogLevel`: Removes the log level from the AskUI Settings.
- `Credentials`: Removes the complete credentials from the AskUI Settings.
- `EnvironmentVariables`: Removes the complete environment variables from the AskUI Settings.
- `Location`: Specifies the settings to be updated (User or Project). Default is User.

**Example:**

```powershell
# Removes the HTTP proxy address and AskUI token.
AskUI-RemoveSettings -HttpProxy -Token
```

```powershell
# Removes the complete credentials.
AskUI-RemoveSettings -Credentials
```

## Project Management

### `AskUI-NewProject` Command
The `AskUI-NewProject` command creates a new AskUI project with customizable options. Use the following parameters:

- `ProjectName`: Specifies the project name.
- `WorkspaceID`: Provides the AskUI workspace ID.
- `Token`: Inputs the AskUI Token.
- `AskUINodeJsVersion`: Determines the version of AskUI Node.js to install (defaults to the latest).
- `SkipChangingPathUserPrompt`: Skips the prompt to change the project directory.
- `TestFramework`: Chooses the test framework: 'jest' or 'jasmine'.
- `UsingProxy`: Use a proxy: 'true' or 'false'.
- `TypeScriptConfig`: Overwrite `tsconfig.json`: 'true' or 'false'.

#### Example

```powershell
#This Command will create a new project in the current directory with the name `MyProject` and will skip the prompt to change the project directory.
AskUI-NewProject -ProjectName MyProject -WorkspaceId <Workspace_id> -Token <Token> -SkipChangingPathUserPrompt
```

### `AskUI-RunProject` Command
The `AskUI-RunProject` command executes an AskUI project. Note:

- This command is applicable only for projects created by `AskUI-NewProject`.
- Navigate to the project directory before running the command.

```powershell
AskUI-RunProject
```

## AskUI Controller Management
The AskUI Controller is a service that runs on your operating system. It is able to control inputs and observe the visuals on the operating system.

### `AskUI-StartController` Command

The `AskUI-StartController` command is used to launch the AskUI Remote Device Controller with the following customizable options:

- `DisplayNum`: Select a display number, default 0.
- `Maximize`: Start the app as a Maximized window.
- `Runtime`: Select the runtime (desktop, android). default desktop.
- `Port`: Port of the web socket server to connect via the runner-protocol. (Default: 6769)
- `ActionWaitTime`: Waits x milliseconds after each action. This can be used to slow down or speed up the execution. (Default: 1000)
- `WebSocketHost`: Host of the web socket server to connect via the runner-protocol. (Default: 127.0.0.1)
- `LogFile`: Output path for generated logs.
- `LogLevel`: Log level. (Default: debug)
- `RunInBackground`: Start the app in background mode.
- `showOverlay`: Renders a **Status Indicator** around your selected screen (Experimental).
- `DeviceId`: Select an Android device by id. For example, emulator-5554.

**Examples:**

```powershell
# This Command will start the AskUI Controller in background with all default options.
AskUI-StartController -RunInBackground
```

```powershell
# This Command will start the AskUI Controller in the background with the following options: DisplayNum: 0, Maximize: true, Runtime: desktop, Port: 6769, ActionWaitTime: 1000, WebSocketHost: 127.0.0.1
AskUI-StartController -DisplayNum 0 -Maximize -Runtime desktop -Port 6769 -ActionWaitTime 1000 -WebSocketHost 127.0.0.1 -LogFile "C:/Logs/remote_device_log.txt" -LogLevel debug -RunInBackground
```
:::info
Note: Adjust the parameters as needed for your specific use case.
:::

Also see the dedicated [AskUI Controller docs](AskUI-Controller.md) for more information.

### `AskUI-ShowControllers` Command
The `AskUI-ShowControllers` command is used to show the running **AskUI Controller** processes.

:::info
Only AskUI Controller processes started by the `AskUI-StartController` command during the same session can be shown by this command.
:::

**Example:**

```powershell
# Show all AskUI running AskUI Controllers.
AskUI-ShowControllers

# Output
ProcessId DisplayNum Runtime Port
--------- ---------- ------- ----
     3528          0 desktop 6769
    15184          0 android 6781
```

### `AskUI-StopControllers` Command
The `AskUI-StopControllers` command is used to stop the AskUI Remote Device Controller with the following customizable options:

- `DisplayNum`: Select a display number, default 0. Autocompletion support.
- `Runtime`: The runtime (desktop, android), default _desktop_. Autocompletion support.
- `Port`: Port of the web socket server of the AskUI Controller (Default: 6769) Autocompletion is provided.
- `DeviceId`: Select an Android device by id. For example, emulator-5554.

**Examples:**

```powershell
# Stops the AskUI Controller with the following options: Port: 6769
AskUI-StopControllers -Port 6769
```

```powershell
# Stop the AskUI Controller with the following options: DisplayNum: 0, Runtime: desktop
AskUI-StopControllers -DisplayNum 0 -Runtime desktop
```

:::info
Only Controller processes started by the `AskUI-StartController` command during the same session can be stopped by this command.
:::

## AskUI Debug Commands
The _Debug Commands_ help you to debug and manage your AskUI projects and the processes ADE creates. You have to enable them by running the following command:

```powershell
# Enables the Debug Commands.
AskUI-ImportDebugCommands
```

### Project Management Debug Commands
The `AskUI-AddProjectSettingsIfNotExist` command adds the AskUI settings into the current path:

**Example:**

```powershell
# Adds the AskUI settings to the current path.
AskUI-AddProjectSettingsIfNotExist
```

## AskUI Error Reporting Commands
The _Error Reporting Commands_ help you to create an error report that includes all the necessary information we need to troubleshoot an issue you may encounter.

### `AskUI-BuildErrorReport` Command
`AskUI-BuildErrorReport` is utilized to construct an error report directory, which is intended for user inspection and subsequent compression into a zip file. This zip file can then be sent to the AskUI Team for analysis. The function offers the following parameters:

- `Project`: Project Paths to be included in the error report. Defaults to an empty list.
- `AdditionalFiles`: Additional files to be included in the error report. Defaults to an empty list.
- `MaxLogFileAgeInHours` : Maximum age of log files to be included in the error report. Default is 96 hours(4 * 24).

**Example:**

```powershell
# Build an error report and save the $errorReportGUID in a variable
# The GUID will be used in AskUI-CompressErrorReport (See next section)
$errorReportGUID = AskUI-BuildErrorReport

Generating a new error report...

Error description file created at '<userProfile>\.askui\ErrorReports\7171dc0a-03ad-4e3c-8b9d-2a89d17339ce.prepared\ErrorDescription.md'. Please fill in the details.

Error report created with GUID '7171dc0a-03ad-4e3c-8b9d-2a89d17339ce' at '<userProfile>\.askui\ErrorReports\7171dc0a-03ad-4e3c-8b9d-2a89d17339ce.prepared'.

After inspecting the error report, use 'AskUI-CompressErrorReport -ErrorReportGUID 7171dc0a-03ad-4e3c-8b9d-2a89d17339ce' to compress the error report.
```

### `AskUI-CompressErrorReport` Command
`AskUI-CompressErrorReport`is used to compress an error report identified by its GUID. The compressed error report can be sent to the AskUI Team for analysis. This function has the following parameters:

- `ErrorReportGUID` (Mandatory): Error Report GUID to be compressed. This is used to identify the specific error report to compress.
- `SkipCleanup`: Optional switch to skip the cleanup of the expanded error report directory after compression.

**Example:**

```powershell
# Compress an error report identified by its GUID.
AskUI-CompressErrorReport -ErrorReportGUID "7171dc0a-03ad-4e3c-8b9d-2a89d17339ce"

Error report with GUID '7171dc0a-03ad-4e3c-8b9d-2a89d17339ce' compressed at '<userProfile>\.askui\ErrorReports\ErrorReport-7171dc0a-03ad-4e3c-8b9d-2a89d17339ce-2024-05-07T14_24.zip'.
```

### `AskUI-NewErrorReport` Command
`AskUI-NewErrorReport` is used to generate a new error report. It creates an error report directory that includes project paths, additional files, and log files within a specified age. This function has the following parameters:

- `Project`: Project Paths to be included in the error report. Defaults to an empty list.
- `AdditionalFiles`: Additional files to be included in the error report. Defaults to an empty list. For example, annotations, screenshots, etc.
- `MaxLogFileAgeInHours`: Maximum age of log files to be included in the error report, in hours. Default is 96 hours (4 * 24).
- `SkipCleanup`: Optional switch to skip cleanup of the expanded error report directory after compression.
- `AutoApprove`: Optional switch to automatically approve the error report content without user interaction.

```powershell
$zipFilePath = AskUI-NewErrorReport

Generating a new error report...

Error description file created at '<userProfile>\.askui\ErrorReports\bcff5e3d-75fd-4f00-a37a-defc9629b19c.prepared\ErrorDescription.md'. Please fill in the details.

Do you want to open the error report directory? (y/n): n

Do you approve the error report content? (y/n): y

Error report with GUID 'bcff5e3d-75fd-4f00-a37a-defc9629b19c' compressed at '<userProfile>\.askui\ErrorReports\ErrorReport-bcff5e3d-75fd-4f00-a37a-defc9629b19c-2024-05-07T14_28.zip'.
```


### Process Management Debug Commands
The _Process Management Debug_ commands are used to show all running AskUI processes and to stop faulty AskUI processes:

#### `AskUI-ShowProcess` Command
The `AskUI-ShowProcess` command is used to show AskUI processes.

**Example:**

```powershell
# Show all AskUI processes.
AskUI-ShowProcess

# Output
ProcessId ProcessName
  --------- -----------
      20356 askui-ui-controller
      21944 askui-ui-controller
      22244 askui-ui-controller
      24384 askui-ui-controller
      20536 AskuiRemoteDeviceController
      14968 ffmpeg
```

#### `AskUI-StopProcess` Command
The `AskUI-StopProcess` command is used to stop AskUI processes. This function accepts the following parameters:

- `All`: Stops all AskUI processes.
- `ProcessName <string>`: Stops the AskUI process with the specified name. Autocompletion and wildcards support.
- `ProcessId <int>`: Stops the AskUI process with the specified process ID. Autocompletion supported.

**Examples:**

```powershell
# Stop all AskUI processes.
AskUI-StopProcess -All
```

```powershell
# Stop all AskUI processes with the specified name.
AskUI-StopProcess -ProcessName "AskUI-Controller"
```

```powershell
# Stop all AskUI processes with the name starting with "askui".
AskUI-StopProcess -ProcessName "askui*"
```

```powershell
# Stop the AskUI process with the specified process ID.
  AskUI-StopProcess -ProcessId 1234
```

## AskUI Runner Management
The AskUI Runner is a self-hosted component that downloads your workflows from AskUI Studio and runs them on the device it is hosted at.

### `AskUI-StartRunner` Command
The `AskUI-StartRunner` command starts the AskUI Runner. This function accepts the following parameters:

- `Token`: Specifies the AskUI token to be used for the runner. If not specified, the token from the AskUI settings is used.
- `WorkspaceId`: Specifies the AskUI workspace ID to be used for the runner. If not specified, the workspace ID from the AskUI settings is used.
- `Port`: Port of the web socket server to connect via the runner-protocol. (Default: 6769)
- `WebSocketHost`: Host of the web socket server to connect via the runner-protocol. (Default: 127.0.0.1)
- `ForceProjectTemplateUpdate`: Specifies whether to force the update of the project template. This is helpful for debugging.
- `LogLevel`: Specifies the AskUI Runner log level. Available values are: 'INFO', 'DEBUG', 'WARNING', 'ERROR', 'CRITICAL'. The default is 'INFO'.
- `Tags`: Specifies the tags to be set in the AskUI runner configuration.

**Example:**

```powershell
# Start the AskUI runner with default configuration.
AskUI-StartRunner
```

```powershell
# Start the AskUI runner with the specified tags.
AskUI-StartRunner -Tags "tag1,tag2"
```
:::info
Note: Adjust the parameters as needed for your specific configuration.
:::

See also the dedicated [AskUI Runner docs](AskUI-Runner.md) for more information.
