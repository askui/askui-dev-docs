"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47178],{2552:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=r(17624),s=r(4552);const i={sidebar_position:3,title:"Allure"},l="AskUIAllureStepReporter",a={id:"general/Integrations/allure-reporting",title:"Allure",description:"Please read the Getting started with reporting first.",source:"@site/docs/general/05-Integrations/allure-reporting.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/allure-reporting",permalink:"/docs/next/general/Integrations/allure-reporting",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/docs/general/05-Integrations/allure-reporting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Allure"},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/docs/next/general/Integrations/reporting"},next:{title:"HTML",permalink:"/docs/next/general/Integrations/html-reporting"}},o={},d=[{value:"Add the reporter to the <code>UiControlClient</code> in <code>helpers/askui-helper.ts</code>:",id:"add-the-reporter-to-the-uicontrolclient-in-helpersaskui-helperts",level:2},{value:"Configure <code>beforeEach()</code> and <code>afterEach()</code> in <code>helpers/askui-helper.ts</code>",id:"configure-beforeeach-and-aftereach-in-helpersaskui-helperts",level:2},{value:"Enable the Test Environment <code>@askui/jest-allure-circus</code> in <code>jest.config.ts</code>",id:"enable-the-test-environment-askuijest-allure-circus-in-jestconfigts",level:2},{value:"Display Report in a Browser",id:"display-report-in-a-browser",level:2},{value:"Step 1: Install Java",id:"step-1-install-java",level:3},{value:"Step 2: Install <code>allure-commandline</code>",id:"step-2-install-allure-commandline",level:3},{value:"Step 3: Generate HTML and Serve Report",id:"step-3-generate-html-and-serve-report",level:3},{value:"Step 4: Run the Scripts",id:"step-4-run-the-scripts",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"askuiallurestepreporter",children:"AskUIAllureStepReporter"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Please read the ",(0,t.jsx)(n.a,{href:"/docs/next/general/Integrations/reporting",children:"Getting started with reporting first"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["If you used the AskUI Installer or followed the ",(0,t.jsx)(n.em,{children:"Getting Started"})," for Linux or macOS and did not change anything in ",(0,t.jsx)(n.code,{children:"helpers/askui-helper.ts"})," you can skip the configuration and directly go to ",(0,t.jsx)(n.a,{href:"#display-report-in-a-browser",children:"Display Report"}),"."]})}),"\n",(0,t.jsxs)(n.h2,{id:"add-the-reporter-to-the-uicontrolclient-in-helpersaskui-helperts",children:["Add the reporter to the ",(0,t.jsx)(n.code,{children:"UiControlClient"})," in ",(0,t.jsx)(n.code,{children:"helpers/askui-helper.ts"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { AskUIAllureStepReporter } from \"@askui/askui-reporters\";\n...\n  const reporterConfig: ReporterConfig = {\n    withScreenshots: 'always', // See below for possible values\n    withDetectedElements: 'always', // See below for possible values\n  }\n\n  aui = await UiControlClient.build({\n    reporter: new AskUIAllureStepReporter(\n      reporterConfig\n    )\n  });\n...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can pass a ",(0,t.jsx)(n.code,{children:"ReporterConfig"})," object to the reporter to configure the level of detail for screenshots and detected elements."]}),"\n",(0,t.jsxs)(n.p,{children:["There are four possible values (See ",(0,t.jsx)(n.a,{href:"https://github.com/askui/askui-reporters/tree/main#allure-reporter",children:"the @askui/askui-reporters README for a detailed explanation"}),"):"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"onFailure (Default for both)"}),"\n",(0,t.jsx)(n.li,{children:"required"}),"\n",(0,t.jsx)(n.li,{children:"begin"}),"\n",(0,t.jsx)(n.li,{children:"always"}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"configure-beforeeach-and-aftereach-in-helpersaskui-helperts",children:["Configure ",(0,t.jsx)(n.code,{children:"beforeEach()"})," and ",(0,t.jsx)(n.code,{children:"afterEach()"})," in ",(0,t.jsx)(n.code,{children:"helpers/askui-helper.ts"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"UiControlClient"})," retrieves the videos and images from your ",(0,t.jsx)(n.code,{children:"AskUI Controller"}),". You have to implement ",(0,t.jsx)(n.code,{children:"beforeEach()"})," and ",(0,t.jsx)(n.code,{children:"afterEach()"})," in ",(0,t.jsx)(n.code,{children:"helpers/askui-helper.ts"})," to start the recording and then add it to your report:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Allure Reporter"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"beforeEach(async () => {\n  await aui.startVideoRecording();\n});\n\nafterEach(async () => {\n  await aui.stopVideoRecording();\n  const video = await aui.readVideoRecording();\n  await AskUIAllureStepReporter.attachVideo(video);\n});\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"enable-the-test-environment-askuijest-allure-circus-in-jestconfigts",children:["Enable the Test Environment ",(0,t.jsx)(n.code,{children:"@askui/jest-allure-circus"})," in ",(0,t.jsx)(n.code,{children:"jest.config.ts"})]}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.code,{children:"@askui/jest-allure-circus"})," environment:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @askui/jest-allure-circus\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import type { Config } from '@jest/types';\n\nconst config: Config.InitialOptions = {\n  preset: 'ts-jest',\n  setupFilesAfterEnv: ['./helper/askui-helper.ts'],\n  sandboxInjectedGlobals: [\n    'Math',\n  ],\n  // highlight-start\n  // Enables the test environment for Allure\n  testEnvironment: '@askui/jest-allure-circus',\n  // highlight-end\n};\n\n// eslint-disable-next-line import/no-default-export\nexport default config;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"display-report-in-a-browser",children:"Display Report in a Browser"}),"\n",(0,t.jsx)(n.h3,{id:"step-1-install-java",children:"Step 1: Install Java"}),"\n",(0,t.jsxs)(n.p,{children:["We recommend ",(0,t.jsx)(n.em,{children:"SDKMAN!"})," for managing Java. Please follow the ",(0,t.jsx)(n.a,{href:"https://sdkman.io/install",children:"Installation guide on their homepage"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Then run the following command to use the latest Java JDK:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sdk install java 21.0.2-amzn\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Answer the question ",(0,t.jsx)(n.code,{children:"Do you want java 21.0.2-amzn to be set as default? (Y/n)"})," with ",(0,t.jsx)(n.code,{children:"Y"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"step-2-install-allure-commandline",children:["Step 2: Install ",(0,t.jsx)(n.code,{children:"allure-commandline"})]}),"\n",(0,t.jsxs)(n.p,{children:["The next thing you install is a ",(0,t.jsx)(n.code,{children:"npm"}),"-package so you can run ",(0,t.jsx)(n.em,{children:"Allure"})," inside ",(0,t.jsx)(n.code,{children:"npm"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm install allure-commandline --save-dev\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-generate-html-and-serve-report",children:"Step 3: Generate HTML and Serve Report"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following scripts to your ",(0,t.jsx)(n.code,{children:"package.json"}),"s ",(0,t.jsx)(n.code,{children:"script"})," section."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'...\n  "scripts": {\n    ...\n    "allure-generate": "allure generate",\n    "allure-serve": "allure serve"\n  },\n...\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-4-run-the-scripts",children:"Step 4: Run the Scripts"}),"\n",(0,t.jsx)(n.p,{children:"First create the HTML-Report by running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm run allure-generate\n"})}),"\n",(0,t.jsx)(n.p,{children:"And after that serve the HTML-Report by running the following command, which will also open the report in the browser automatically:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm run allure-serve\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>a,M:()=>l});var t=r(11504);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);