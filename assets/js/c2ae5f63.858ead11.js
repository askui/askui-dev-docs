"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59524],{56412:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(17624),t=i(4552);const o={sidebar_position:3},d="ADE in Visual Studio Code",r={id:"suite/ADE/askui-ide-vscode",title:"ADE in Visual Studio Code",description:"The ADE is build to work seamlessly with VSCode. Therefore we guide you to create VSCode Workspace Settings.",source:"@site/docs/suite/ADE/askui-ide-vscode.md",sourceDirName:"suite/ADE",slug:"/suite/ADE/askui-ide-vscode",permalink:"/docs/next/suite/ADE/askui-ide-vscode",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/docs/suite/ADE/askui-ide-vscode.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"suiteSidebar",previous:{title:"ADE Management",permalink:"/docs/next/suite/Components/AskUI-Development-Environment"},next:{title:"Annotations for Retraining",permalink:"/docs/next/suite/ADE/annotations-for-training"}},l={},c=[{value:"Configure the <code>askui-shell</code>",id:"configure-the-askui-shell",level:2},{value:"Configure Jest Runner, ESLint &amp; Live View",id:"configure-jest-runner-eslint--live-view",level:2},{value:"Use Jest Runner",id:"use-jest-runner",level:2},{value:"Use ESLint",id:"use-eslint",level:2},{value:"Use Live Viewer",id:"use-live-viewer",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"ade-in-visual-studio-code",children:"ADE in Visual Studio Code"})}),"\n",(0,n.jsxs)(s.p,{children:["The ADE is build to work seamlessly with ",(0,n.jsx)(s.a,{href:"https://code.visualstudio.com/",children:"VSCode"}),". Therefore we guide you to create ",(0,n.jsx)(s.a,{href:"https://code.visualstudio.com/docs/getstarted/settings#_settingsjson",children:"VSCode Workspace Settings"}),"."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Create a ",(0,n.jsx)(s.code,{children:"<project>/.vscode"})," folder with ",(0,n.jsx)(s.code,{children:"mkdir .vscode"})]}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"configure-the-askui-shell",children:["Configure the ",(0,n.jsx)(s.code,{children:"askui-shell"})]}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsxs)(s.li,{children:["Create the ",(0,n.jsx)(s.code,{children:"<project>/.vscode/settings.json"})," with the following content:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n    "livePreview.customExternalBrowser": "Default",\n    "terminal.integrated.profiles.windows":{   \n        "askui-shell": {    \n            "path": ["${env:ASKUI_INSTALLATION_DIRECTORY}\\\\Tools\\\\askui-shell.cmd"],\n            "icon": "robot",\n            "overrideName": true,\n            "color": "terminal.ansiMagenta",\n        }\n    },\n    "terminal.integrated.defaultProfile.windows": "askui-shell"\n}\n'})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"terminal.integrated.profiles.windows"}),": Configures the ",(0,n.jsx)(s.code,{children:"askui-shell"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"terminal.integrated.defaultProfile.windows"}),": Sets the ",(0,n.jsx)(s.code,{children:"askui-shell"})," as default"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Then the ",(0,n.jsx)(s.code,{children:"askui-shell"})," is configured as the default terminal like this:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"askui logo",src:i(63696).c+"",width:"3206",height:"756"})}),"\n",(0,n.jsx)(s.h2,{id:"configure-jest-runner-eslint--live-view",children:"Configure Jest Runner, ESLint & Live View"}),"\n",(0,n.jsxs)(s.p,{children:["Add the recommended extensions for VSCode by adding ",(0,n.jsx)(s.code,{children:"<project>/.vscode/extensions.json"})," with following content:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n    "recommendations": ["ms-vscode.live-server", "firsttris.vscode-jest-runner", "dbaeumer.vscode-eslint"]\n}\n'})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"ms-vscode.live-server"}),": HTML ",(0,n.jsx)(s.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server",children:"Live Viewer"})," for viewing annotations inside VSCode instead of, for example, having to jump out of VSCode and open it in a web browser."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"firsttris.vscode-jest-runner"}),": ",(0,n.jsx)(s.a,{href:"https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner",children:"Jest Runner"})," to start single test out of the IDE."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"dbaeumer.vscode-eslint"}),": ",(0,n.jsx)(s.a,{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:"ESLint"})," plugin to show missing ",(0,n.jsx)(s.code,{children:"exec()"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Then you can install the extension by clicking on ",(0,n.jsx)(s.code,{children:"Install"})," under:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"askui logo",src:i(39124).c+"",width:"608",height:"802"})}),"\n",(0,n.jsx)(s.h2,{id:"use-jest-runner",children:"Use Jest Runner"}),"\n",(0,n.jsxs)(s.p,{children:["You can start a workflow by clicking on ",(0,n.jsx)(s.code,{children:"Run"})," inside a ",(0,n.jsx)(s.code,{children:"*test.ts"}),"-file:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"askui logo",src:i(69620).c+"",width:"1244",height:"910"})}),"\n",(0,n.jsx)(s.h2,{id:"use-eslint",children:"Use ESLint"}),"\n",(0,n.jsxs)(s.p,{children:["ESLint Plugin is showing you if you forgot an ",(0,n.jsx)(s.code,{children:"exec()"}),":"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"askui logo",src:i(12084).c+"",width:"1198",height:"196"})}),"\n",(0,n.jsx)(s.h2,{id:"use-live-viewer",children:"Use Live Viewer"}),"\n",(0,n.jsx)(s.p,{children:"The Live Viewer can show you the annotation without leaving VSCode:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"askui logo",src:i(39828).c+"",width:"1916",height:"1252"})})]})}function h(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},39828:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/annotation-live-viewer-5e334723cc26f18878d083d0fd5f48bf.png"},63696:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/askui_shell-a5778ac1db9eaf27308aae59988dd008.png"},12084:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/eslint-missing-exec-db3f5971d12c97513d1616f119d9a91e.png"},69620:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/jestrunner-804432043996d1032cb48f0d2c45eee9.png"},39124:(e,s,i)=>{i.d(s,{c:()=>n});const n=i.p+"assets/images/recommended_extensions-f6ba47ebec322f65d4e65e8ada2c2617.png"},4552:(e,s,i)=>{i.d(s,{I:()=>r,M:()=>d});var n=i(11504);const t={},o=n.createContext(t);function d(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);