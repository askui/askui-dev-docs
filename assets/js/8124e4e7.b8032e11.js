"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[444],{6780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(17624),o=n(4552);const s={sidebar_position:3,title:"XRAY"},i="AskUIXRayStepReporter",a={id:"general/Integrations/xray-reporting",title:"XRAY",description:"Please read the Getting started with reporting first.",source:"@site/versioned_docs/version-0.20.7/general/05-Integrations/xray-reporting.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/xray-reporting",permalink:"/docs/general/Integrations/xray-reporting",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/versioned_docs/version-0.20.7/general/05-Integrations/xray-reporting.md",tags:[],version:"0.20.7",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"XRAY"},sidebar:"docsSidebar",previous:{title:"HTML",permalink:"/docs/general/Integrations/html-reporting"},next:{title:"Annotation",permalink:"/docs/general/Integrations/annotation-reporting"}},l={},c=[{value:"Enable and Configure the AskUIXRayStepReporter in <code>askui-helper.ts</code> (former <code>jest.setup.ts</code>)",id:"enable-and-configure-the-askuixraystepreporter-in-askui-helperts-former-jestsetupts",level:2},{value:"Configure <code>jest-xray-environment</code> in <code>jest.config.ts</code>",id:"configure-jest-xray-environment-in-jestconfigts",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"askuixraystepreporter",children:"AskUIXRayStepReporter"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Please read the ",(0,r.jsx)(t.a,{href:"/docs/general/Integrations/reporting",children:"Getting started with reporting first"}),"."]})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"Due to restrictions this reporter only works when you run your workflows one after another (default for AskUI)!"})}),"\n",(0,r.jsxs)(t.h2,{id:"enable-and-configure-the-askuixraystepreporter-in-askui-helperts-former-jestsetupts",children:["Enable and Configure the AskUIXRayStepReporter in ",(0,r.jsx)(t.code,{children:"askui-helper.ts"})," (former ",(0,r.jsx)(t.code,{children:"jest.setup.ts"}),")"]}),"\n",(0,r.jsxs)(t.p,{children:["You have to do a few things in your ",(0,r.jsx)(t.code,{children:"askui-helper.ts"})," (former ",(0,r.jsx)(t.code,{children:"jest.setup.ts"}),") to enable the ",(0,r.jsx)(t.code,{children:"AskUIXRayStepReporter"}),":"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["We will try to move this into the custom ",(0,r.jsx)(t.code,{children:"testEnvironment"})," we provide."]})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Import the reporter"}),"\n",(0,r.jsx)(t.li,{children:"Initialize the reporter"}),"\n",(0,r.jsxs)(t.li,{children:["Add it to the ",(0,r.jsx)(t.code,{children:"UiControlClient"})]}),"\n",(0,r.jsxs)(t.li,{children:["Modify before ",(0,r.jsx)(t.code,{children:"beforeEach()"})," and ",(0,r.jsx)(t.code,{children:"afterEach()"})," hook to create/finish ",(0,r.jsx)(t.code,{children:"TestEntries"})]}),"\n",(0,r.jsxs)(t.li,{children:["Add writing the report to ",(0,r.jsx)(t.code,{children:"afterAll()"})," hook"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import { UiControlClient, UiController } from 'askui';\n\n/* 1 Import the reporter */\nimport { AskUIXRayStepReporter } from '@askui/askui-reporters';\n\n...\n\n/* 2 Initialize the reporter */\nlet xRayReporter = new AskUIXRayStepReporter({\n      withScreenshots: 'always',\n    },\n    // outputDirectory (default: 'xray-report')\n    'xray-report',\n    // resetReportDirectory -> deletes the outputDirectory\n    //                         before execution if set to true (default: false)\n    false,\n    // appendToReport -> appends the results to the file 'report.json'\n    //                   if set to true. Otherwise it creates files\n    //                   report_<timestamp>.json (default: false)\n    false) \n  );\n\nbeforeAll(async () => {\n  ...\n  aui = await UiControlClient.build({\n    credentials: {\n      workspaceId: '<your workspace id>',\n      token: '<your access token>',\n    },\n    /* 3 Enable reporter */\n    reporter: xRayReporter,\n  });\n\n  await aui.connect();\n});\n\n/* 4 Create TestEntry with name of test from it-block */\nbeforeEach(async () => {\n  xRayReporter.createNewTestEntry(global.testName);\n});\n\n/* 4 Finish TestEntry with the test status */\nafterEach(async () => {\n  xRayReporter.finishTestEntry(global.testName, global.testStatus);\n});\n\nafterAll(async () => {\n  /* 5 Writing the report */\n  await xRayReporter.writeReport();\n  aui.disconnect();\n  await uiController.stop();\n});\n\nexport { aui };\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"configure-jest-xray-environment-in-jestconfigts",children:["Configure ",(0,r.jsx)(t.code,{children:"jest-xray-environment"})," in ",(0,r.jsx)(t.code,{children:"jest.config.ts"})]}),"\n",(0,r.jsxs)(t.p,{children:["For the ",(0,r.jsx)(t.code,{children:"AskUIXRayStepReporter"})," step reporter to work properly you need a special ",(0,r.jsx)(t.code,{children:"testEnvironment"})," that provides the names from the ",(0,r.jsx)(t.code,{children:"it"}),"-blocks used to create the JSON-Objects for each test. Configure the ",(0,r.jsx)(t.code,{children:"testEnvironment"})," in your ",(0,r.jsx)(t.code,{children:"jest.config.ts"})," as shown in the code below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import type { Config } from '@jest/types';\n\nconst config: Config.InitialOptions = {\n  preset: 'ts-jest',\n  testEnvironment: '@askui/askui-jest-xray-environment',\n  setupFilesAfterEnv: ['./helpers/askui-helper.ts'],\n  sandboxInjectedGlobals: [\n    'Math',\n  ],\n  reporters: [ \"default\", \"jest-junit\" ]\n};\n\n// eslint-disable-next-line import/no-default-export\nexport default config;\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>i});var r=n(11504);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);