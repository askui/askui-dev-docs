"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77880],{64336:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var l=s(17624),i=s(4552);const t={title:"2024.08.12 | AskUI Seuite 24.7.1",slug:"release-2024-08-12",authors:["johannesdienst"],tags:["AskUI Suite"],hide_table_of_contents:!1},r=void 0,o={permalink:"/release-notes/release-2024-08-12",source:"@site/blog/2024-08-12/2024-08-12.md",title:"2024.08.12 | AskUI Seuite 24.7.1",description:"Introduction",date:"2024-08-12T00:00:00.000Z",tags:[{inline:!0,label:"AskUI Suite",permalink:"/release-notes/tags/ask-ui-suite"}],readingTime:1.37,hasTruncateMarker:!1,authors:[{name:"Johannes Dienst",title:"Developer Advocate",email:"johannes.dienst@askui.com",imageURL:"/img/johannesdienst.jpg",key:"johannesdienst"}],frontMatter:{title:"2024.08.12 | AskUI Seuite 24.7.1",slug:"release-2024-08-12",authors:["johannesdienst"],tags:["AskUI Suite"],hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"2024.08.05 | ADK 0.20.7 - macOS and Linux Installer",permalink:"/release-notes/release-2024-08-05"}},a={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"New Features",id:"new-features",level:2},{value:"Changes",id:"changes",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Supported Operating Systems",id:"supported-operating-systems",level:2},{value:"Windows Installation",id:"windows-installation",level:2},{value:"macOS Installation",id:"macos-installation",level:2},{value:"Linux Installation",id:"linux-installation",level:2},{value:"Versions",id:"versions",level:2},{value:"Components and Packages",id:"components-and-packages",level:3},{value:"3rd Party Versions",id:"3rd-party-versions",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,l.jsxs)(n.p,{children:["This release delivers version 24.7.1 of the ",(0,l.jsx)(n.em,{children:"AskUI Suite"}),", which includes debug rendering features, support for local proxies and non-admin Windows Installation."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"new-features",children:"New Features"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Debug rendering for internal use.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Animated mouse movement vectors."}),"\n",(0,l.jsx)(n.li,{children:"Scrollable text view of executed controller actions (and their parameters; not ADK steps)."}),"\n",(0,l.jsx)(n.li,{children:"Step index and icon of executed action on the screen (non-mouse actions are placed at the current mouse position)."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Support for local proxies."}),"\n",(0,l.jsx)(n.li,{children:"Non-admin Windows installation."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"changes",children:"Changes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.em,{children:"AskUI Controller"})," logs into ",(0,l.jsx)(n.code,{children:"~/.askui/Logs/AskUI Controller"})," directory."]}),"\n",(0,l.jsx)(n.li,{children:"The execOnShell ADK function supports specifying a timeout."}),"\n",(0,l.jsx)(n.li,{children:"Status indicator rendering is on by default now."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"AskUI-NewProject"})," commandlet does not copy user settings to project settings anymore."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Overlay rendering should require less resources (CPU/GPU)."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"supported-operating-systems",children:"Supported Operating Systems"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Windows 11","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Version: 22H2"}),"\n",(0,l.jsx)(n.li,{children:"Architecture(s): AMD64 and ARM64"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["MacOS","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Version: 14.x"}),"\n",(0,l.jsx)(n.li,{children:"Architecture(s): ARM64 (Apple Silicon)"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Linux","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Version: Ubuntu 22.04.2"}),"\n",(0,l.jsx)(n.li,{children:"Architecture(s): AMD64"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"windows-installation",children:"Windows Installation"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://files.askui.com/releases/Installer/24.7.1/AskUI-Suite-24.7.1-System-Installer-Win-AMD64-Full.exe",children:"Download link"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"macos-installation",children:"macOS Installation"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Download installer into /tmp folder\ncurl -o /tmp/AskUI-Suite-24.7.1-User-Installer-MacOS-ARM64-Full.run https://files.askui.com/releases/Installer/24.7.1/AskUI-Suite-24.7.1-User-Installer-MacOS-ARM64-Full.run\n\n# Run the installer\nbash /tmp/AskUI-Suite-24.7.1-User-Installer-MacOS-ARM64-Full.run\n"})}),"\n",(0,l.jsx)(n.h2,{id:"linux-installation",children:"Linux Installation"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Download installer into /tmp folder\ncurl -o /tmp/AskUI-Suite-24.7.1-User-Installer-Linux-x64-Full.run https://files.askui.com/releases/Installer/24.7.1/AskUI-Suite-24.7.1-User-Installer-Linux-x64-Full.run\n\n# Run the installer\nbash /tmp/AskUI-Suite-24.7.1-User-Installer-Linux-x64-Full.run\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"versions",children:"Versions"}),"\n",(0,l.jsx)(n.h3,{id:"components-and-packages",children:"Components and Packages"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["AskUI Controller","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"AskUI Remote Device Controller: v0.9.0.0"}),"\n",(0,l.jsx)(n.li,{children:"AskUI Legacy UI Controller: 0.14.6"}),"\n",(0,l.jsx)(n.li,{children:"AskUI Remote Device Snipping Tool: v0.1.1.0"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"AskUI Runner: 0.1.4"}),"\n",(0,l.jsx)(n.li,{children:"AskUI Development Environment (ADE): v0.9.0.0"}),"\n",(0,l.jsx)(n.li,{children:"AskUI Development Kit (ADK): 0.20.7"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"3rd-party-versions",children:"3rd Party Versions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Node.JS: 21.0.0"}),"\n",(0,l.jsx)(n.li,{children:"PowerShell 7.3.12"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>r});var l=s(11504);const i={},t=l.createContext(i);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);