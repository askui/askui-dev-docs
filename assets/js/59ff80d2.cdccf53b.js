"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75910],{59148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(17624),r=t(4552);const o={sidebar_position:5},i="AskUI Runner",a={id:"general/Components/AskUI-Runner",title:"AskUI Runner",description:"The AskUI Runner is a self-hosted component that downloads your workflows from AskUI Studio and runs them on the device it is hosted at. Internally it uses the AskUI SDK which connects to the AskUI Controller.",source:"@site/versioned_docs/version-0.18.0/general/02-Components/AskUI-Runner.md",sourceDirName:"general/02-Components",slug:"/general/Components/AskUI-Runner",permalink:"/docs/0.18.0/general/Components/AskUI-Runner",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.18.0/general/02-Components/AskUI-Runner.md",tags:[],version:"0.18.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"AskUI Development Environment (ADE)",permalink:"/docs/0.18.0/general/Components/AskUI-Development-Environment"},next:{title:"Getting Started",permalink:"/docs/0.18.0/general/Integrations/reporting"}},l={},c=[{value:"Windows",id:"windows",level:2},{value:"Requirements",id:"requirements",level:3},{value:"<code>AskUI-StartRunner</code> Command",id:"askui-startrunner-command",level:3},{value:"Linux and macOS",id:"linux-and-macos",level:2},{value:"Requirements",id:"requirements-1",level:3},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Start AskUI Controller",id:"start-askui-controller",level:3},{value:"Execute Workflows on a Remote System: Change AskUI Controller URL",id:"execute-workflows-on-a-remote-system-change-askui-controller-url",level:3},{value:"Running a workflow",id:"running-a-workflow",level:2},{value:"Generating up-to-date Configuration Schema",id:"generating-up-to-date-configuration-schema",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"askui-runner",children:"AskUI Runner"}),"\n",(0,s.jsx)(n.p,{children:"The AskUI Runner is a self-hosted component that downloads your workflows from AskUI Studio and runs them on the device it is hosted at. Internally it uses the AskUI SDK which connects to the AskUI Controller."}),"\n",(0,s.jsxs)(n.p,{children:["If you want to execute your workflows defined in ",(0,s.jsx)(n.strong,{children:"AskUI Studio"})," in your own environment instead of with AskUI hosted runners, this page will help you to set it up."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Architecture drawing how the AskUI Runner fits into AskUI Studio, AskUI SDK and AskUI Controller. The AskUI Runner fetches Workflows from AskUI Studio and uploads the results back to it. The Runner uses the AskUI SDK which passes the instructions from the workflow steps to the AskUI Controller.",src:t(78220).c+"",width:"1437",height:"622"})}),"\n",(0,s.jsx)(n.h2,{id:"windows",children:"Windows"}),"\n",(0,s.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Install the ",(0,s.jsx)(n.strong,{children:"AskUI Controller"})," with the ",(0,s.jsx)(n.a,{href:"/docs/0.18.0/general/Getting%20Started/Installing%20AskUI/getting-started",children:"AskUI Installer"})," first."]}),"\n",(0,s.jsxs)(n.li,{children:["Then switch into the ",(0,s.jsx)(n.a,{href:"/docs/0.18.0/general/Components/AskUI-Development-Environment",children:"AskUI Development Environment (ADE)"})," by executing the command ",(0,s.jsx)(n.code,{children:"askui-shell"})," in CMD."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"askui-startrunner-command",children:[(0,s.jsx)(n.code,{children:"AskUI-StartRunner"})," Command"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"AskUI-StartRunner"})," command starts the AskUI Runner. This function accepts the following parameters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Token"}),": Specifies the AskUI token to be used for the runner. If not specified, the token from the AskUI settings is used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WorkspaceId"}),": Specifies the AskUI workspace ID to be used for the runner. If not specified, the workspace ID from the AskUI settings is used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Port"}),": Port of the web socket port server to connect via the runner-protocol. (Default: 6769)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WebSocketHost"}),": Host of the web socket server to connect via the runner-protocol. (Default: 127.0.0.1)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ForceProjectTemplateUpdate"}),": Specifies whether to force the update of the project template. This is helpful for debugging."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LogLevel"}),": Specifies the AskUI Runner log level. Available values are: 'INFO', 'DEBUG', 'WARNING', 'ERROR', 'CRITICAL'. The default is 'INFO'."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Tags"}),": Specifies the tags to be set in the AskUI runner configuration."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"linux-and-macos",children:"Linux and macOS"}),"\n",(0,s.jsxs)(n.p,{children:["For Linux and macOS we do not provide an Installer yet. Thus you have to install the AskUI Runner from source (",(0,s.jsx)(n.a,{href:"https://github.com/askui/askui-runner",children:"GitHub-Repository"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"requirements-1",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Python 3.10 or higher"}),"\n",(0,s.jsx)(n.li,{children:"Node.js 16 or higher"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["We recommend using a virtual environment for Python. Make sure ",(0,s.jsx)(n.code,{children:"python --version"})," returns 3.10 or higher:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python -m venv venv\nsource venv/bin/activate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We have not yet published the ",(0,s.jsx)(n.strong,{children:"AskUI Runner"})," to PyPI. For now, you can install it directly from GitHub:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install git+https://github.com/askui/askui-runner.git\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Currently, the standard logging output of the ",(0,s.jsx)(n.strong,{children:"AskUI runner"})," is minimal - we are soon going to change that. But you should see the runner starting the running of workflows as soon as you schedule some runs through the AskUI Studio."]}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["Create a configuration file (",(0,s.jsx)(n.code,{children:".y{a}ml"})," or ",(0,s.jsx)(n.code,{children:".json"}),") in a directory of your choosing. The configuration file should contain at least some credentials and the command with which you start the runner without the configuration file flag:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"credentials:\n  workspace_id: <workspace id> # replace with your workspace id\n  access_token: <access token> # replace with your access token\nrunner:\n  exec: python -m askui_runner # update if your command is different\n  tags: [<tag 1>, <tag 2>, ..] # replace with your own runner tags\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"#generating-up-to-date-configuration-schema",children:"Generating up-to-date Configuration Schema"})]}),"\n",(0,s.jsx)(n.p,{children:"Start the runner using"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python -m askui_runner -c <path to your configuration file, e.g., askui-runner.config.yaml>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"start-askui-controller",children:"Start AskUI Controller"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to run your workflows on the same system as the runner you need to start an AskUI Controller that listens on port ",(0,s.jsx)(n.code,{children:"6769"}),". Please download the one for your operating system and start it:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/0.18.0/general/Getting%20Started/Installing%20AskUI/getting-started",children:"Windows - Please use the AskUI Installer from our Getting Started"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/linux/x64/askui-ui-controller.AppImage",children:"Linux"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"macOS"})," After installation to ",(0,s.jsx)(n.code,{children:"Applications"})," remove the quarantine flag with the following command run from a terminal: ",(0,s.jsx)(n.code,{children:"xattr -d com.apple.quarantine /Applications/askui-ui-controller.app"})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/darwin/x64/askui-ui-controller.dmg",children:"macOS(Intel)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/darwin/arm64/askui-ui-controller.dmg",children:"macOS(Apple silicon)"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"execute-workflows-on-a-remote-system-change-askui-controller-url",children:"Execute Workflows on a Remote System: Change AskUI Controller URL"}),"\n",(0,s.jsx)(n.p,{children:"You can change the AskUI Controller-URL so the runner can talk to a AskUI Controller that runs on a remote machine or on a different port:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'...\nrunner:\n  ...\n  controller:\n    host: "127.0.0.1"\n    port: 7000\n'})}),"\n",(0,s.jsx)(n.h2,{id:"running-a-workflow",children:"Running a workflow"}),"\n",(0,s.jsxs)(n.p,{children:["Go back to AskUI Studio and access the workflow you intend to execute. Head over to the ",(0,s.jsx)(n.strong,{children:"Run"})," tab located in the right sidebar and choose ",(0,s.jsx)(n.strong,{children:"New Run"}),". In the pop-up window that appears next, select ",(0,s.jsx)(n.strong,{children:"Self-hosted"})," and input one or more of the tags you previously included in the runner configuration file."]}),"\n",(0,s.jsx)(n.h2,{id:"generating-up-to-date-configuration-schema",children:"Generating up-to-date Configuration Schema"}),"\n",(0,s.jsx)(n.p,{children:"Requirements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://pdm.fming.dev/latest/",children:"PDM"})," 2.8 or higher for contributing and creating the JSON schema of the configuration"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Find out about all configuration options by taking a look at the JSON schema of the configuration. You can generate an up-to-date JSON schema by cloning this repository and running the following commands."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"## Install and initialize pdm\npip install pdm\npdm install\n\npdm run python -m scripts.generate_config_schema_json\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},78220:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/askui-runner-simple-architecture-8fc30530e41c3ad3bc89df09697eb4e5.png"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>i});var s=t(11504);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);