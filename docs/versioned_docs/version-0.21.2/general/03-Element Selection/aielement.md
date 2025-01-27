---
sidebar_position: 4
title: AI Elements
---

# AI Elements

<video controls>
  <source src="https://files.askui.com/assets/docs/askui-bytes-aiElement.mp4"/>
</video>

:::note
Enable the *AskUI Development Environment* as described in [AskUI Development Environment](../../suite/02-Components/AskUI-Development-Environment.md) and then activate the experimental commands by running `AskUI-ImportExperimentalCommands` in your terminal.
:::

## `AskUI-NewAIElement` Command
`AskUI-NewAIElement` allows you to capture elements from your screen. You can use these elements later in AskUI workflows. Accepted parameters:

- `Name` (Optional): The name of the screenshot file. If defined, it indicates that only one element is being snipped. If not defined, you will be prompted to provide a name later. For snipping multiple elements, you must provide a name for each one.
- `WorkspaceId` (Optional): By default, the command will use the Workspace ID specified in the settings file. If neither is set, an error will be thrown.
- `AlwaysPreview` (Optional): Automatically opens the preview without prompting. *Can not be used together with the `NoPreview` parameter*.
- `NoPreview` (Optional): Skips the preview and does not open it. *Can not be used with the `AlwaysPreview` parameter.
- `OneShot` (Optional): The snipping ends after the first successful creation of an AI Element.
- `Annotate` (Optional): Allows you to take a fullscreen capture and annotate regions on that screenshot.

```powershell
AskUI-NewAIElement

# Output
Taking screenshots for project:
  WorkspaceId: <workspaceId>
Finished taking of 2 screenshots.
Do you want to preview screenshot #1? [y/n]: y
Screenshot #1 requires additional metadata.
  Enter a name for the screenshot 1: <name1>
Screenshot #1:
  Name:     <name1>
  File:     <askuiUserDirectory>\SnippingTool\AIElement\<workspaceId>\{26342074-5B2A-4695-09ED-41EE47992546}.png
  Metadata: <askuiUserDirectory>\SnippingTool\AIElement\<workspaceId>\{26342074-5B2A-4695-09ED-41EE47992546}.json
Do you want to preview screenshot #2? [y/n]: n
Screenshot #2 requires additional metadata.
  Enter a name for the screenshot 2: <name2>
Screenshot #2:
  Name:     <name2>
  File:     <askuiUserDirectory>\SnippingTool\AIElement\<workspaceId>\{644A00B8-1E27-7ADF-7C68-1751672A5931}.png
  Metadata: <askuiUserDirectory>\SnippingTool\AIElement\<workspaceId>\{644A00B8-1E27-7ADF-7C68-1751672A5931}.json
```

## Snipping Workflow

:::info
Should the selection overlay lose focus it needs a left click to make keyboard shortcuts work again.

Snipping is currently only supported on the primary screen.
:::

Snipping Tool starts in rectangle mode:

- Move mouse cursor to move the magnifier with the selection cursor.
- Press & hold left mouse button to start the rubber band selection of a rectangle.
- Optional: Press right mouse button to reset current action.
- Move mouse to adjust rectangle.
- Release left mouse button to confirm rectangle selection.

When in polygon mode:

- Move mouse to move the magnifier with the selection icon.
- Press left mouse button to set first polygon point.
- Move mouse and repeat pressing left mouse button to add more points.
- Optional: Press right mouse button to remove the last point.
- Move mouse to the first point and press left mouse button to finish polygon.

When you called `AskUI-NewAIElement` with the `OneShot` parameter, the snipping ends after the first successful creation of an AI-element.

Otherwise snipping continues until `ESC` is pressed.

### Keyboard Shortcuts

#### General

- `ESC` End the snipping tool.
- `SPACE` Same as left click on the current location.

#### Magnifier

- `+` / `mouse wheel up` Increase magnification up to x512.
- `-` / `mouse wheel down` Decrease magnification down to x2.

#### Navigation

- `up` / `w` Move the magnifier (selection) one pixel up.
- `down` / `s` Move the magnifier (selection) one pixel down.
- `left` / `a` Move the magnifier (selection) one pixel to the left.
- `right` / `d` Move the magnifier (selection) one pixel to the right.

#### Modes

- `r` Activate rectangle mode (when not active).
- `p` Activate polygon mode (when not active).


## `AskUI-ShowAIElement` Command
`AskUI-ShowAIElement` shows a list of all available AI Elements. Accepted parameters:

- `NameFilter` (Optional): Lists the AI Element with the provided name filter. If not set, all AI Elements are listed.

```powershell
# Lists all AI Elements with the name 'logo'
AskUI-ShowAIElement -NameFilter "logo"
```

## `AskUI-RemoveAIElement` Command
`AskUI-RemoveAIElement` removes AI elements by name.

- `NameFilter` (Mandatory): Specifies a name filter for the AI element to be removed.
- `NoPreview`(Optional): Skips the preview of the filtered AI elements before removal.
- `AutoApproval` (Optional): Automatically approves the deletion without prompting for confirmation.

```powershell
# Removes AI Element with the name 'logo'
AskUI-RemoveAIElement -NameFilter "logo" -AutoApproval
```

## `AskUI-OpenAIElement` Command
`AskUI-OpenAIElement` shows AI Elements by name.

- `NameFilter` (Mandatory): Specifies a name filter for the AI Element to be viewed.

```powershell
# Opens all AI Elements with the name 'logo'
AskUI-OpenAIElement -NameFilter "logo"
```
