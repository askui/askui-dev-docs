"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82324],{91800:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=n(17624),o=n(4552);const t={sidebar_position:3},i="AskUI Development Environment (ADE)",l={id:"suite/Components/AskUI-Development-Environment",title:"AskUI Development Environment (ADE)",description:"After installation, the ADE is available for all users. No administrator privileges are necessary. ADE aims to reduce the amount of code needed to be written by you. It provides user-friendly commands that will assist you with AskUI product usage.",source:"@site/versioned_docs/version-0.20.7/suite/02-Components/AskUI-Development-Environment.md",sourceDirName:"suite/02-Components",slug:"/suite/Components/AskUI-Development-Environment",permalink:"/docs/suite/Components/AskUI-Development-Environment",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/versioned_docs/version-0.20.7/suite/02-Components/AskUI-Development-Environment.md",tags:[],version:"0.20.7",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"suiteSidebar",previous:{title:"AskUI Suite",permalink:"/docs/suite/Components/AskUI-Suite"},next:{title:"AskUI in VSCode",permalink:"/docs/suite/ADE/askui-ide-vscode"}},d={},c=[{value:"Settings Management",id:"settings-management",level:2},{value:"<code>AskUI-SetSettings</code> Command",id:"askui-setsettings-command",level:3},{value:"Example",id:"example",level:4},{value:"<code>AskUI-ShowSettings</code> Command",id:"askui-showsettings-command",level:3},{value:"<code>AskUI-RemoveSettings</code> Command",id:"askui-removesettings-command",level:3},{value:"Project Management",id:"project-management",level:2},{value:"<code>AskUI-NewProject</code> Command",id:"askui-newproject-command",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>AskUI-RunProject</code> Command",id:"askui-runproject-command",level:3},{value:"AskUI Controller Management",id:"askui-controller-management",level:2},{value:"<code>AskUI-StartController</code> Command",id:"askui-startcontroller-command",level:3},{value:"<code>AskUI-ShowControllers</code> Command",id:"askui-showcontrollers-command",level:3},{value:"<code>AskUI-StopControllers</code> Command",id:"askui-stopcontrollers-command",level:3},{value:"AskUI Debug Commands",id:"askui-debug-commands",level:2},{value:"Project Management Debug Commands",id:"project-management-debug-commands",level:3},{value:"AskUI Error Reporting Commands",id:"askui-error-reporting-commands",level:2},{value:"<code>AskUI-BuildErrorReport</code> Command",id:"askui-builderrorreport-command",level:3},{value:"<code>AskUI-CompressErrorReport</code> Command",id:"askui-compresserrorreport-command",level:3},{value:"<code>AskUI-NewErrorReport</code> Command",id:"askui-newerrorreport-command",level:3},{value:"Process Management Debug Commands",id:"process-management-debug-commands",level:3},{value:"<code>AskUI-ShowProcess</code> Command",id:"askui-showprocess-command",level:4},{value:"<code>AskUI-StopProcess</code> Command",id:"askui-stopprocess-command",level:4},{value:"AskUI Runner Management",id:"askui-runner-management",level:2},{value:"<code>AskUI-StartRunner</code> Command",id:"askui-startrunner-command",level:3}];function a(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"askui-development-environment-ade",children:"AskUI Development Environment (ADE)"})}),"\n",(0,r.jsxs)(s.p,{children:["After installation, the ",(0,r.jsx)(s.strong,{children:"ADE"})," is available for all users. No administrator privileges are necessary. ADE aims to reduce the amount of code needed to be written by you. It provides user-friendly commands that will assist you with AskUI product usage."]}),"\n",(0,r.jsxs)(s.p,{children:["Start by typing ",(0,r.jsx)(s.code,{children:"askui-shell"})," in the terminal and this will make all ADE commands available."]}),"\n",(0,r.jsx)(s.h2,{id:"settings-management",children:"Settings Management"}),"\n",(0,r.jsx)(s.p,{children:"ADE comprises three types of settings:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Global Settings:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Created by the installer."}),"\n",(0,r.jsx)(s.li,{children:"Available for all users."}),"\n",(0,r.jsx)(s.li,{children:"Includes configurations set during installation (for example, proxy settings)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"User Settings:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Located in ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"<USER_HOME_DIR>/.askui/Settings/AskuiEnvironmentSettings.json"})}),"."]}),"\n",(0,r.jsx)(s.li,{children:"Applied to all new projects."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Project Settings:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Located in ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"<PROJECT_DIR>/.askui/Settings/AskuiEnvironmentSettings.json"})}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.p,{children:"Project settings override user settings, and user settings override default settings."})}),"\n",(0,r.jsxs)(s.h3,{id:"askui-setsettings-command",children:[(0,r.jsx)(s.code,{children:"AskUI-SetSettings"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"AskUI-SetSettings"})," command configures ADE settings. It allows you to set parameters like proxy addresses, ",(0,r.jsx)(s.code,{children:"AskUI access token"}),", and ",(0,r.jsx)(s.code,{children:"workspace ID"}),". This function updates environment variables in both user and project configurations. Accepted parameters:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"HttpProxy"}),": HTTP proxy address for AskUI configuration."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"HttpsProxy"}),": HTTPS proxy address for AskUI configuration."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Token"}),": AskUI token for AskUI configuration."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"WorkspaceId"}),": AskUI workspace ID for AskUI configuration."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"LogLevel"}),": Log level for AskUI configuration."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Location"}),": Specifies the settings to be updated (User or Project). Default is User."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"TLSConnectionCertificate"}),": Sets a server identity certificate that shall be accepted by our tooling."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:'# Set HTTP proxy address and AskUI token.\nAskUI-SetSettings -HttpProxy "http://proxy.example.com" -Token "askui_token"\n'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:'# Set both HTTP and HTTPS proxy addresses, and AskUI workspace ID.\nAskUI-SetSettings -HttpProxy "http://proxy.example.com" -HttpsProxy "https://proxy.example.com" -WorkspaceId "your_workspace_id"\n'})}),"\n",(0,r.jsxs)(s.h3,{id:"askui-showsettings-command",children:[(0,r.jsx)(s.code,{children:"AskUI-ShowSettings"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"AskUI-ShowSettings"})," command retrieves and displays the AskUI configuration."]}),"\n",(0,r.jsx)(s.p,{children:"Parameters:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"Location"})}),": Specifies the settings to be displayed (Merged or User or Project or Default). Default is Merged."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"WithSecrets"})}),": Specifies whether to display the settings secrets."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Get and display AskUI Merged Settings.\n# Access token will be masked with *.\nAskUI-ShowSettings\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Get and display AskUI Merged Settings.\n# Access token will be unmasked.\nAskUI-ShowSettings -WithSecrets\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Get and display AskUI User Settings.\nAskUI-ShowSettings -Location User\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"askui-removesettings-command",children:[(0,r.jsx)(s.code,{children:"AskUI-RemoveSettings"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"AskUI-RemoveSettings"})," command is used to configure AskUI settings, allowing you to unset parameters such as proxy addresses, AskUI token, and workspace ID. The function has the following parameters:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"HttpProxy"}),": Removes the HTTP proxy address from the AskUI Settings."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"HttpsProxy"}),": Removes the HTTPS proxy address from the AskUI Settings."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Token"}),": Removes the AskUI token from the AskUI Settings."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"WorkspaceId"}),": Removes the AskUI workspace ID from the AskUI Settings."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"LogLevel"}),": Removes the log level from the AskUI Settings."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Credentials"}),": Removes the complete credentials from the AskUI Settings."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"EnvironmentVariables"}),": Removes the complete environment variables from the AskUI Settings."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Location"}),": Specifies the settings to be updated (User or Project). Default is User."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Removes the HTTP proxy address and AskUI token.\nAskUI-RemoveSettings -HttpProxy -Token\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Removes the complete credentials.\nAskUI-RemoveSettings -Credentials\n"})}),"\n",(0,r.jsx)(s.h2,{id:"project-management",children:"Project Management"}),"\n",(0,r.jsxs)(s.h3,{id:"askui-newproject-command",children:[(0,r.jsx)(s.code,{children:"AskUI-NewProject"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"AskUI-NewProject"})," command creates a new AskUI project with customizable options. Use the following parameters:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ProjectName"}),": Specifies the project name."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"WorkspaceID"}),": Provides the AskUI workspace ID."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Token"}),": Inputs the AskUI Token."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"AskUINodeJsVersion"}),": Determines the version of AskUI Node.js to install (defaults to the latest)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"SkipChangingPathUserPrompt"}),": Skips the prompt to change the project directory."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"TestFramework"}),": Chooses the test framework: 'jest' or 'jasmine'."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"UsingProxy"}),": Use a proxy: 'true' or 'false'."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"TypeScriptConfig"}),": Overwrite ",(0,r.jsx)(s.code,{children:"tsconfig.json"}),": 'true' or 'false'."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"#This Command will create a new project in the current directory with the name `MyProject` and will skip the prompt to change the project directory.\nAskUI-NewProject -ProjectName MyProject -WorkspaceId <Workspace_id> -Token <Token> -SkipChangingPathUserPrompt\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"askui-runproject-command",children:[(0,r.jsx)(s.code,{children:"AskUI-RunProject"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"AskUI-RunProject"})," command executes an AskUI project. Note:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["This command is applicable only for projects created by ",(0,r.jsx)(s.code,{children:"AskUI-NewProject"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"Navigate to the project directory before running the command."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"AskUI-RunProject\n"})}),"\n",(0,r.jsx)(s.h2,{id:"askui-controller-management",children:"AskUI Controller Management"}),"\n",(0,r.jsx)(s.p,{children:"The AskUI Controller is a service that runs on your operating system. It is able to control inputs and observe the visuals on the operating system."}),"\n",(0,r.jsxs)(s.h3,{id:"askui-startcontroller-command",children:[(0,r.jsx)(s.code,{children:"AskUI-StartController"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"AskUI-StartController"})," command is used to launch the AskUI Remote Device Controller with the following customizable options:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DisplayNum"}),": Select a display number, default 0."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Maximize"}),": Start the app as a Maximized window."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Runtime"}),": Select the runtime (desktop, android). default desktop."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Port"}),": Port of the web socket server to connect via the runner-protocol. (Default: 6769)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ActionWaitTime"}),": Waits x milliseconds after each action. This can be used to slow down or speed up the execution. (Default: 1000)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"WebSocketHost"}),": Host of the web socket server to connect via the runner-protocol. (Default: 127.0.0.1)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"LogFile"}),": Output path for generated logs."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"LogLevel"}),": Log level. (Default: debug)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"RunInBackground"}),": Start the app in background mode."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"showOverlay"}),": Renders a ",(0,r.jsx)(s.strong,{children:"Status Indicator"})," around your selected screen (Experimental)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DeviceId"}),": Select an Android device by id. For example, emulator-5554."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# This Command will start the AskUI Controller in background with all default options.\nAskUI-StartController -RunInBackground\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:'# This Command will start the AskUI Controller in the background with the following options: DisplayNum: 0, Maximize: true, Runtime: desktop, Port: 6769, ActionWaitTime: 1000, WebSocketHost: 127.0.0.1\nAskUI-StartController -DisplayNum 0 -Maximize -Runtime desktop -Port 6769 -ActionWaitTime 1000 -WebSocketHost 127.0.0.1 -LogFile "C:/Logs/remote_device_log.txt" -LogLevel debug -RunInBackground\n'})}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.p,{children:"Note: Adjust the parameters as needed for your specific use case."})}),"\n",(0,r.jsxs)(s.p,{children:["Also see the dedicated ",(0,r.jsx)(s.a,{href:"/docs/suite/Components/AskUI-Controller",children:"AskUI Controller docs"})," for more information."]}),"\n",(0,r.jsxs)(s.h3,{id:"askui-showcontrollers-command",children:[(0,r.jsx)(s.code,{children:"AskUI-ShowControllers"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"AskUI-ShowControllers"})," command is used to show the running ",(0,r.jsx)(s.strong,{children:"AskUI Controller"})," processes."]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["Only AskUI Controller processes started by the ",(0,r.jsx)(s.code,{children:"AskUI-StartController"})," command during the same session can be shown by this command."]})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Show all AskUI running AskUI Controllers.\nAskUI-ShowControllers\n\n# Output\nProcessId DisplayNum Runtime Port\n--------- ---------- ------- ----\n     3528          0 desktop 6769\n    15184          0 android 6781\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"askui-stopcontrollers-command",children:[(0,r.jsx)(s.code,{children:"AskUI-StopControllers"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"AskUI-StopControllers"})," command is used to stop the AskUI Remote Device Controller with the following customizable options:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DisplayNum"}),": Select a display number, default 0. Autocompletion support."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Runtime"}),": The runtime (desktop, android), default ",(0,r.jsx)(s.em,{children:"desktop"}),". Autocompletion support."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Port"}),": Port of the web socket server of the AskUI Controller (Default: 6769) Autocompletion is provided."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DeviceId"}),": Select an Android device by id. For example, emulator-5554."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Stops the AskUI Controller with the following options: Port: 6769\nAskUI-StopControllers -Port 6769\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Stop the AskUI Controller with the following options: DisplayNum: 0, Runtime: desktop\nAskUI-StopControllers -DisplayNum 0 -Runtime desktop\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["Only Controller processes started by the ",(0,r.jsx)(s.code,{children:"AskUI-StartController"})," command during the same session can be stopped by this command."]})}),"\n",(0,r.jsx)(s.h2,{id:"askui-debug-commands",children:"AskUI Debug Commands"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.em,{children:"Debug Commands"})," help you to debug and manage your AskUI projects and the processes ADE creates. You have to enable them by running the following command:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Enables the Debug Commands.\nAskUI-ImportDebugCommands\n"})}),"\n",(0,r.jsx)(s.h3,{id:"project-management-debug-commands",children:"Project Management Debug Commands"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"AskUI-AddProjectSettingsIfNotExist"})," command adds the AskUI settings into the current path:"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Adds the AskUI settings to the current path.\nAskUI-AddProjectSettingsIfNotExist\n"})}),"\n",(0,r.jsx)(s.h2,{id:"askui-error-reporting-commands",children:"AskUI Error Reporting Commands"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.em,{children:"Error Reporting Commands"})," help you to create an error report that includes all the necessary information we need to troubleshoot an issue you may encounter."]}),"\n",(0,r.jsxs)(s.h3,{id:"askui-builderrorreport-command",children:[(0,r.jsx)(s.code,{children:"AskUI-BuildErrorReport"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"AskUI-BuildErrorReport"})," is utilized to construct an error report directory, which is intended for user inspection and subsequent compression into a zip file. This zip file can then be sent to the AskUI Team for analysis. The function offers the following parameters:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Project"}),": Project Paths to be included in the error report. Defaults to an empty list."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"AdditionalFiles"}),": Additional files to be included in the error report. Defaults to an empty list."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"MaxLogFileAgeInHours"})," : Maximum age of log files to be included in the error report. Default is 96 hours(4 * 24)."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Build an error report and save the $errorReportGUID in a variable\n# The GUID will be used in AskUI-CompressErrorReport (See next section)\n$errorReportGUID = AskUI-BuildErrorReport\n\nGenerating a new error report...\n\nError description file created at '<userProfile>\\.askui\\ErrorReports\\7171dc0a-03ad-4e3c-8b9d-2a89d17339ce.prepared\\ErrorDescription.md'. Please fill in the details.\n\nError report created with GUID '7171dc0a-03ad-4e3c-8b9d-2a89d17339ce' at '<userProfile>\\.askui\\ErrorReports\\7171dc0a-03ad-4e3c-8b9d-2a89d17339ce.prepared'.\n\nAfter inspecting the error report, use 'AskUI-CompressErrorReport -ErrorReportGUID 7171dc0a-03ad-4e3c-8b9d-2a89d17339ce' to compress the error report.\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"askui-compresserrorreport-command",children:[(0,r.jsx)(s.code,{children:"AskUI-CompressErrorReport"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"AskUI-CompressErrorReport"}),"is used to compress an error report identified by its GUID. The compressed error report can be sent to the AskUI Team for analysis. This function has the following parameters:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ErrorReportGUID"})," (Mandatory): Error Report GUID to be compressed. This is used to identify the specific error report to compress."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"SkipCleanup"}),": Optional switch to skip the cleanup of the expanded error report directory after compression."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Compress an error report identified by its GUID.\nAskUI-CompressErrorReport -ErrorReportGUID \"7171dc0a-03ad-4e3c-8b9d-2a89d17339ce\"\n\nError report with GUID '7171dc0a-03ad-4e3c-8b9d-2a89d17339ce' compressed at '<userProfile>\\.askui\\ErrorReports\\ErrorReport-7171dc0a-03ad-4e3c-8b9d-2a89d17339ce-2024-05-07T14_24.zip'.\n"})}),"\n",(0,r.jsxs)(s.h3,{id:"askui-newerrorreport-command",children:[(0,r.jsx)(s.code,{children:"AskUI-NewErrorReport"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"AskUI-NewErrorReport"})," is used to generate a new error report. It creates an error report directory that includes project paths, additional files, and log files within a specified age. This function has the following parameters:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Project"}),": Project Paths to be included in the error report. Defaults to an empty list."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"AdditionalFiles"}),": Additional files to be included in the error report. Defaults to an empty list. For example, annotations, screenshots, etc."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"MaxLogFileAgeInHours"}),": Maximum age of log files to be included in the error report, in hours. Default is 96 hours (4 * 24)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"SkipCleanup"}),": Optional switch to skip cleanup of the expanded error report directory after compression."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"AutoApprove"}),": Optional switch to automatically approve the error report content without user interaction."]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"$zipFilePath = AskUI-NewErrorReport\n\nGenerating a new error report...\n\nError description file created at '<userProfile>\\.askui\\ErrorReports\\bcff5e3d-75fd-4f00-a37a-defc9629b19c.prepared\\ErrorDescription.md'. Please fill in the details.\n\nDo you want to open the error report directory? (y/n): n\n\nDo you approve the error report content? (y/n): y\n\nError report with GUID 'bcff5e3d-75fd-4f00-a37a-defc9629b19c' compressed at '<userProfile>\\.askui\\ErrorReports\\ErrorReport-bcff5e3d-75fd-4f00-a37a-defc9629b19c-2024-05-07T14_28.zip'.\n"})}),"\n",(0,r.jsx)(s.h3,{id:"process-management-debug-commands",children:"Process Management Debug Commands"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.em,{children:"Process Management Debug"})," commands are used to show all running AskUI processes and to stop faulty AskUI processes:"]}),"\n",(0,r.jsxs)(s.h4,{id:"askui-showprocess-command",children:[(0,r.jsx)(s.code,{children:"AskUI-ShowProcess"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"AskUI-ShowProcess"})," command is used to show AskUI processes."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Show all AskUI processes.\nAskUI-ShowProcess\n\n# Output\nProcessId ProcessName\n  --------- -----------\n      20356 askui-ui-controller\n      21944 askui-ui-controller\n      22244 askui-ui-controller\n      24384 askui-ui-controller\n      20536 AskuiRemoteDeviceController\n      14968 ffmpeg\n"})}),"\n",(0,r.jsxs)(s.h4,{id:"askui-stopprocess-command",children:[(0,r.jsx)(s.code,{children:"AskUI-StopProcess"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"AskUI-StopProcess"})," command is used to stop AskUI processes. This function accepts the following parameters:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"All"}),": Stops all AskUI processes."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ProcessName <string>"}),": Stops the AskUI process with the specified name. Autocompletion and wildcards support."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ProcessId <int>"}),": Stops the AskUI process with the specified process ID. Autocompletion supported."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Stop all AskUI processes.\nAskUI-StopProcess -All\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:'# Stop all AskUI processes with the specified name.\nAskUI-StopProcess -ProcessName "AskUI-Controller"\n'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:'# Stop all AskUI processes with the name starting with "askui".\nAskUI-StopProcess -ProcessName "askui*"\n'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Stop the AskUI process with the specified process ID.\n  AskUI-StopProcess -ProcessId 1234\n"})}),"\n",(0,r.jsx)(s.h2,{id:"askui-runner-management",children:"AskUI Runner Management"}),"\n",(0,r.jsx)(s.p,{children:"The AskUI Runner is a self-hosted component that downloads your workflows from AskUI Studio and runs them on the device it is hosted at."}),"\n",(0,r.jsxs)(s.h3,{id:"askui-startrunner-command",children:[(0,r.jsx)(s.code,{children:"AskUI-StartRunner"})," Command"]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"AskUI-StartRunner"})," command starts the AskUI Runner. This function accepts the following parameters:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Token"}),": Specifies the AskUI token to be used for the runner. If not specified, the token from the AskUI settings is used."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"WorkspaceId"}),": Specifies the AskUI workspace ID to be used for the runner. If not specified, the workspace ID from the AskUI settings is used."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Port"}),": Port of the web socket server to connect via the runner-protocol. (Default: 6769)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"WebSocketHost"}),": Host of the web socket server to connect via the runner-protocol. (Default: 127.0.0.1)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ForceProjectTemplateUpdate"}),": Specifies whether to force the update of the project template. This is helpful for debugging."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"LogLevel"}),": Specifies the AskUI Runner log level. Available values are: 'INFO', 'DEBUG', 'WARNING', 'ERROR', 'CRITICAL'. The default is 'INFO'."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Tags"}),": Specifies the tags to be set in the AskUI runner configuration."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:"# Start the AskUI runner with default configuration.\nAskUI-StartRunner\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:'# Start the AskUI runner with the specified tags.\nAskUI-StartRunner -Tags "tag1,tag2"\n'})}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.p,{children:"Note: Adjust the parameters as needed for your specific configuration."})}),"\n",(0,r.jsxs)(s.p,{children:["See also the dedicated ",(0,r.jsx)(s.a,{href:"/docs/suite/Components/AskUI-Runner",children:"AskUI Runner docs"})," for more information."]})]})}function h(e={}){const{wrapper:s}={...(0,o.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>l,M:()=>i});var r=n(11504);const o={},t=r.createContext(o);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);