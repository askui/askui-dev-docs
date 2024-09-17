"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2936],{76324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(17624),a=t(4552);const s={displayed_sidebar:"apiSidebar"},c="matching",r={id:"api/Element-Descriptions/matching",title:"matching",description:"experimental",source:"@site/versioned_docs/version-0.18.0/api/03-Element-Descriptions/matching.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/matching",permalink:"/docs/0.18.0/api/Element-Descriptions/matching",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.18.0/api/03-Element-Descriptions/matching.md",tags:[],version:"0.18.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"image",permalink:"/docs/0.18.0/api/Element-Descriptions/image"},next:{title:"otherElement",permalink:"/docs/0.18.0/api/Element-Descriptions/otherelement"}},o={},l=[{value:"What Should I Write as Matching Text",id:"what-should-i-write-as-matching-text",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"matching",children:"matching"})}),"\n",(0,i.jsx)("span",{class:"theme-doc-version-badge badge badge--secondary",children:"experimental"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"Filters elements based on a textual description."}),"\n",(0,i.jsx)(n.h2,{id:"what-should-i-write-as-matching-text",children:"What Should I Write as Matching Text"}),"\n",(0,i.jsxs)(n.p,{children:["The text description inside the ",(0,i.jsx)(n.code,{children:"matching()"})," should describe the element visually.\nIt understands color, some famous company/product names, general descriptions."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Important: ",(0,i.jsxs)(n.em,{children:["Matching only returns the best matching element when you use it with ",(0,i.jsx)(n.code,{children:"get()"})]})]})}),"\n",(0,i.jsxs)(n.p,{children:["A bit of playing around to find a matching description is sometimes needed:\nE.g., ",(0,i.jsx)(n.code,{children:"puzzle piece"})," can fail while ",(0,i.jsx)(n.code,{children:"an icon showing a puzzle piece"})," might work.\nGenerally, the more detail the better."]}),"\n",(0,i.jsxs)(n.p,{children:["We also recommend to not restrict the type of element by using the general\nselector ",(0,i.jsx)(n.code,{children:"element()"})," as shown in the examples below."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Select the black sneaker from a bunch of sneakers\nawait aui.click().element().matching('a black sneaker shoe').exec();\n\n// Select an image that has text in it\nawait aui.click().element().matching('has Burger King in it').exec();\nawait aui.click().element().matching('has adidas in it').exec();\n\n// Target a logo/image by describing it\nawait aui.click().element().matching('a mask on purple background and a firefox logo').exec();\nawait aui.click().element().matching('logo looking like an apple with one bite bitten off').exec();\nawait aui.click().element().matching('logo looking like a seashell').exec();\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"@param {string} text - A description of the target element."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>c});var i=t(11504);const a={},s=i.createContext(a);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);