"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55564],{26024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(17624),s=n(4552);const r={displayed_sidebar:"apiSidebar"},o="rightOf",l={id:"api/Relations/rightof",title:"rightOf",description:"production",source:"@site/versioned_docs/version-0.17.0/api/04-Relations/rightof.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/rightof",permalink:"/docs/0.17.0/api/Relations/rightof",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.17.0/api/04-Relations/rightof.md",tags:[],version:"0.17.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"or",permalink:"/docs/0.17.0/api/Relations/or"},next:{title:"exists",permalink:"/docs/0.17.0/api/Checks/exists"}},a={},c=[];function d(e){const t={code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"rightof",children:"rightOf"}),"\n",(0,i.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:"Filters for an element right of another element."}),"\n",(0,i.jsxs)(t.p,{children:["Takes an optional parameter ",(0,i.jsx)(t.code,{children:"index"})," to select the ",(0,i.jsx)(t.code,{children:"nth"})," element (starting with 0)"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"--------------  --------------  --------------\n|  leftEl    |  |  rightEl0  |  |  rightEl1  |\n--------------  --------------  --------------\n\n// Returns rightEl0 because rightEl0 is the first element right of leftEl\n...rightEl().rightOf().leftEl()\n...rightEl().rightOf(0).leftEl()\n// Returns rightEl1 because rightEl1 is the second element right of leftEl\n...rightEl().rightOf(1).leftEl()\n// Returns no element because leftEl is left of rightEl\n...leftEl().rightOf().rightEl()\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(12368).c+"",width:"1920",height:"1080"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"@param {number} [optionalIndex=0] - element index"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},12368:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/rightOf-042e5b9b516690b86368e0057995934b.gif"},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>o});var i=n(11504);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);