"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68726],{46324:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=o(17624),t=o(4552);const r={sidebar_position:4},i="AskUI Controller",l={id:"general/Components/AskUI-Controller",title:"AskUI Controller",description:"The AskUI Controller is a service that runs on your operating system. It is able to control inputs and observe the visuals on the operating system. The AskUI SDK connects to it and issues commands for user input like mouse movement and keypresses to it which the AskUI Controller executes like a real human user.",source:"@site/versioned_docs/version-0.18.0/general/02-Components/AskUI-Controller.md",sourceDirName:"general/02-Components",slug:"/general/Components/AskUI-Controller",permalink:"/docs/general/Components/AskUI-Controller",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.18.0/general/02-Components/AskUI-Controller.md",tags:[],version:"0.18.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Like on Spotify Desktop App",permalink:"/docs/general/Tutorials/spotify-tutorial"},next:{title:"Supported-Keys",permalink:"/docs/general/Components/Supported-Keys"}},a={},d=[{value:"Start Over Terminal (AskUI Development Environment)",id:"start-over-terminal-askui-development-environment",level:2},{value:"Example",id:"example",level:3},{value:"Show All Controllers Over Terminal (AskUI Development Environment)",id:"show-all-controllers-over-terminal-askui-development-environment",level:2},{value:"Example",id:"example-1",level:3},{value:"Stop Over Terminal (AskUI Development Environment)",id:"stop-over-terminal-askui-development-environment",level:2},{value:"Examples",id:"examples",level:3},{value:"Features",id:"features",level:2},{value:"Type Like a Human",id:"type-like-a-human",level:3},{value:"Android on Windows",id:"android-on-windows",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"Mouse Movement",id:"mouse-movement",level:3},{value:"Log Files",id:"log-files",level:3},{value:"Android",id:"android",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"askui-controller",children:"AskUI Controller"}),"\n",(0,s.jsx)(n.p,{children:"The AskUI Controller is a service that runs on your operating system. It is able to control inputs and observe the visuals on the operating system. The AskUI SDK connects to it and issues commands for user input like mouse movement and keypresses to it which the AskUI Controller executes like a real human user."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Architecture drawing how the AskUI Controller works together with AskUI SDK. The AskUI Controller runs in an environment and executes commands given to it by AskUI SDK: keypresses, mouse movement and clicks. It also takes screenshots and sends them over the AskUI SDK to the AskUI Inference.",src:o(26744).c+"",width:"1426",height:"692"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["The AskUI Controller only works on ",(0,s.jsx)(n.strong,{children:"Windows"})," and you have to ",(0,s.jsx)(n.strong,{children:"disable mouse acceleration"})," for the AskUI Controller to work properly!"]})}),"\n",(0,s.jsx)(n.h2,{id:"start-over-terminal-askui-development-environment",children:"Start Over Terminal (AskUI Development Environment)"}),"\n",(0,s.jsxs)(n.p,{children:["First switch into the ",(0,s.jsx)(n.a,{href:"/docs/general/Components/AskUI-Development-Environment",children:"AskUI Development Environment (ADE)"})," by executing the command ",(0,s.jsx)(n.code,{children:"askui-shell"})," in a terminal. The ",(0,s.jsx)(n.code,{children:"AskUI-StartController"})," command is used to launch the ",(0,s.jsx)(n.strong,{children:"AskUI Controller"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You have several configuration options, which you can find ",(0,s.jsx)(n.a,{href:"/docs/general/Components/AskUI-Development-Environment#askui-controller-management",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"AskUI-StartController -LogLevel debug -RunInBackground\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Note: Adjust the parameters as needed for your specific use case."})}),"\n",(0,s.jsx)(n.h2,{id:"show-all-controllers-over-terminal-askui-development-environment",children:"Show All Controllers Over Terminal (AskUI Development Environment)"}),"\n",(0,s.jsxs)(n.p,{children:["First switch into the ",(0,s.jsx)(n.a,{href:"/docs/general/Components/AskUI-Development-Environment",children:"AskUI Development Environment (ADE)"})," by executing the command ",(0,s.jsx)(n.code,{children:"askui-shell"})," in a terminal. The ",(0,s.jsx)(n.code,{children:"AskUI-ShowControllers"})," command is used to show the running ",(0,s.jsx)(n.strong,{children:"AskUI Controller"})," processes."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Only AskUI Controller processes started by the ",(0,s.jsx)(n.code,{children:"AskUI-StartController"})," command during the same session can be shown by this command."]})}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"# Show all AskUI running AskUI Controllers.\nAskUI-ShowControllers\n\n# Output\nProcessId DisplayNum Runtime Port\n--------- ---------- ------- ----\n     3528          0 desktop 6769\n    15184          0 android 6781\n"})}),"\n",(0,s.jsx)(n.h2,{id:"stop-over-terminal-askui-development-environment",children:"Stop Over Terminal (AskUI Development Environment)"}),"\n",(0,s.jsxs)(n.p,{children:["First switch into the ",(0,s.jsx)(n.a,{href:"/docs/general/Components/AskUI-Development-Environment",children:"AskUI Development Environment (ADE)"})," by executing the command ",(0,s.jsx)(n.code,{children:"askui-shell"})," in a terminal. The ",(0,s.jsx)(n.code,{children:"AskUI-StopControllers"})," command is used to stop the ",(0,s.jsx)(n.strong,{children:"AskUI Controller"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You have several configuration options, which you can find ",(0,s.jsx)(n.a,{href:"/docs/general/Components/AskUI-Development-Environment#askui-controller-management",children:"here"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Only AskUI Controller processes started by the ",(0,s.jsx)(n.code,{children:"AskUI-StartController"})," command during the same session can be stopped by this command."]})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"# Stops the AskUI Controller with the following options: Port: 6769\nAskUI-StopControllers -Port 6769\n\n# Stop the AskUI Controller with the following options: DisplayNum: 0, Runtime: desktop\nAskUI-StopControllers -DisplayNum 0 -Runtime desktop\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Note: Adjust the parameters as needed for your specific use case."})}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(n.h3,{id:"type-like-a-human",children:"Type Like a Human"}),"\n",(0,s.jsx)(n.p,{children:"Together with the asynchronous execution of actions we also introduce natural typing. The\nfirst iteration of this feature uses the typical typing speed of a human."}),"\n",(0,s.jsx)(n.h3,{id:"android-on-windows",children:"Android on Windows"}),"\n",(0,s.jsxs)(n.p,{children:["AskUI automation works on an Android device that is controlled from a Windows machine. It allows you to run a workflow on an Android device, including recording the session. Instructions how to setup the Android workflow can be found in our ",(0,s.jsx)(n.a,{href:"/docs/general/Executing%20Automations/mobile-automation#android",children:"documentation"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Please also read the ",(0,s.jsx)(n.a,{href:"#known-issues",children:"known issues section"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,s.jsx)(n.h3,{id:"mouse-movement",children:"Mouse Movement"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You may encounter issues when mouse pointer acceleration is enabled."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"log-files",children:"Log Files"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Log files are stored under ",(0,s.jsx)(n.code,{children:"<YOUR_USER_FOLDER>/.askui/"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Recording on an Android device is not stable."}),"\n",(0,s.jsx)(n.li,{children:"Recorded resolution might be lower than the device resolution."}),"\n",(0,s.jsx)(n.li,{children:"Recorded video might be empty or single frame in cases no screen updates occurred during recording."}),"\n",(0,s.jsx)(n.li,{children:"We don't support landscape mode on Android."}),"\n",(0,s.jsx)(n.li,{children:"Devices with high DPI screen might not work as expected."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},26744:(e,n,o)=>{o.d(n,{c:()=>s});const s=o.p+"assets/images/askui-device-controller-simple-architecture-37dab0e51966fca03cb9ad7fb99e358d.png"},4552:(e,n,o)=>{o.d(n,{I:()=>l,M:()=>i});var s=o(11504);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);