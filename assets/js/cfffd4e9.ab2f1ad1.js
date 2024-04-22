"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14544],{48532:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var o=s(17624),l=s(4552);const t={title:"2024.04.22 | AskUI Suite 24.4.1 - Inference Speedup",slug:"release-2024-04-22",authors:["johannesdienst","jonasmenesklou"],tags:["AskUI Development Environment (ADE)"],hide_table_of_contents:!1},i=void 0,r={permalink:"/release-notes/release-2024-04-22",source:"@site/blog/2024-04-22/2024-04-22.md",title:"2024.04.22 | AskUI Suite 24.4.1 - Inference Speedup",description:"Introduction",date:"2024-04-22T00:00:00.000Z",tags:[{label:"AskUI Development Environment (ADE)",permalink:"/release-notes/tags/ask-ui-development-environment-ade"}],readingTime:1.345,hasTruncateMarker:!1,authors:[{name:"Johannes Dienst",title:"Developer Advocate",email:"johannes.dienst@askui.com",imageURL:"/img/johannesdienst.jpeg",key:"johannesdienst"},{name:"Jonas Menesklou",title:"CEO",email:"jonas.menesklou@askui.com",imageURL:"/img/jonasmenesklou.jpeg",key:"jonasmenesklou"}],frontMatter:{title:"2024.04.22 | AskUI Suite 24.4.1 - Inference Speedup",slug:"release-2024-04-22",authors:["johannesdienst","jonasmenesklou"],tags:["AskUI Development Environment (ADE)"],hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"2024.03.25 | AskUI SDK Automations Directory Option",permalink:"/release-notes/release-2024-03-25"}},a={authorsImageUrls:[void 0,void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Changes",id:"changes",level:2},{value:"Improvements",id:"improvements",level:2},{value:"AskUI Installer Update 24.4.1",id:"askui-installer-update-2441",level:2},{value:"New Features",id:"new-features",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Versions",id:"versions",level:2},{value:"Components and Packages",id:"components-and-packages",level:3},{value:"3rd Party Versions",id:"3rd-party-versions",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,l.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["We released the ",(0,o.jsx)(n.a,{href:"#askui-installer-update-2441",children:"AskUI Installer version 24.4.1"})," which introduces new commandlets to start and stop the AskUI Controller, debug AskUI projects and processes."]}),"\n",(0,o.jsxs)(n.p,{children:["Removed the icon classifier from the default inference. You can still target icons with ",(0,o.jsx)(n.code,{children:"icon().withText('<icon_name>')"})," so the change is backwards compatible. But the name will not be displayed anymore. This discourages using the names of the icons as they are flaky across runs generally and often wrong."]}),"\n",(0,o.jsx)(n.p,{children:"Lastly we optimized our inference backend. This leads to faster workflow execution as it saves 300 - 700 milliseconds each time an instruction in an AskUI workflow invokes inference."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"changes",children:"Changes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Removed the icon classifier from the default inference."}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Inference is faster 300-700 milliseconds"}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"askui-installer-update-2441",children:"AskUI Installer Update 24.4.1"}),"\n",(0,o.jsxs)(n.p,{children:["Introduces a number of new commandlets to manage your AskUI Installation: ",(0,o.jsx)(n.a,{href:"https://files.askui.com/releases/Installer/24.4.1/AskUI-Suite-24.4.1-System-Installer-Win-AMD64-Full.exe",children:"Download link"}),"."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"new-features",children:"New Features"}),"\n",(0,o.jsx)(n.p,{children:"This release focuses on new ADE commandlets."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["ADE commandlets to start and stop the AskUI Controller (and child processes):","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.askui.com/docs/general/Components/AskUI-Development-Environment#askui-showcontrollers-command",children:"AskUI-ShowControllers"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.askui.com/docs/general/Components/AskUI-Development-Environment#askui-stopcontrollers-command",children:"AskUI-StopControllers"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://docs.askui.com/docs/general/Components/AskUI-Development-Environment#askui-showsettings-command",children:"AskUI-ShowSettings"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["New option: ",(0,o.jsx)(n.code,{children:"WithSecrets"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Debug Commands:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.askui.com/docs/general/Components/AskUI-Development-Environment#project-management-debug-commands",children:"Project Management Debug Commands"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.askui.com/docs/general/Components/AskUI-Development-Environment#process-management-debug-commands",children:"Process Management Debug Commands"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,o.jsx)(n.p,{children:"This release focuses on bug fixes."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"High CPU usage of the RemoteDeviceController process, especially during idle."}),"\n",(0,o.jsx)(n.li,{children:"All FFMPG processes are getting killed on AskUI Controller shutdown."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"scroll()"})," crashes AskUI Controller"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"versions",children:"Versions"}),"\n",(0,o.jsx)(n.h3,{id:"components-and-packages",children:"Components and Packages"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["AskUI Controller","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"AskUI Controller: v0.2.1.0 Preview"}),"\n",(0,o.jsx)(n.li,{children:"AskUI Legacy UI Controller: 0.14.0"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"AskUI Runner: 0.1.4"}),"\n",(0,o.jsx)(n.li,{children:"AskUI Development Environment (ADE)"}),"\n",(0,o.jsx)(n.li,{children:"AskUI Development Kit (ADK)"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"3rd-party-versions",children:"3rd Party Versions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Node.JS: 21.0.0"}),"\n",(0,o.jsx)(n.li,{children:"PowerShell 7.3.8"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>i});var o=s(11504);const l={},t=o.createContext(l);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);