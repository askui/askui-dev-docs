"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48888],{92224:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=s(17624),i=s(4552);const l={title:"2024.02.26 | AskUI Suite 24.2.2",slug:"release-2024-02-26",authors:["johannesdienst","jonasmenesklou"],tags:["Intent-Pilot","AskUI Development Environment (ADE)","AskUI Runner","AskUI Controller"],hide_table_of_contents:!1},o=void 0,r={permalink:"/release-notes/release-2024-02-26",source:"@site/blog/2024-02-26/2024-02-26.md",title:"2024.02.26 | AskUI Suite 24.2.2",description:"Introduction",date:"2024-02-26T00:00:00.000Z",tags:[{inline:!0,label:"Intent-Pilot",permalink:"/release-notes/tags/intent-pilot"},{inline:!0,label:"AskUI Development Environment (ADE)",permalink:"/release-notes/tags/ask-ui-development-environment-ade"},{inline:!0,label:"AskUI Runner",permalink:"/release-notes/tags/ask-ui-runner"},{inline:!0,label:"AskUI Controller",permalink:"/release-notes/tags/ask-ui-controller"}],readingTime:1.345,hasTruncateMarker:!1,authors:[{name:"Johannes Dienst",title:"Developer Advocate",email:"johannes.dienst@askui.com",imageURL:"/img/johannesdienst.jpg",key:"johannesdienst",page:null},{name:"Jonas Menesklou",title:"CEO",email:"jonas.menesklou@askui.com",imageURL:"/img/jonasmenesklou.jpeg",key:"jonasmenesklou",page:null}],frontMatter:{title:"2024.02.26 | AskUI Suite 24.2.2",slug:"release-2024-02-26",authors:["johannesdienst","jonasmenesklou"],tags:["Intent-Pilot","AskUI Development Environment (ADE)","AskUI Runner","AskUI Controller"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"2024.03.04 | AskUI SDK Convenience Methods",permalink:"/release-notes/release-2024-03-04"},nextItem:{title:"2024.02.07 | AskUI Suite & Installer",permalink:"/release-notes/release-2024-02-07"}},a={authorsImageUrls:[void 0,void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"AskUI Installer Update 24.2.2",id:"askui-installer-update-2422",level:2},{value:"Installer for Windows",id:"installer-for-windows",level:3},{value:"New Features",id:"new-features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Changes",id:"changes",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"<strong>Mouse Movement</strong>",id:"mouse-movement",level:3},{value:"Versions",id:"versions",level:2},{value:"Components and Packages",id:"components-and-packages",level:3},{value:"3rd Party Versions",id:"3rd-party-versions",level:3}];function c(e){const n={a:"a",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"The main focus of the release AskUI Installer 24.2.2 was to polish the previous release 24.2.1 and therefore no major changes were introduced."}),"\n",(0,t.jsx)(n.h2,{id:"askui-installer-update-2422",children:"AskUI Installer Update 24.2.2"}),"\n",(0,t.jsxs)(n.p,{children:["Introduces a number of new steps: ",(0,t.jsx)(n.a,{href:"https://files.askui.com/releases/Installer/24.2.2/AskUI-Suite-24.2.2-System-Installer-Win-AMD64-Full.exe",children:"Download link"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"installer-for-windows",children:"Installer for Windows"}),"\n",(0,t.jsx)(n.p,{children:"The installer contains a number of new and modified dialogues. Furthermore, it contains additional components."}),"\n",(0,t.jsxs)(n.p,{children:["More information can be found ",(0,t.jsx)(n.a,{href:"../../docs/general/Getting%20Started/Installing%20AskUI/getting-started",children:"here"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"new-features",children:"New Features"}),"\n",(0,t.jsx)(n.p,{children:"This release focuses on bug fixes."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,t.jsx)(n.p,{children:"This release focuses on bug fixes."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Improved the robustness of the inter-process connection between Legacy Controller and Remote Device Controller."}),"\n",(0,t.jsx)(n.li,{children:"We only allow a single instance of the Legacy Controller for desktop scenarios (mobile platforms are untouched)."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,t.jsx)(n.p,{children:"This release focuses on bug fixes."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fixed left and right arrow key mapping which were swapped."}),"\n",(0,t.jsx)(n.li,{children:"Fixed issues with stuck mouse cursor and not finished actions."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"changes",children:"Changes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Mouse movement uses the OS's cursor position set instead of delta movement on a 1000hz update rate. Making it more reliable."}),"\n",(0,t.jsx)(n.li,{children:"Legacy Controller and Remote Device Controller are both shutdown with an error message if the connection is broken."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,t.jsx)(n.h3,{id:"mouse-movement",children:(0,t.jsx)(n.strong,{children:"Mouse Movement"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You may encounter issues when mouse pointer acceleration is enabled."}),"\n",(0,t.jsx)(n.li,{children:"There might be issues with the mouse movement when it tries to move to invalid coordinates."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"versions",children:"Versions"}),"\n",(0,t.jsx)(n.h3,{id:"components-and-packages",children:"Components and Packages"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["AskUI Controller","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AskUI Controller: v0.2.1.0 Preview"}),"\n",(0,t.jsx)(n.li,{children:"AskUI Legacy UI Controller: 0.14.0"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"AskUI Runner: 0.1.4"}),"\n",(0,t.jsx)(n.li,{children:"AskUI Development Environment (ADE)"}),"\n",(0,t.jsx)(n.li,{children:"AskUI Development Kit (ADK)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3rd-party-versions",children:"3rd Party Versions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Node.JS: 21.0.0"}),"\n",(0,t.jsx)(n.li,{children:"PowerShell 7.3.8"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>o});var t=s(11504);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);