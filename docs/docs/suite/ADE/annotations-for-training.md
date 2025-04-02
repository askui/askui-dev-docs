---
sidebar_position: 3
---

# Create Annotations for Retraining

The ADE Command `AskUI-NewAnnotationsForTraining` allows users to annotate their screen. Those annotations can then be used to retrain AskUIs model to better fit the User Interface. The function offers the following parameters:

- `WorkspaceId` (Optional): Specifies the AskUI workspace ID to be used. If not specified, the workspace ID from the AskUI settings is used.
- `Delay`: Time in seconds before the screen gets frozen. Default is 0.
- `Token`: Token for sending the annotation to the train endpoint.
- `Url`: URL for the inference server. Default is `https://inference.askui.com`.
- `ConfigFile`: *Experimental* Absolute file path for the configuration to be loaded.

The results will be sent to the train endpoint and the user will be informed about the success of the operation.

## Usage

```powershell
AskUI-NewAnnotationsForTraining

# Output
Info:  Finished taking of 2 annotationss.
Info:  Annotation #1 requires additional metadata.
  Enter the category: custom button
WARNING: Category must be one of the following: Text, Textfield, Button, Icon, CheckBox, Other.
  Enter the category: button
  Enter the description: dummy button with dummy colors
Info:  Annotation #2 requires additional metadata.
  Enter the category: Text
  Enter the description: a red login text with the text login 
Info:  Processing data ...
Info:  Finished preparation of data package for training.                                                               
Info:  Sending annotation to train endpoint ...
Info:  Finished sending annotation to train endpoint.
```

## Help Output

```powershell
Get-help AskUI-NewAnnotationsForTraining -Detailed

NAME
    New-AskUIAnnotationsForTraining
    
SYNOPSIS
    Creates a new annotation for training.
    
    
SYNTAX
    New-AskUIAnnotationsForTraining [-WorkspaceId <String>] [-Token <String>] [-Delay <Int32>] [-Url <String>] [-ConfigFile <String>] [<CommonParameters>]
    
    
DESCRIPTION
    Starts the Snipping Tool and allows the user to annotate the screen.
    The user will be asked to provide additional metadata for each annotation.
    the metadata includes:
    - category: The category for each annotation. Valid categories are: 'Text', 'Textfield', 'Button', 'Icon', 'CheckBox', 'Other'.
    - description: The description for each annotation.
    

PARAMETERS
    -WorkspaceId <String>
        (Optional) Workspace ID for the annotation.
        
    -Token <String>
        (Optional) Token for sending the annotation to the train endpoint.
        
    -Delay <Int32>
        (Optional) Delay in seconds before the screen freezes. Default is 0.
        
    -Url <String>
        (Optional) URL for the inference server. Default is https://inference.askui.com.
        
    -ConfigFile <String>
        *Experimental* (Optional) Absolute file path for the configuration to be loaded.
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see
        about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216). 
    
    -------------------------- EXAMPLE 1 --------------------------
    
    ADE>AskUI-NewAnnotationsForTraining
    
    Creates a new annotation for training.

REMARKS
    To see the examples, type: "Get-Help New-AskUIAnnotationsForTraining -Examples"
    For more information, type: "Get-Help New-AskUIAnnotationsForTraining -Detailed"
    For technical information, type: "Get-Help New-AskUIAnnotationsForTraining -Full"
```