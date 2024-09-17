"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27264],{24660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var i=n(17624),o=n(4552);const c={displayed_sidebar:"apiSidebar"},a="clickButton",r={id:"api/Convenience/clickbutton",title:"clickButton",description:"production",source:"@site/docs/api/08-Convenience/clickbutton.md",sourceDirName:"api/08-Convenience",slug:"/api/Convenience/clickbutton",permalink:"/docs/next/api/Convenience/clickbutton",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/08-Convenience/clickbutton.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"annotateInteractively",permalink:"/docs/next/api/Annotation/annotateInteractively"},next:{title:"clickCheckbox",permalink:"/docs/next/api/Convenience/clickcheckbox"}},s={},l=[];function p(e){const t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"clickbutton",children:"clickButton"})}),"\n",(0,i.jsx)("span",{class:"theme-doc-version-badge badge badge--secondary",children:"production"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:"Click a button with a specific label.\nOptional relation identifies the button in relation to another element."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"await aui.clickButton({})\nawait aui.clickButton({label: 'Checkout here'})\nawait aui.clickButton({relation: {type: 'leftOf', text: 'Choose a ticket'}})\nawait aui.clickButton({label: 'Click', relation: {type: 'leftOf', text: 'Choose a ticket'}})\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"@param {Object} params - Object containing properties."}),"\n",(0,i.jsx)(t.li,{children:"@property {string} [params.label] - The text label of the button. Defaults to an empty string."}),"\n",(0,i.jsx)(t.li,{children:"@property {Object} [params.relation] - Object describing the relationship between the clicked button and another element."}),"\n",(0,i.jsx)(t.li,{children:"@property {RelationsForConvenienceMethods} params.relation.type - The type of relation."}),"\n",(0,i.jsx)(t.li,{children:"@property {string} params.relation.text - The text element the relation is based on."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>a});var i=n(11504);const o={},c=i.createContext(o);function a(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);