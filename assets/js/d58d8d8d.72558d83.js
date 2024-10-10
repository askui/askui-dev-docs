"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34324],{11016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(17624),s=n(4552);const o={sidebar_position:3,title:"HTML"},i="AskUIJestHtmlStepReporter",l={id:"general/Integrations/html-reporting",title:"HTML",description:"The AskUIJestHtmlStepReporter generates a HTML report with optional before and after screenshots. It is saved in your project's root folder in the file jest-html-reporters-attach.",source:"@site/versioned_docs/version-0.20.7/general/05-Integrations/html-reporting.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/html-reporting",permalink:"/docs/general/Integrations/html-reporting",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/versioned_docs/version-0.20.7/general/05-Integrations/html-reporting.md",tags:[],version:"0.20.7",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"HTML"},sidebar:"docsSidebar",previous:{title:"Allure",permalink:"/docs/general/Integrations/allure-reporting"},next:{title:"XRAY",permalink:"/docs/general/Integrations/xray-reporting"}},a={},c=[{value:"Install <code>ffmpeg</code> On Your System",id:"install-ffmpeg-on-your-system",level:2},{value:"Enable Reporter in <code>jest.setup.ts</code>",id:"enable-reporter-in-jestsetupts",level:2},{value:"Configure <code>beforeEach()</code> and <code>afterEach()</code> in <code>jest.setup.ts</code>",id:"configure-beforeeach-and-aftereach-in-jestsetupts",level:2},{value:"Enable the Jest-Html-Reporters in <code>jest.config.ts</code>",id:"enable-the-jest-html-reporters-in-jestconfigts",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"askuijesthtmlstepreporter",children:"AskUIJestHtmlStepReporter"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"AskUIJestHtmlStepReporter"})," generates a HTML report with optional before and after screenshots. It is saved in your project's root folder in the file ",(0,r.jsx)(t.code,{children:"jest-html-reporters-attach"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(87204).c+"",width:"3248",height:"2020"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Please read the ",(0,r.jsx)(t.a,{href:"/docs/general/Integrations/reporting",children:"Getting started with reporting first"}),"."]})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Due to restrictions of ",(0,r.jsx)(t.code,{children:"jest-html-reporters"})," you can either have screenshots or video with this reporter but not both at the same time. For screenshots omit the ",(0,r.jsx)(t.code,{children:"beforeEach()"})," and ",(0,r.jsx)(t.code,{children:"afterEach()"})," hooks in ",(0,r.jsx)(t.code,{children:"jest.setup.ts"}),". For video do not configure a ",(0,r.jsx)(t.code,{children:"reporter"})," in your ",(0,r.jsx)(t.code,{children:"UiControlClient"}),"."]})}),"\n",(0,r.jsxs)(t.h2,{id:"install-ffmpeg-on-your-system",children:["Install ",(0,r.jsx)(t.code,{children:"ffmpeg"})," On Your System"]}),"\n",(0,r.jsxs)(t.p,{children:["To use this reporter you have to have ",(0,r.jsx)(t.a,{href:"http://www.ffmpeg.org/",children:"ffmpeg"})," installed on your system (including all necessary encoding libraries like ",(0,r.jsx)(t.code,{children:"libmp3lame"})," or ",(0,r.jsx)(t.code,{children:"libx264"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["Please follow the ",(0,r.jsx)(t.a,{href:"http://www.ffmpeg.org/download.html",children:"installation instructions"})," for your system."]}),"\n",(0,r.jsxs)(t.h2,{id:"enable-reporter-in-jestsetupts",children:["Enable Reporter in ",(0,r.jsx)(t.code,{children:"jest.setup.ts"})]}),"\n",(0,r.jsxs)(t.p,{children:["Add the reporter to the ",(0,r.jsx)(t.code,{children:"UiControlClient"})," in ",(0,r.jsx)(t.code,{children:"jest.setup.ts"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"// Do not forget this import at the start of the file!\nimport { AskUIJestHtmlStepReporter } from \"@askui/askui-reporters\";\n...\n  aui = await UiControlClient.build({\n    reporter: new AskUIJestHtmlStepReporter({\n      withScreenshots: 'always' as const, // See below for possible values\n      withDetectedElements: 'always' as const, // See below for possible values\n    })\n  });\n...\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can pass a ",(0,r.jsx)(t.code,{children:"ReporterConfig"})," object to the reporter to configure the level of detail for screenshots and detected elements:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"onFailure (Default for both)"}),"\n",(0,r.jsx)(t.li,{children:"required"}),"\n",(0,r.jsx)(t.li,{children:"begin"}),"\n",(0,r.jsx)(t.li,{children:"always"}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"configure-beforeeach-and-aftereach-in-jestsetupts",children:["Configure ",(0,r.jsx)(t.code,{children:"beforeEach()"})," and ",(0,r.jsx)(t.code,{children:"afterEach()"})," in ",(0,r.jsx)(t.code,{children:"jest.setup.ts"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import path from "path";\nimport { AskUIJestHtmlStepReporter } from "@askui/askui-reporters";\n\nbeforeEach(async () => {\n  await aui.startVideoRecording();\n});\n\nafterEach(async () => {\n  await aui.stopVideoRecording();\n  const video = await aui.readVideoRecording();\n  await AskUIJestHtmlStepReporter.attachVideo(video);\n});\n'})}),"\n",(0,r.jsxs)(t.h2,{id:"enable-the-jest-html-reporters-in-jestconfigts",children:["Enable the Jest-Html-Reporters in ",(0,r.jsx)(t.code,{children:"jest.config.ts"})]}),"\n",(0,r.jsxs)(t.p,{children:["Install ",(0,r.jsx)(t.code,{children:"jest-html-reporters"})," environment:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev jest-html-reporters\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import type { Config } from "@jest/types";\n\nconst config: Config.InitialOptions = {\n  preset: "ts-jest",\n  testEnvironment: "node",\n  setupFilesAfterEnv: ["./helper/jest.setup.ts"],\n  sandboxInjectedGlobals: ["Math"],\n  reporters: ["default", "jest-html-reporters"],\n};\n\n// eslint-disable-next-line import/no-default-export\nexport default config;\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},87204:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/html-reporting-example-35c634d635f95b37b8185561e75c8b9c.png"},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>i});var r=n(11504);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);