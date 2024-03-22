"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28976],{47668:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=s(17624),r=s(4552);const o={displayed_sidebar:"askuiStudioSidebar",custom_edit_url:null},i="Deploy and Manage Your Own AskUI Runners",l={id:"askui-studio/Onboarding-Guide/deploy-and-manage-your-own-runners",title:"Deploy and Manage Your Own AskUI Runners",description:"The AskUI Runner is a self-hosted component that downloads your workflows from AskUI Studio and runs them on the device it is hosted at. Internally it uses the AskUI SDK which connects to the Remote Device Controller.",source:"@site/versioned_docs/version-0.17.0/askui-studio/02-Onboarding-Guide/08-deploy-and-manage-your-own-runners.md",sourceDirName:"askui-studio/02-Onboarding-Guide",slug:"/askui-studio/Onboarding-Guide/deploy-and-manage-your-own-runners",permalink:"/docs/askui-studio/Onboarding-Guide/deploy-and-manage-your-own-runners",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"0.17.0",sidebarPosition:8,frontMatter:{displayed_sidebar:"askuiStudioSidebar",custom_edit_url:null},sidebar:"askuiStudioSidebar",previous:{title:"Connect Your Data Source",permalink:"/docs/askui-studio/Onboarding-Guide/connect-your-data-source"},next:{title:"Azure DevOps",permalink:"/docs/askui-studio/All-Integrations/azure-devops"}},a={},d=[{value:"Windows",id:"windows",level:2},{value:"Requirements",id:"requirements",level:3},{value:"AskUI-StartRunner Command",id:"askui-startrunner-command",level:3},{value:"Linux and macOS",id:"linux-and-macos",level:2},{value:"Requirements",id:"requirements-1",level:3},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Start UIController",id:"start-uicontroller",level:3},{value:"Execute Workflows on a Remote System: Change UIController URL",id:"execute-workflows-on-a-remote-system-change-uicontroller-url",level:3},{value:"Running a workflow",id:"running-a-workflow",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deploy-and-manage-your-own-askui-runners",children:"Deploy and Manage Your Own AskUI Runners"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"AskUI Runner"})," is a self-hosted component that downloads your workflows from ",(0,t.jsx)(n.strong,{children:"AskUI Studio"})," and runs them on the device it is hosted at. Internally it uses the ",(0,t.jsx)(n.strong,{children:"AskUI SDK"})," which connects to the Remote Device Controller."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to execute your workflows defined in ",(0,t.jsx)(n.strong,{children:"AskUI Studio"})," in your own environment instead of with AskUI-hosted runners, this page will help you set it up."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Architecture drawing how the AskUI-Runner fits into AskUI Studio, AskUI SDK and AskUI Remote Device Controller. The AskUI-Runner fetches Workflows from AskUI Studio and uploads the results back to it. The Runner uses the AskUI SDK which passes the instructions from the workflow steps to the AskUI Remote Device Controller.",src:s(88412).c+"",width:"1437",height:"622"})}),"\n",(0,t.jsx)(n.h2,{id:"windows",children:"Windows"}),"\n",(0,t.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install the ",(0,t.jsx)(n.strong,{children:"AskUI Controller"})," with the ",(0,t.jsx)(n.strong,{children:"AskUI-Installer"})," first."]}),"\n",(0,t.jsxs)(n.li,{children:["Then switch into the ",(0,t.jsx)(n.strong,{children:"AskUI Development Environment"})," (ADE) by executing the command ",(0,t.jsx)(n.code,{children:"askui-shell"})," in CMD."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"askui-startrunner-command",children:"AskUI-StartRunner Command"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Askui-StartRunner"})," command starts the AskUI Runner. This function accepts the following parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Token"}),": Specifies the AskUI token to be used for the runner. If not specified, the token from the AskUI settings is used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WorkspaceId"}),": Specifies the AskUI workspace ID to be used for the runner. If not specified, the workspace ID from the AskUI settings is used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Port"}),": Specifies the port of the device controller to be used for the runner. The default is 6769."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WebSocketHost"}),": Specifies the host of the device controller to be used for the runner. The default is 127.0.0.1."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ForceProjectTemplateUpdate"}),": Specifies whether to force the update of the project template. This is helpful for debugging."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LogLevel"}),": Specifies the AskUI Runner log level. Available values are: 'INFO', 'DEBUG', 'WARNING', 'ERROR', 'CRITICAL'. The default is 'INFO'."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Tags"}),": Specifies the tags to be set in the AskUI Runner configuration."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"linux-and-macos",children:"Linux and macOS"}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["Installing and running your own ",(0,t.jsx)(n.strong,{children:"AskUI Runner"})," requires you to know your way around the command line and be comfortable with developer tools like Python, Node and YAML."]}),(0,t.jsxs)(n.p,{children:["If you are working in an enterprise environment where your device is managed and access to internet is routed through a proxy; Our ",(0,t.jsx)(n.a,{href:"https://docs.askui.com/docs/general/Getting%20Started/enterprise-checklist",children:"Enterprise Checklist"})," will help you to set up all the requirements."]}),(0,t.jsx)(n.p,{children:"In case you need help do not hesitate to contact us!"})]}),"\n",(0,t.jsx)(n.h3,{id:"requirements-1",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Python 3.10"}),"\n",(0,t.jsx)(n.li,{children:"Node.js"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["We recommend using a virtual environment for Python. Make sure\xa0",(0,t.jsx)(n.code,{children:"python --version"}),"\xa0returns 3.10 or higher:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python -m venv venv\nsource venv/bin/activate\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We have not yet published the\xa0",(0,t.jsx)(n.strong,{children:"AskUI Runner"}),"\xa0to PyPI. For now, you can install it directly from GitHub (",(0,t.jsx)(n.a,{href:"https://github.com/askui/askui-runner",children:"link to repository"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install git+https://github.com/askui/askui-runner.git\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Currently, the standard logging output of the\xa0",(0,t.jsx)(n.strong,{children:"AskUI runner"}),"\xa0is minimal - we are soon going to change that. But you should see the runner starting the running of workflows as soon as you schedule some runs through the AskUI Studio."]}),"\n",(0,t.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Create a configuration file (",(0,t.jsx)(n.code,{children:".y{a}ml"}),"\xa0or\xa0",(0,t.jsx)(n.code,{children:".json"}),") in a directory of your choosing. The configuration file should contain at least some credentials and the command with which you start the runner without the ",(0,t.jsx)(n.code,{children:"config"})," file flag:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"credentials:\n  workspace_id: <workspace id> # replace with your workspace id\n  access_token: <access token> # replace with your access token\nrunner:\n  exec: python -m askui_runner # update if your command is different\n  tags: [<tag 1>, <tag 2>, ..] # replace with your own runner tags\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Explanation for ",(0,t.jsx)(n.strong,{children:"tags:"})," When you create a run in ",(0,t.jsx)(n.strong,{children:"AskUI Studio"})," the tags determine which runner can poll a specific workflow. The runner only pulls workflows where one of the tags match."]})}),"\n",(0,t.jsx)(n.p,{children:"Start the runner using"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"python -m askui_runner -c <path to your config file, e.g., askui-runner.config.yaml>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"start-uicontroller",children:"Start UIController"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to run your workflows on the same system as the runner you need to start an UIController that listens on port\xa0",(0,t.jsx)(n.code,{children:"6769"}),". Please download the one for your operating system and start it:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Please use our AskUI Installer and follow the Getting Started guide: ",(0,t.jsx)(n.a,{href:"/docs/general/Getting%20Started/Installing%20AskUI/getting-started",children:"Windows"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/linux/x64/askui-ui-controller.AppImage",children:"Linux"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"macOS"})," After installation to ",(0,t.jsx)(n.code,{children:"Applications"})," remove the quarantine flag with the following command run from a terminal: ",(0,t.jsx)(n.code,{children:"xattr -d com.apple.quarantine /Applications/askui-ui-controller.app"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/darwin/x64/askui-ui-controller.dmg",children:"macOS(Intel)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://files.askui.com/releases/askui-ui-controller/latest/darwin/arm64/askui-ui-controller.dmg",children:"macOS(Apple silicon)"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"execute-workflows-on-a-remote-system-change-uicontroller-url",children:"Execute Workflows on a Remote System: Change UIController URL"}),"\n",(0,t.jsx)(n.p,{children:"You can change the UIController-URL so the runner can talk to a UIController that runs on a remote machine or on a different port:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'...\nrunner:\n  ...\n  controller:\n    host: "127.0.0.1"\n    port: 7000\n'})}),"\n",(0,t.jsx)(n.h2,{id:"running-a-workflow",children:"Running a workflow"}),"\n",(0,t.jsxs)(n.p,{children:["Go back to AskUI Studio and access the workflow you intend to execute. Head over to the '",(0,t.jsx)(n.strong,{children:"Run"}),'\' tab located in the right sidebar and choose "New Run." In the pop-up window that appears next, select "',(0,t.jsx)(n.strong,{children:"Self-hosted"}),'" and input one or more of the tags you previously included in the runner configuration file.']})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},88412:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/askui-runner-simple-architecture-8fc30530e41c3ad3bc89df09697eb4e5.png"},4552:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>i});var t=s(11504);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);