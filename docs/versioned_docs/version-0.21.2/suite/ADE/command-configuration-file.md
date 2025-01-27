---
sidebar_position: 3
---

# Configuration File for AskUI Remote Device Controller and Snipping Tool

The configuration file allows you to configure the *AskUI Controller* and the *Snipping Tool* on startup.

You supply it via the `-ConfigFile`. The path to the file must be absolute as in the following examples:

```powershell
AskUI-StartController -ConfigFile "C:\Users\admin\config.json"
AskUI-NewAIElement -ConfigFile "C:\Users\admin\config.json"
```

The format of the configuration file is as follow: 

```json
{
    "version": 1,
    "guid": "{B384D9A1-538C-40CE-B2FF-57ED782FBDCE}",
    "settings": [
        {
            "name": "Log System",
            "configuration": {
                "streams": [
                    {
                        "name": "TDKControllerAPI",
                        "severity": "Debug"
                    }
                ]
            }
        }
    ]
}
```

## Settings
For now the only supported setting is the configuration of the log system.

## Log System
For the log system all different streams severities can be specified.

### Name
The name corresponds to the module name shown in the output log:

```powershell
[2024-09-13T09:31:16.5622195Z | RemoteDeviceController] v0.10.0.0 started.
[2024-09-13T09:31:16.5627450Z | RemoteDeviceController] Using 'C:\Users\admin\.askui\Logs\AskUI Controller\AskuiRemoteDeviceController_2024-09-13T11-25-57.log'.
[2024-09-13T09:31:16.5635688Z | DisplayCache] Display #1 '5886x3258', '0, 0', primary, active.
[2024-09-13T09:31:16.5649301Z | DisplayCache] Initialized.
[2024-09-13T09:31:16.5658078Z | AutomationSystem] Initialized.
[2024-09-13T09:31:16.5702367Z | ChangeDetectionSystem] Initialized.
[2024-09-13T09:31:16.5706503Z | OverlaySystem] Initialized.
[2024-09-13T09:31:16.5713249Z | ChangeReporterSystem] Initialized.
[2024-09-13T09:31:16.5854439Z | TDKControllerAPI] Askui grpc service is listening on 127.0.0.1:23000.
[2024-09-13T09:31:16.5879568Z | ChangeReporterSystem] Askui grpc service is listening on localhost:27000.
```

Additionally the name `All` can also be used to set every log stream to the same severity.

### Severity

The severity can be one of:

- Debug
- Verbose
- Info
- Warning
- Error
- Critical
- Always

Specifying a `severity` means that only log entries from at least that severity will be logged.
E.g. specifying `Debug` would log everything that can be logged, while specifying `Error` would only show errors, critical, and always logs.
