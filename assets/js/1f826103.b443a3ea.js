"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80964],{29500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(17624),r=n(4552);const s={sidebar_position:5},i="Extracting Data from Elements",o={id:"general/Element Selection/scraping-and-storing-lements",title:"Extracting Data from Elements",description:"In this guide you will learn how to extract elements and their values out of your User Interface.",source:"@site/docs/general/03-Element Selection/scraping-and-storing-lements.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/scraping-and-storing-lements",permalink:"/docs/next/general/Element Selection/scraping-and-storing-lements",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5}},c={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Extract the Value",id:"extract-the-value",level:2},{value:"Use Extracted Value as Input",id:"use-extracted-value-as-input",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"extracting-data-from-elements",children:"Extracting Data from Elements"})}),"\n",(0,a.jsx)(t.p,{children:"In this guide you will learn how to extract elements and their values out of your User Interface."}),"\n",(0,a.jsx)(t.p,{children:"We will also cover on how to use the extracted information in your code, so you can introduce real interactivity into your workflow."}),"\n",(0,a.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"/docs/next/api/Getters/get",children:"get()"}),"-Instruction returns an array of all the elements it found. It looks like this example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:" console output: [\n  DetectedElement {\n     name: 'TEXT',\n     text: 'Sign In',\n     bndbox: BoundingBox {\n        xmin: 1128.2720982142857,\n        ymin: 160.21332310267857,\n        xmax: 1178.8204241071428,\n        ymax: 180.83512834821428\n     }\n   },\n   ...\n ]\n"})}),"\n",(0,a.jsx)(t.p,{children:"Usually you do not want every element from your UI returned. So you pair it with an element-selector:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"const textFieldText = \n  await aui\n    .get()\n    .text()\n    .in()\n    .textfield()\n    .exec();\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"[\n  DetectedElement {\n    name: 'text',\n    text: 'Search',\n    bndbox: BoundingBox { xmin: 488, ymin: 138, xmax: 548, ymax: 164 },\n    colors: [ '', '', '' ]\n  }\n]\n"})}),"\n",(0,a.jsx)(t.h2,{id:"extract-the-value",children:"Extract the Value"}),"\n",(0,a.jsxs)(t.p,{children:["You can extract the value by reading the ",(0,a.jsx)(t.code,{children:"text"}),"-property of the ",(0,a.jsx)(t.code,{children:"DetectedElement"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["Notice: ",(0,a.jsx)(t.code,{children:"textFieldText"})," is an array. You have to iterate over it or use an index to access the ",(0,a.jsx)(t.code,{children:"DetectedElement"}),"."]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"// Access by index\n// textFieldTextValue gets the value 'Search'\nconst textFieldTextValue = textFieldText?.[0]?.text;\n"})}),"\n",(0,a.jsx)(t.h2,{id:"use-extracted-value-as-input",children:"Use Extracted Value as Input"}),"\n",(0,a.jsx)(t.p,{children:"You can use the extracted value as input for another textfield for example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'await aui\n  .typeIn(textFieldTextValue)\n  .textfield()\n  .contains()\n  .text()\n  .withText("AskUI")\n  .exec();\n'})})]})}function x(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>i});var a=n(11504);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);