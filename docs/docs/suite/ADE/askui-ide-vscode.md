---
sidebar_position: 3
---

# ADE in Visual Studio Code

The ADE is build to work seamlessly with [VSCode](https://code.visualstudio.com/). Therefore we guide you to create [VSCode Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson).

1. Create a `<project>/.vscode` folder with `mkdir .vscode`

## Configure the `askui-shell`

2. Create the `<project>/.vscode/settings.json` with the following content:

```json
{
    "livePreview.customExternalBrowser": "Default",
    "terminal.integrated.profiles.windows":{   
        "askui-shell": {    
            "path": ["${env:ASKUI_INSTALLATION_DIRECTORY}\\Tools\\askui-shell.cmd"],
            "icon": "robot",
            "overrideName": true,
            "color": "terminal.ansiMagenta",
        }
    },
    "terminal.integrated.defaultProfile.windows": "askui-shell"
}
```

- `terminal.integrated.profiles.windows`: Configures the `askui-shell`
- `terminal.integrated.defaultProfile.windows`: Sets the `askui-shell` as default

Then the `askui-shell` is configured as the default terminal like this:

![askui logo](../02-Components/images/vs-code/askui_shell.png)


## Configure Jest Runner, ESLint & Live View

Add the recommended extensions for VSCode by adding `<project>/.vscode/extensions.json` with following content:

```json
{
    "recommendations": ["ms-vscode.live-server", "firsttris.vscode-jest-runner", "dbaeumer.vscode-eslint"]
}
```

- `ms-vscode.live-server`: HTML [Live Viewer](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) for viewing annotations inside VSCode instead of, for example, having to jump out of VSCode and open it in a web browser.
- `firsttris.vscode-jest-runner`: [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) to start single test out of the IDE.
- `dbaeumer.vscode-eslint`: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin to show missing `exec()`.

Then you can install the extension by clicking on `Install` under:

![askui logo](../02-Components/images/vs-code/recommended_extensions.png)

## Use Jest Runner

You can start a workflow by clicking on `Run` inside a `*test.ts`-file:

![askui logo](../02-Components/images/vs-code/jestrunner.png)


## Use ESLint

ESLint Plugin is showing you if you forgot an `exec()`:

![askui logo](../02-Components/images/vs-code/eslint-missing-exec.png)


## Use Live Viewer

The Live Viewer can show you the annotation without leaving VSCode:

![askui logo](../02-Components/images/vs-code/annotation-live-viewer.png)
