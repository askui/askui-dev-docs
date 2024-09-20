"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64536],{81667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(17624),o=t(4552);const i={displayed_sidebar:"apiSidebar"},r="get",c={id:"api/Getters/get",title:"get",description:"production",source:"@site/versioned_docs/version-0.20.6/api/06-Getters/get.md",sourceDirName:"api/06-Getters",slug:"/api/Getters/get",permalink:"/docs/0.20.6/api/Getters/get",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/versioned_docs/version-0.20.6/api/06-Getters/get.md",tags:[],version:"0.20.6",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"notExists",permalink:"/docs/0.20.6/api/Checks/notexists"},next:{title:"getAll",permalink:"/docs/0.20.6/api/Getters/getall"}},l={},a=[];function d(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"get",children:"get"})}),"\n",(0,s.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Returns an array with all filtered elements.\nA detected element has the following properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," of the element"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"text"})," content of element"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bndbox"}),": location of element described with coordinates of a bounding box"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// ************************************ //\n// Log the DetectedElements completely  //\n// ************************************ //\nconst text = await aui.get().text('Sign').exec();\nconsole.log(text);\n\n// Console output\n[\n  DetectedElement {\n    name: 'TEXT',\n    text: 'Sign In',\n    bndbox: BoundingBox {\n      xmin: 1128.2720982142857,\n      ymin: 160.21332310267857,\n      xmax: 1178.8204241071428,\n      ymax: 180.83512834821428\n    }\n  }\n]\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// *************************************************** //\n// Examples on how to work with the returned elements  //\n// *************************************************** //\nconst texts = await aui.get().text().below().textfield().exec();\n\n// We can get a lot of elements this way\nconsole.log(texts);\n\n// Console output\n[\n  DetectedElement {\n    name: 'TEXT',\n    text: 'Sign In',\n    bndbox: BoundingBox {\n      xmin: 1128.2720982142857,\n      ymin: 160.21332310267857,\n      xmax: 1178.8204241071428,\n      ymax: 180.83512834821428\n    },\n  },\n  DetectedElement {\n    name: 'TEXT',\n    text: 'Login',\n    bndbox: BoundingBox {\n      xmin: 250.8204241071428,\n      ymin: 300.21332310267857,\n      xmax: 450.6304241071428,\n      ymax: 950.47812834821428\n    },\n    ... 10 more items\n  }\n]\n\n// Extract the FIRST element\n// Arrays start with index 0!\nconst firstTextElement = texts[0];\nconst textOfFirstElement = firstElement.text;\n\nconsole.log(textOfFirstElement);\n\n// Console output\nSign In\n\n// Log the text of the SECOND element\n// with shorter code\nconst texts = await aui.get().text().below().textfield().exec();\nconsole.log(texts[1].text)\n\n// Console output\nLogin\n"})})]})}function x(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>r});var s=t(11504);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);