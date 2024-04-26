"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25883],{22664:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=s(17624),n=s(4552);const r={sidebar_position:7},i="IPv6",l={id:"general/Troubleshooting/ipv6",title:"IPv6",description:"By default, the AskUI Controller which the AskUI lib starts and interacts with (you can also start it manually) is started at IP address 127.0.0.1 (IPv4 IP address that localhost normally resolves to).",source:"@site/versioned_docs/version-0.17.0/general/07-Troubleshooting/ipv6.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/ipv6",permalink:"/docs/0.17.0/general/Troubleshooting/ipv6",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.17.0/general/07-Troubleshooting/ipv6.md",tags:[],version:"0.17.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/docs/0.17.0/general/Troubleshooting/"},next:{title:"Jest",permalink:"/docs/0.17.0/general/Troubleshooting/jest"}},a={},d=[];function c(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"ipv6",children:"IPv6"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the AskUI Controller which the AskUI lib starts and interacts with (you can also start it manually) is started at IP address ",(0,o.jsx)(t.code,{children:"127.0.0.1"})," (IPv4 IP address that ",(0,o.jsx)(t.code,{children:"localhost"})," normally resolves to)."]}),"\n",(0,o.jsxs)(t.p,{children:["To use IPv6, e.g., because you disabled IPv4, you need to start the AskUI Controller manually from the terminal providing ",(0,o.jsx)(t.code,{children:"--host ::1"})," (assuming you want to use IP address ",(0,o.jsx)(t.code,{children:"::1"}),", otherwise provide a different address) and provide the ",(0,o.jsx)(t.code,{children:"uiControllerUrl"})," when constructing the ",(0,o.jsx)(t.code,{children:"UiControlClient"})," (by default, in the ",(0,o.jsx)(t.code,{children:"<project_dir>/test/helpers/askui-helper.ts"}),"):"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"aui = await UiControlClient.build({\n    uiControllerUrl: 'http://[::1]:6769',\n    // other client args...\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["For example, starting the AskUI Controller (version ",(0,o.jsx)(t.code,{children:"latest"}),", for other versions replace the respective part of the path) on macOS from your project's root directory is done like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"./node_modules/askui/dist/release/latest/darwin/askui-ui-controller.app --args --host ::1\n"})}),"\n",(0,o.jsx)(t.p,{children:"On other operating systems the path is different:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"# Windows\nstart ./node_modules/askui/dist/release/latest/win32/askui-ui-controller.exe --args --host ::1\n\n# Linux\n./node_modules/askui/dist/release/latest/linux/askui-ui-controller --args --host ::1\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>l,M:()=>i});var o=s(11504);const n={},r=o.createContext(n);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);