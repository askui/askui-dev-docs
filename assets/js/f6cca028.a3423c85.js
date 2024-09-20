"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31528],{37900:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(17624),o=t(4552);const i={displayed_sidebar:"apiSidebar"},a="and",c={id:"api/Relations/and",title:"and",description:"production",source:"@site/docs/api/04-Relations/and.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/and",permalink:"/docs/next/api/Relations/and",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/docs/api/04-Relations/and.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"above",permalink:"/docs/next/api/Relations/above"},next:{title:"below",permalink:"/docs/next/api/Relations/below"}},r={},d=[];function l(n){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"and",children:"and"})}),"\n",(0,s.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(e.p,{children:"Logic and operator"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"example scene: \n ---------------   ----------------\n |  icon user  |   |  icon search |\n ---------------   ----------------\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"const icons = await aui.get().icon().exec();\nconsole.log(icons);\n"})}),"\n",(0,s.jsx)(e.p,{children:"Using only the element-description icon, the get will return both icons"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"console output: [\n  DetectedElement {\n     name: 'ICON',\n     text: 'user',\n     bndbox: BoundingBox {\n        xmin: 1000,\n        ymin: 1010,\n        xmax: 1020,\n        ymax: 1030\n     }\n  },\n  DetectedElement {\n     name: 'ICON',\n     text: 'search',\n     bndbox: BoundingBox {\n        xmin: 900,\n        ymin: 910,\n        xmax: 920,\n        ymax: 930\n     }\n  }\n ]\n"})}),"\n",(0,s.jsxs)(e.p,{children:["You can combine element-descriptions with ",(0,s.jsxs)(e.strong,{children:["the ",(0,s.jsx)(e.code,{children:"and()"})," relation"]})," and specify exactly which icon you want."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"const icons = await aui.get().icon().and().withText('user').exec()\nconsole.log(icons)\n"})}),"\n",(0,s.jsx)(e.p,{children:"The get returns only the user icon although both elements are icons."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:" console output: [\n  DetectedElement {\n     name: 'ICON',\n     text: 'user',\n     bndbox: BoundingBox {\n        xmin: 900,\n        ymin: 910,\n        xmax: 920,\n        ymax: 930\n     }\n  }\n ]\n"})})]})}function x(n={}){const{wrapper:e}={...(0,o.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},4552:(n,e,t)=>{t.d(e,{I:()=>c,M:()=>a});var s=t(11504);const o={},i=s.createContext(o);function a(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);