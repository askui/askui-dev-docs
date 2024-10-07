"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22960],{72380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(17624),r=t(4552);const i={sidebar_position:5,pagination_next:"general/Getting Started/write-your-first-instruction"},o="AskUI on Linux",l={id:"general/Getting Started/Installing AskUI/getting-started-linux",title:"AskUI on Linux",description:"Prerequisites",source:"@site/versioned_docs/version-0.20.7/general/01-Getting Started/Installing AskUI/getting-started-linux.md",sourceDirName:"general/01-Getting Started/Installing AskUI",slug:"/general/Getting Started/Installing AskUI/getting-started-linux",permalink:"/docs/general/Getting Started/Installing AskUI/getting-started-linux",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs",tags:[],version:"0.20.7",sidebarPosition:5,frontMatter:{sidebar_position:5,pagination_next:"general/Getting Started/write-your-first-instruction"},sidebar:"docsSidebar",previous:{title:"AskUI on Windows",permalink:"/docs/general/Getting Started/Installing AskUI/getting-started"},next:{title:"Create Your First Instruction",permalink:"/docs/general/Getting Started/write-your-first-instruction"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Step 0: Create an AskUI Account",id:"step-0-create-an-askui-account",level:3},{value:"Step 1: Download Installer",id:"step-1-download-installer",level:3},{value:"Step 2: Setup AskUI on Your Computer",id:"step-2-setup-askui-on-your-computer",level:3},{value:"Step 3: Activate the AskUI Development Environment (ADE)",id:"step-3-activate-the-askui-development-environment-ade",level:3},{value:"Step 4: Connect Your AskUI Account",id:"step-4-connect-your-askui-account",level:3},{value:"Step 5: Start the Controller",id:"step-5-start-the-controller",level:3},{value:"Step 6: Create a New Project",id:"step-6-create-a-new-project",level:3},{value:"Step 7: Open Your Project",id:"step-7-open-your-project",level:3},{value:"Step 8: Open a Workflow File",id:"step-8-open-a-workflow-file",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"askui-on-linux",children:"AskUI on Linux"})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Check if you have the following requirements, before you start the process."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You need an AskUI account. Don't have one? Sign up for a ",(0,s.jsx)(n.a,{href:"https://www.app.askui.com",children:"free trial here"}),"!"]}),"\n",(0,s.jsxs)(n.li,{children:["Consider using an IDE. We recommend ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["\u26a0\ufe0f"," ",(0,s.jsx)(n.a,{href:"/docs/general/Troubleshooting/linux#wayland",children:"Information for Wayland"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.h3,{id:"step-0-create-an-askui-account",children:"Step 0: Create an AskUI Account"}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["As we need to prevent misuse of our API, we need you to create some credentials through our ",(0,s.jsx)(n.a,{href:"https://app.askui.com/",children:(0,s.jsx)(n.strong,{children:"AskUI Studio"})}),"."]}),(0,s.jsxs)(n.p,{children:["Please ",(0,s.jsx)(n.a,{href:"https://www.app.askui.com",children:"sign up for a free trial"}),"."]})]}),"\n",(0,s.jsx)(n.h3,{id:"step-1-download-installer",children:"Step 1: Download Installer"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# If you have AMD64 use this\n# Download installer into /tmp folder\ncurl -o /tmp/AskUI-Suite-24.9.1-User-Installer-Linux-x64-Full.run https://files.askui.com/releases/Installer/24.9.1/AskUI-Suite-24.9.1-User-Installer-Linux-x64-Full.run\n\n# If you have ARM64 use this\n# Download installer into /tmp folder (ARM64)\ncurl -o /tmp/AskUI-Suite-24.9.1-User-Installer-Linux-ARM64-Full.run https://files.askui.com/releases/Installer/24.9.1/AskUI-Suite-24.9.1-User-Installer-Linux-ARM64-Full.run\n"})}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:"It will install the following components:"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/suite/Components/AskUI-Controller",children:"AskUI Controller"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/suite/Components/AskUI-Development-Environment",children:"AskUI Development Environment (ADE)"})}),"\n",(0,s.jsx)(n.li,{children:"AskUI Development Kit (SDK)"}),"\n",(0,s.jsxs)(n.li,{children:["(optional) ",(0,s.jsx)(n.a,{href:"/docs/suite/Components/AskUI-Runner",children:"AskUI Runner (Executing workflows from AskUI Studio)"})]}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"step-2-setup-askui-on-your-computer",children:"Step 2: Setup AskUI on Your Computer"}),"\n",(0,s.jsx)(n.p,{children:"Run the installer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# If you have AMD64 use this\nbash /tmp/AskUI-Suite-24.9.1-User-Installer-Linux-x64-Full.run\n\n# If you have ARM64 use this\nbash /tmp/AskUI-Suite-24.9.1-User-Installer-Linux-ARM64-Full.run\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Press ",(0,s.jsx)(n.code,{children:"Enter"})," to review the license agreement. Then press and hold Enter to scroll."]}),"\n",(0,s.jsx)(n.li,{children:"Accept the license agreement."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Answer the questions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Do you use a proxy?"}),"\n",(0,s.jsx)(n.li,{children:"Do you want to make AskUI Command globally available?"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Close and re-open your terminal window for the installation to take effect."})}),"\n",(0,s.jsx)(n.h3,{id:"step-3-activate-the-askui-development-environment-ade",children:"Step 3: Activate the AskUI Development Environment (ADE)"}),"\n",(0,s.jsx)(n.p,{children:"Open a terminal and run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# If you made the command globally available\naskui-shell\n\n# If you have NOT made the command globally available\n~/.askui-suites/Tools/askui-shell\n"})}),"\n",(0,s.jsx)(n.p,{children:"Activating the ADE may take a few seconds."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If you are not sure what an ADE command does, you can run ",(0,s.jsx)(n.code,{children:"Get-Help <command>"})," to get more information about it."]})}),"\n",(0,s.jsx)(n.h3,{id:"step-4-connect-your-askui-account",children:"Step 4: Connect Your AskUI Account"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["As we need to prevent misuse of our API, we need you to create some credentials through our ",(0,s.jsx)(n.a,{href:"https://app.askui.com/",children:(0,s.jsx)(n.strong,{children:"AskUI Studio"})}),"."]}),(0,s.jsxs)(n.p,{children:["Please ",(0,s.jsx)(n.a,{href:"https://www.app.askui.com",children:"sign up for a free trial"}),"."]})]}),"\n",(0,s.jsxs)(n.p,{children:["Run the following command to authenticate and connect your ADE to your AskUI account. Replace ",(0,s.jsx)(n.code,{children:"<access token>"})," and ",(0,s.jsx)(n.code,{children:"<workspace id>"})," with your real credentials from AskUI Studio."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"AskUI-SetSettings -WorkspaceId <workspace id> -Token <access token>\n"})}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:"How do I get credentials?"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Access Token"})," You can create a new access token inside ",(0,s.jsx)(n.a,{href:"https://app.askui.com/",children:(0,s.jsx)(n.strong,{children:"AskUI Studio"})}),". Go to any Workspace and navigate to ",(0,s.jsx)(n.em,{children:"Access Tokens"})," in the left sidebar."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Workspace ID"})," Navigate to your workspace settings. You can find the workspace ID under ",(0,s.jsx)(n.em,{children:"General"})," below the workspace name."]}),"\n"]}),(0,s.jsx)(n.p,{children:"Validate the settings with the following command:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"AskUI-ShowSettings\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"step-5-start-the-controller",children:"Step 5: Start the Controller"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"You have to disable mouse acceleration for the AskUI Controller to work properly!"})}),"\n",(0,s.jsx)(n.p,{children:"Start the AskUI Controller with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"AskUI-StartController -RunInBackground\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-6-create-a-new-project",children:"Step 6: Create a New Project"}),"\n",(0,s.jsx)(n.p,{children:"Switch to a directory where you want to create the new AskUI project and run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"AskUI-NewProject -ProjectName askui_first -TestFramework jest -TypeScriptConfig true\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-7-open-your-project",children:"Step 7: Open Your Project"}),"\n",(0,s.jsxs)(n.p,{children:["Your new AskUI project has now been created inside the folder you specified and its path is set as your current working directory: ",(0,s.jsx)(n.code,{children:"<path you ran AskUI-NewProject>/<your_askui_project_name>"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Now open this folder with your IDE of choice."}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:"Details of the AskUI project setup"})}),(0,s.jsx)(n.p,{children:"If you are using Visual Studio Code, you can run the following command in the same command prompt:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"code .\n"})}),(0,s.jsx)(n.p,{children:"On the left, in your file explorer, you should see the files that make up your AskUI project."}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".askui\\Settings"})," - Global Project Settings"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"allure-results"})," - AskUI reporter files will be generated here"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"askui_example"})," - Workflow Files",(0,s.jsx)(n.br,{}),"\n","a. ",(0,s.jsx)(n.code,{children:"helpers"})," - Helper functions for your project",(0,s.jsx)(n.br,{}),"\n","b. ",(0,s.jsx)(n.code,{children:"jest.config.ts"})," - Jest Automation Framework Settings",(0,s.jsx)(n.br,{}),"\n","c. ",(0,s.jsx)(n.code,{children:"my-first-askui-test-suite.ts"})," - An example workflow file"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"node_modules"})," - Packages needed to make AskUI work"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"report"})," - Annotations will be generated here"]}),"\n"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"AskUI Project Visual Studio Code",src:t(5348).c+"",width:"1330",height:"1020"})})]}),"\n",(0,s.jsx)(n.h3,{id:"step-8-open-a-workflow-file",children:"Step 8: Open a Workflow File"}),"\n",(0,s.jsxs)(n.p,{children:["The workflow files are where you will write your automation scripts.\nTo find them, navigate to the ",(0,s.jsx)(n.code,{children:"askui_example"})," folder."]}),"\n",(0,s.jsxs)(n.p,{children:["The project comes with one ",(0,s.jsx)(n.strong,{children:"template workflow"}),", which is called ",(0,s.jsx)(n.code,{children:"my-first-askui-test-suite.ts"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"On the next page, you will dive deeper into how to write instructions in the AskUI automation framework."}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsxs)(n.p,{children:["You are now ready to create your first workflow with AskUI! Please go to the next page ",(0,s.jsx)(n.a,{href:"/docs/general/Getting%20Started/write-your-first-instruction",children:"Write Your First Instruction"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5348:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/Visual_Studio_Code-abe00683d7a490bed702c7c67c6c5b0e.png"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var s=t(11504);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);