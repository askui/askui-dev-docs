"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39424],{8020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(17624),s=r(4552);const i={sidebar_position:3,title:"Getting Started"},o="Getting Started",l={id:"general/Integrations/reporting",title:"Getting Started",description:"We provide a package @askui/askui-reporters with reporters ready-to-use into your AskUI runs. Check out the repository for more details.",source:"@site/versioned_docs/version-0.17.0/general/05-Integrations/reporting.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/reporting",permalink:"/docs/0.17.0/general/Integrations/reporting",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/versioned_docs/version-0.17.0/general/05-Integrations/reporting.md",tags:[],version:"0.17.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Getting Started"},sidebar:"docsSidebar",previous:{title:"Like on Spotify Desktop App",permalink:"/docs/0.17.0/general/Tutorials/spotify-tutorial"},next:{title:"Allure",permalink:"/docs/0.17.0/general/Integrations/allure-reporting"}},a={},d=[{value:"Installation",id:"installation",level:2},{value:"Available Reporters",id:"available-reporters",level:2},{value:"Enable Multiple Reporters",id:"enable-multiple-reporters",level:2},{value:"Implement Your Own Reporter",id:"implement-your-own-reporter",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,n.jsxs)(t.p,{children:["We provide a package ",(0,n.jsx)(t.code,{children:"@askui/askui-reporters"})," with reporters ready-to-use into your AskUI runs. ",(0,n.jsx)(t.a,{href:"https://github.com/askui/askui-reporters",children:"Check out the repository"})," for more details."]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(t.p,{children:["Install ",(0,n.jsx)(t.code,{children:"@askui/askui-reporters"})," as a dev-dependency:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev @askui/askui-reporters\n"})}),"\n",(0,n.jsx)(t.h2,{id:"available-reporters",children:"Available Reporters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/0.17.0/general/Integrations/allure-reporting",children:"AskUIAllureStepReporter"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/0.17.0/general/Integrations/html-reporting",children:"AskUIJestHtmlStepReporter"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/0.17.0/general/Integrations/annotation-reporting",children:"AskUIAnnotationStepReporter"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/0.17.0/general/Integrations/xray-reporting",children:"AskUIXRayStepReporter"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"enable-multiple-reporters",children:"Enable Multiple Reporters"}),"\n",(0,n.jsxs)(t.p,{children:["You can enable multiple reporters simultaneously by passing an array of reporters in the ",(0,n.jsx)(t.code,{children:"reporter"})," property like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"aui = await UiControlClient.build({\n    reporter: [\n        new AskUIAnnotationStepReporter(\n          AnnotationLevel.ALL,\n          \"annotation_report\",\n          \"_annotation\"\n        ),\n        new AskUIJestHtmlStepReporter({\n          withScreenshots: 'always' as const, // See below for possible values\n          withDetectedElements: 'always' as const, // See below for possible values\n        })\n      ],\n  });\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"testEnvironment"})," setting has to be the ",(0,n.jsx)(t.strong,{children:"SAME"})," for all reporters in the array! The following table shows which reporters can be enabled together."]})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"AskUIAllureStepReporter"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"AskUIJestHtmlStepReporter"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"AskUIAnnotationStepReporter"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"AskUIXRayStepReporter"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AskUIAllureStepReporter"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AskUIJestHtmlStepReporter"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AskUIAnnotationStepReporter"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AskUIXRayStepReporter"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"implement-your-own-reporter",children:"Implement Your Own Reporter"}),"\n",(0,n.jsxs)(t.p,{children:["To write your own reporter you have to implement AskUI's ",(0,n.jsx)(t.code,{children:"Reporter"})," interface. It offers three optional methods you can overwrite to adapt to your specific reporter framework:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export interface Reporter {\n    config?: ReporterConfig;\n    onStepBegin?(step: Step): Promise<void>;\n    onStepRetry?(step: Step): Promise<void>;\n    onStepEnd?(step: Step): Promise<void>;\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["See the ",(0,n.jsx)(t.a,{href:"https://github.com/askui/askui-reporters/blob/main/src/allure/askui-allure-step-reporter.ts",children:"Example implementation for Allure"})," on how that is used to extract the screenshot before/after each step and how to record a video of each step."]})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,t,r)=>{r.d(t,{I:()=>l,M:()=>o});var n=r(11504);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);