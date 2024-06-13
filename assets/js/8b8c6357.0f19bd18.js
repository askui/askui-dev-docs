"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81976],{31264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(17624),s=n(4552);const r={displayed_sidebar:"apiSidebar"},c="text",a={id:"api/Element-Descriptions/text",title:"text",description:"production",source:"@site/versioned_docs/version-0.18.0/api/03-Element-Descriptions/text.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/text",permalink:"/docs/0.18.0/api/Element-Descriptions/text",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.18.0/api/03-Element-Descriptions/text.md",tags:[],version:"0.18.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"table",permalink:"/docs/0.18.0/api/Element-Descriptions/table"},next:{title:"textfield",permalink:"/docs/0.18.0/api/Element-Descriptions/textfield"}},o={},l=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"text",children:"text"}),"\n",(0,i.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:"Filters for an UI element 'text'."}),"\n",(0,i.jsx)(t.p,{children:"Takes an optional parameter to filter for a specific text.\nSee the examples below."}),"\n",(0,i.jsxs)(t.p,{children:["See also the filters ",(0,i.jsx)(t.code,{children:"withTextRegex()"})," and ",(0,i.jsx)(t.code,{children:"withExactText()"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"await aui.click().text().exec();\nawait aui.click().text('Username').exec();\n\n// Matching with an exact text\nawait aui.click().text().withExactText('Username').exec();\n\n// Matching with a regex\nawait aui.click().text().withTextRegex('\\b[Ss]\\w+').exec();\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"@param {string} [text] - A text to be matched."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>c});var i=n(11504);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);