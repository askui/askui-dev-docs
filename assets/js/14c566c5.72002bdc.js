"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90980],{5824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(17624),o=n(4552);const i={displayed_sidebar:"apiSidebar"},a="above",r={id:"api/Relations/above",title:"above",description:"production",source:"@site/versioned_docs/version-0.18.0/api/04-Relations/above.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/above",permalink:"/docs/api/Relations/above",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.18.0/api/04-Relations/above.md",tags:[],version:"0.18.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"withTextRegex",permalink:"/docs/api/Element-Descriptions/withtextregex"},next:{title:"and",permalink:"/docs/api/Relations/and"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"above",children:"above"}),"\n",(0,s.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"Filters for an element above another element."}),"\n",(0,s.jsxs)(t.p,{children:["Takes an optional parameter ",(0,s.jsx)(t.code,{children:"index"})," to select the ",(0,s.jsx)(t.code,{children:"nth"})," element (starting with 0)"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"--------------\n|   text1    |\n--------------\n--------------\n|   text0    |\n--------------\n--------------\n|   button   |\n--------------\n\n// Returns text0 because text0 is the first element above button\n...text().above().button()\n...text().above(0).button()\n// Returns text1 because text1 is the second element above button\n...text().above(1).button()\n// Returns no element because button is below text\n...button().above().text()\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(42624).c+"",width:"1920",height:"1080"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param {number} [optionalIndex=0] - element index"}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},42624:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/above-dc81b84a9b34574ec4f2751a6a13ea86.gif"},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>a});var s=n(11504);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);