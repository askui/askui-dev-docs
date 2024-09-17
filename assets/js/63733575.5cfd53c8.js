"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52056],{76580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(17624),i=t(4552);const o={displayed_sidebar:"apiSidebar"},r="getAll",a={id:"api/Getters/getall",title:"getAll",description:"production",source:"@site/versioned_docs/version-0.20.6/api/06-Getters/getall.md",sourceDirName:"api/06-Getters",slug:"/api/Getters/getall",permalink:"/docs/0.20.6/api/Getters/getall",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.20.6/api/06-Getters/getall.md",tags:[],version:"0.20.6",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"get",permalink:"/docs/0.20.6/api/Getters/get"},next:{title:"annotate",permalink:"/docs/0.20.6/api/Annotation/annotate"}},l={},d=[];function c(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"getall",children:"getAll"})}),"\n",(0,s.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Returns an array with all detected elements.\nA detected element has the following properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," of the element"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"text"})," content of element"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bndbox"}),": location of element described with coordinates of a bounding box"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const detectedElements = await aui.getAll().exec();\nconsole.log(detectedElements);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:" console output: [\n  DetectedElement {\n     name: 'TEXT',\n     text: 'Sign In',\n     bndbox: BoundingBox {\n        xmin: 1128.2720982142857,\n        ymin: 160.21332310267857,\n        xmax: 1178.8204241071428,\n        ymax: 180.83512834821428\n     },\n  }\n  DetectedElement {\n     name: 'ICON',\n     text: 'search',\n     bndbox: BoundingBox {\n        xmin: 250.8204241071428,\n        ymin: 300.21332310267857,\n        xmax: 450.6304241071428,\n        ymax: 950.47812834821428\n     },\n     ... 381 more items\n   }\n ]\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var s=t(11504);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);