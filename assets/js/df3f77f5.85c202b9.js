"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69304],{37324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(17624),r=t(4552);const i={sidebar_position:3,title:"Annotation"},s="AskUIAnnotationStepReporter",a={id:"general/Integrations/annotation-reporting",title:"Annotation",description:"Please read the Getting started with reporting first.",source:"@site/versioned_docs/version-0.18.0/general/05-Integrations/annotation-reporting.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/annotation-reporting",permalink:"/docs/0.18.0/general/Integrations/annotation-reporting",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.18.0/general/05-Integrations/annotation-reporting.md",tags:[],version:"0.18.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Annotation"},sidebar:"docsSidebar",previous:{title:"XRAY",permalink:"/docs/0.18.0/general/Integrations/xray-reporting"},next:{title:"Visual Regression with AskUI",permalink:"/docs/0.18.0/general/Integrations/visual-regression"}},l={},d=[{value:"Enable and Configure the AskUIAnnotationStepReporter in <code>jest.setup.ts</code>",id:"enable-and-configure-the-askuiannotationstepreporter-in-jestsetupts",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"askuiannotationstepreporter",children:"AskUIAnnotationStepReporter"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Please read the ",(0,o.jsx)(n.a,{href:"/docs/0.18.0/general/Integrations/reporting",children:"Getting started with reporting first"}),"."]})}),"\n",(0,o.jsxs)(n.h2,{id:"enable-and-configure-the-askuiannotationstepreporter-in-jestsetupts",children:["Enable and Configure the AskUIAnnotationStepReporter in ",(0,o.jsx)(n.code,{children:"jest.setup.ts"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:'import { AskUIAnnotationStepReporter, AnnotationLevel } from \'@askui/askui-reporters\';\n...\n  aui = await UiControlClient.build({\n    ...\n    reporter: new AskUIAnnotationStepReporter(\n        // AnnotationLevel.ON_FAILURE, /* Uncomment and change to AnnotationLevel.ALL for reporting at every step */\n        // folderPath: "report", /* Uncomment and change property for different folder */\n        // fileNameSuffix: "_testStep_annotation" /* Uncomment and change property for different file name suffix */\n      ),\n  });\n...\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"AnnotationLevel"})," is implemented as an enumeration. You have two options:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ON_FAILURE"})," (Default Value): After a step failed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ALL"}),": After every step"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"folderPath"})," is the folder name, relative to the root of your project, the report-files will be saved to."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Default value: ",(0,o.jsx)(n.code,{children:"report"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"fileNameSuffix"}),": The suffix for every report-file."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The generated report-filename has the following name convention:\n** ",(0,o.jsx)(n.code,{children:"{YYYYYYMMDDTHHmmsssss}_{passed|failed}{fileNameSuffix}.html"}),"\n** Example: 20230922072153421_failed_testStep_annotation.html"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>s});var o=t(11504);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);