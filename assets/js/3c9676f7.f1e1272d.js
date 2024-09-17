"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59328],{65644:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(17624),o=t(4552);const i={displayed_sidebar:"apiSidebar"},r="below",a={id:"api/Relations/below",title:"below",description:"production",source:"@site/versioned_docs/version-0.18.0/api/04-Relations/below.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/below",permalink:"/docs/0.18.0/api/Relations/below",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.18.0/api/04-Relations/below.md",tags:[],version:"0.18.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"and",permalink:"/docs/0.18.0/api/Relations/and"},next:{title:"contains",permalink:"/docs/0.18.0/api/Relations/contains"}},c={},l=[];function d(e){const n={code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"below",children:"below"})}),"\n",(0,s.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Filters for an element below another element."}),"\n",(0,s.jsxs)(n.p,{children:["Takes an optional parameter ",(0,s.jsx)(n.code,{children:"index"})," to select the ",(0,s.jsx)(n.code,{children:"nth"})," element (starting with 0)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"--------------\n|    text    |\n--------------\n--------------\n|   button0  |\n--------------\n--------------\n|   button1  |\n--------------\n\n// Returns button0 because button0 is the first button below text\n...button().below().text()\n...button().below(0).text()\n// Returns button1 because button1  is the second button below text\n...button().below(1).text()\n// Returns no element because text is above button\n...text().below().button()\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(80102).c+"",width:"1920",height:"1080"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"@param {number} [optionalIndex=0] - element index"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},80102:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/below-167d0bdcc85218d9a5f6b9c4a6a6761e.gif"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var s=t(11504);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);