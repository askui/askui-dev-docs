"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17924],{74372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=n(17624),i=n(4552);const o={displayed_sidebar:"apiSidebar"},r="type",c={id:"api/Actions/type",title:"type",description:"production",source:"@site/versioned_docs/version-0.20.0/api/02-Actions/type.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/type",permalink:"/docs/0.20.0/api/Actions/type",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.20.0/api/02-Actions/type.md",tags:[],version:"0.20.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"swipe",permalink:"/docs/0.20.0/api/Actions/swipe"},next:{title:"typeIn",permalink:"/docs/0.20.0/api/Actions/typein"}},d={},a=[];function p(e){const t={code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"type",children:"type"}),"\n",(0,s.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"Types a text at the current position.\nIf you need to focus the element first, use typeIn()"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," In the current version it copies the text and pastes it."]}),"\n",(0,s.jsxs)(t.p,{children:["By default, the ",(0,s.jsx)(t.code,{children:"text"})," is included in the logs and sent over to the askui Inference server to\npredict in which context the typing has to occur. You can exclude the ",(0,s.jsx)(t.code,{children:"text"})," from the logs\nand the request to the askui Inference server setting ",(0,s.jsx)(t.code,{children:"options.isSecret"})," to ",(0,s.jsx)(t.code,{children:"true"}),".\nThis should not change the quality of the prediction of the askui Inference server. In this\ncase, ",(0,s.jsx)(t.code,{children:"options.secretMask"})," is included in logs and sent over instead of the ",(0,s.jsx)(t.code,{children:"text"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await aui.type('askui@askui.com').exec()\n\n// mask the text so it is not send to the askui-inference server\nawait aui.type('Type some text', { isSecret: true, secretMask: '**' }).exec()\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(92396).c+"",width:"800",height:"442"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"@param {string} text - A text to type"}),"\n",(0,s.jsx)(t.li,{children:"@param {Object} [options]"}),"\n",(0,s.jsxs)(t.li,{children:["@param {boolean} [options.isSecret = false] - If set to ",(0,s.jsx)(t.code,{children:"true"}),", ",(0,s.jsx)(t.code,{children:"text"})," is neither included in\nlogs of askui nor sent over to askui Inference for prediction."]}),"\n",(0,s.jsxs)(t.li,{children:["@param {string} [options.secretMask = '****'] - If ",(0,s.jsx)(t.code,{children:"options.isSecret"})," is set to ",(0,s.jsx)(t.code,{children:"true"}),", this\nis included in logs and sent over to askui Inference for prediction instead of the ",(0,s.jsx)(t.code,{children:"text"}),"."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},92396:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/type-19ecf31f6d4e18c39bed7515ceea004d.gif"},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>r});var s=n(11504);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);