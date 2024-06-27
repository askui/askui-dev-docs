"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46532],{76464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(17624),c=n(4552);const r={displayed_sidebar:"apiSidebar"},a="clickText",s={id:"api/Convenience/clicktext",title:"clickText",description:"production",source:"@site/versioned_docs/version-0.20.0/api/08-Convenience/clicktext.md",sourceDirName:"api/08-Convenience",slug:"/api/Convenience/clicktext",permalink:"/docs/0.20.0/api/Convenience/clicktext",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.20.0/api/08-Convenience/clicktext.md",tags:[],version:"0.20.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"clickSwitch",permalink:"/docs/0.20.0/api/Convenience/clickswitch"},next:{title:"clickTextfield",permalink:"/docs/0.20.0/api/Convenience/clicktextfield"}},o={},l=[];function p(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"clicktext",children:"clickText"}),"\n",(0,i.jsx)("span",{class:"theme-doc-version-badge badge badge--secondary",children:"production"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:"Click on a specific text.\nYou can also use a RegEx or match the text exactly by specifying the specific flag.\nUse a relation to find the text in relation to a specific text."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"// Click text that matches exactly\nawait aui.clickText({text: 'askui', matching: 'similar'})\n\n// Click text that contains 'pie' or 'cake' or 'Pie' or 'Cake'\nawait aui.clickText({text: '.*([Pp]ie|[Cc]ake).*', matching: 'regex'})\n\n// Click the text 'TERMINAL' that is left of the text 'Ports'\nawait aui.clickText({\n      text: 'TERMINAL',\n      matching: 'exact',\n      relation: { type: 'leftOf', text: 'PORTS' }\n   })\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["@param {Object} params - Object containing required ",(0,i.jsx)(t.code,{children:"text"})," property and optional properties for regular expression matching and relation."]}),"\n",(0,i.jsx)(t.li,{children:"@property {string} params.text - The text to be clicked."}),"\n",(0,i.jsx)(t.li,{children:"@property {string} params.matching - Whether the text is matched using similarity, exact match or a regular expression."}),"\n",(0,i.jsx)(t.li,{children:"@property {Object} params.relation - Object describing the relationship between the clicked text and another element."}),"\n",(0,i.jsx)(t.li,{children:"@property {RelationsForConvenienceMethods} params.relation.type - The type of relation."}),"\n",(0,i.jsx)(t.li,{children:"@property {string} params.relation.text - The label or text associated with the related element or state."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,c.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>a});var i=n(11504);const c={},r=i.createContext(c);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);