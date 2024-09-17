"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34688],{83812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=n(17624),i=n(4552);const l={displayed_sidebar:"apiSidebar"},r="leftOf",o={id:"api/Relations/leftof",title:"leftOf",description:"production",source:"@site/versioned_docs/version-0.17.0/api/04-Relations/leftof.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/leftof",permalink:"/docs/0.17.0/api/Relations/leftof",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.17.0/api/04-Relations/leftof.md",tags:[],version:"0.17.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"in",permalink:"/docs/0.17.0/api/Relations/in"},next:{title:"nearestTo",permalink:"/docs/0.17.0/api/Relations/nearestto"}},a={},c=[];function d(e){const t={code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"leftof",children:"leftOf"})}),"\n",(0,s.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"Filters for an element left of another element."}),"\n",(0,s.jsxs)(t.p,{children:["Takes an optional parameter ",(0,s.jsx)(t.code,{children:"index"})," to select the ",(0,s.jsx)(t.code,{children:"nth"})," element (starting with 0)"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"--------------  --------------  --------------\n|  leftEl1   |  |  leftEl0   |  |  rightEl   |\n--------------  --------------  --------------\n\n// Returns leftEl0 because leftEl0 is the first element left of rightEl\n...leftEl().leftOf().rightEl()\n...leftEl().leftOf(0).rightEl()\n// Returns leftEl1 because leftEl1 is the second element left of rightEl\n...leftEl().leftOf(1).rightEl()\n// Returns no element because rightEl is left of leftEl\n...rightEl().leftOf().leftEl()\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(76384).c+"",width:"1920",height:"1080"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param {number} [optionalIndex=0] - element index"}),"\n"]})]})}function f(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},76384:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/leftOf-d2505e3702e9d77123f23dab54271821.gif"},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>r});var s=n(11504);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);