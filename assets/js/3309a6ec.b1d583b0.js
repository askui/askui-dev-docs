"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35216],{25756:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(17624),s=i(4552);const a={displayed_sidebar:"apiSidebar"},r="waitUntil",o={id:"api/Convenience/waituntil",title:"waitUntil",description:"production",source:"@site/versioned_docs/version-0.18.0/api/08-Convenience/waituntil.md",sourceDirName:"api/08-Convenience",slug:"/api/Convenience/waituntil",permalink:"/docs/api/Convenience/waituntil",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.18.0/api/08-Convenience/waituntil.md",tags:[],version:"0.18.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"typeIntoTextfield",permalink:"/docs/api/Convenience/typeintotextfield"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"waituntil",children:"waitUntil"}),"\n",(0,t.jsx)("span",{class:"theme-doc-version-badge badge badge--secondary",children:"production"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"Wait until an AskUICommand does not fail."}),"\n",(0,t.jsx)(n.p,{children:"Use it to wait for an element to appear like this:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await waitUntil(aui.expect().text('GitHub').exists());\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@param {Executable} AskUICommand"}),"\n",(0,t.jsx)(n.li,{children:"@param {number} maxTry - Number of maximum retries"}),"\n",(0,t.jsx)(n.li,{children:"@param {number} waitTime - Time in milliseconds"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>r});var t=i(11504);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);