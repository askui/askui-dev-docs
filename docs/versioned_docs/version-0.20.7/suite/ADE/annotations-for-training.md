---
sidebar_position: 3
---

# Create Annotations for Retraining

The ADE Command `AskUI-NewAnnotationsForTraining` allows users to annotate their screen. Those annotations can then be used to retrain AskUIs model to better fit the User Interface. The function offers the following parameters:

- `WorkspaceId` (Optional): Specifies the AskUI workspace ID to be used. If not specified, the workspace ID from the AskUI settings is used.
- `Delay`: Time in seconds before the screen gets frozen. Default is 0.

The results will be saved under:

- `$HOME/.askui/SnippingTool/Annotation/<WorkspaceId>/<GUID>.json`
- `$HOME/.askui/SnippingTool/Annotation/<WorkspaceId>/<GUID>.png`

## Usage

```powershell
# Import experimental commands.
AskUI-ImportExperimentalCommands

AskUI-NewAnnotationsForTraining

# Output
Finished taking of 2 annotationss.
Annotation #1 requires additional metadata.
  Enter the category: custom button
WARNING: Category must be one of the following: Text, Textfield, Button, Icon, CheckBox, Other.
  Enter the category: button
  Enter the label: custom button
  Enter the description: dummy button with dummy colors
Annotation #2 requires additional metadata.
  Enter the category: Text
  Enter the label: login text
  Enter the description: a red login text with the text login 
Processing data ...
Finished preparation of data package for training
```

## Help Output

```powershell
Get-help AskUI-NewAnnotationsForTraining -Detailed

NAME
    New-AskUIAnnotationsForTraining
    
SYNOPSIS
    Creates a new annotation for training.
    
    
SYNTAX
    New-AskUIAnnotationsForTraining [-WorkspaceId <String>] [-Delay <Int32>] [-ConfigFile <String>] [<CommonParameters>]
    
    
DESCRIPTION
    Starts the Snipping Tool and allows the user to annotate the screen.
    The user will be asked to provide additional metadata for each annotation.
    the metadata includes:
    - label: The label for each annotation.
    - category: The category for each annotation. Valid categories are: 'Text', 'Textfield', 'Button', 'Icon', 'CheckBox', 'Other'.
    - description: The description for each annotation.
    

PARAMETERS
    -WorkspaceId <String>
        (Optional) Workspace ID for the annotation.
        
    -Delay <Int32>
        (Optional) Delay in seconds before the screen freezes. Default is 0.
        
    -ConfigFile <String>
        *Experimental* (Optional) Absolute file path for the configuration to be loaded.
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see
        about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216). 
    
    -------------------------- EXAMPLE 1 --------------------------
    
    ADE> AskUI-NewAnnotationsForTraining
```