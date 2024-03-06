"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82524],{89352:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=s(17624),t=s(4552);const o={sidebar_position:6,pagination_next:"general/Getting Started/write-your-first-instruction"},r="Enterprise Checklist",l={id:"general/Getting Started/Installing AskUI/enterprise-checklist",title:"Enterprise Checklist",description:"If you want to get started with AskUI in an enterprise environment you will experience challenges unique to your company. This checklist will give you everything that AskUI needs and guidance on how to resolve upcoming errors. If you are not familiar with setting this up we strongly suggest to get someone from your IT-department involved who knows how the network in your company works.",source:"@site/versioned_docs/version-0.16.0/general/01-Getting Started/Installing AskUI/enterprise-checklist.md",sourceDirName:"general/01-Getting Started/Installing AskUI",slug:"/general/Getting Started/Installing AskUI/enterprise-checklist",permalink:"/docs/general/Getting Started/Installing AskUI/enterprise-checklist",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.16.0/general/01-Getting Started/Installing AskUI/enterprise-checklist.md",tags:[],version:"0.16.0",sidebarPosition:6,frontMatter:{sidebar_position:6,pagination_next:"general/Getting Started/write-your-first-instruction"},sidebar:"docsSidebar",previous:{title:"AskUI on Android",permalink:"/docs/general/Getting Started/Installing AskUI/getting-started-android"},next:{title:"Create Your First Instruction",permalink:"/docs/general/Getting Started/write-your-first-instruction"}},d={},a=[{value:"Network",id:"network",level:2},{value:"Software Needed",id:"software-needed",level:2},{value:"Node.js",id:"nodejs",level:3},{value:"Python",id:"python",level:3},{value:"Windows",id:"windows",level:3},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Permissions",id:"permissions",level:3},{value:"macOS",id:"macos",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"enterprise-checklist",children:"Enterprise Checklist"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to get started with AskUI in an enterprise environment you will experience challenges unique to your company. This checklist will give you everything that AskUI needs and guidance on how to resolve upcoming errors. If you are not familiar with setting this up we ",(0,i.jsx)(n.strong,{children:"strongly"})," suggest to get someone from your IT-department involved who knows how the network in your company works."]}),"\n",(0,i.jsx)(n.p,{children:"Common problems you may run into:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#network",children:"Network"}),": You need to use a proxy for internet access."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#permissions",children:"Permissions"}),": Your machine does not have the necessary permissions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#software-needed",children:"Software needed"}),": AskUI needs Node.js and Python and to install dependencies."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"On windows please use the PowerShell all the time."})}),"\n",(0,i.jsx)(n.h2,{id:"network",children:"Network"}),"\n",(0,i.jsx)(n.p,{children:"This is often a tricky one. So if you experience problems installing AskUI that suggests the problem is missing internet access:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Please check our ",(0,i.jsx)(n.a,{href:"/docs/general/Troubleshooting/proxy",children:"Troubleshooting - Proxy page"})]}),"\n",(0,i.jsx)(n.li,{children:"Get help from your IT-department"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"software-needed",children:"Software Needed"}),"\n",(0,i.jsx)(n.h3,{id:"nodejs",children:"Node.js"}),"\n",(0,i.jsxs)(n.p,{children:["Install Node.js from the ",(0,i.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"official download page"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Open a terminal (Windows: PowerShell) and run the following commands to check if you have the correct versions of ",(0,i.jsx)(n.code,{children:"node"})," and ",(0,i.jsx)(n.code,{children:"npm"})," installed:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"node --version"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"npm --version"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,i.jsxs)(n.p,{children:["Python ",(0,i.jsx)(n.code,{children:"3.10"})," or higher needs to be installed. Open a terminal (Windows: PowerShell) and run ",(0,i.jsx)(n.code,{children:"python --version"})," to check if you have the correct version."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.python.org/downloads/windows/",children:"Official Download page for Windows"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.python.org/downloads/macos/",children:"Official Download page for macOS"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to use the ",(0,i.jsx)(n.code,{children:"AskUI Runner"})," you will create a virtual environment."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Follow ",(0,i.jsx)(n.a,{href:"https://mothergeo-py.readthedocs.io/en/latest/development/how-to/venv-win.html",children:"these instruction"}),". And consult your IT-department if you run into problems."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"You will probably have to install dependencies like node-packages over a company internal repository management system like Artifactory."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Find out how to set up ",(0,i.jsx)(n.code,{children:"Node.js"})," and ",(0,i.jsx)(n.code,{children:"Python"})," for your internal repository management system. Consult your IT-department if necessary."]}),"\n",(0,i.jsxs)(n.li,{children:["Check our ",(0,i.jsx)(n.a,{href:"/docs/general/Troubleshooting/proxy",children:"proxy troubleshooting page"})," for AskUI specific guidance on how to setup the proxy for ",(0,i.jsx)(n.code,{children:"Node.js"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"permissions",children:"Permissions"}),"\n",(0,i.jsxs)(n.p,{children:["The AskUI Controller needs permissions for ",(0,i.jsx)(n.em,{children:"screen recording"})," and ",(0,i.jsx)(n.em,{children:"accessibility features"})," to control your machine like a human. Follow the instructions for your operating system."]}),"\n",(0,i.jsx)(n.h3,{id:"macos",children:"macOS"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://support.apple.com/en-gb/guide/mac-help/mchld6aa7d23/mac",children:"Enable screen recording instructions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://support.apple.com/en-gb/guide/mac-help/mh43185/mac",children:"Enable accessibility instructions"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>r});var i=s(11504);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);