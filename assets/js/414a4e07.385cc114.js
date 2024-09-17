"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34856],{54772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>A,default:()=>r,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var i=n(17624),o=n(4552);const c={title:"Condition-Based Execution"},A="Condition-Based Execution",a={id:"general/Element Selection/condition-based-execution",title:"Condition-Based Execution",description:"A common problem of UI Automation is that the user interface changes from run to run for some of the following reasons:",source:"@site/versioned_docs/version-0.20.6/general/03-Element Selection/condition-based-execution.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/condition-based-execution",permalink:"/docs/0.20.6/general/Element Selection/condition-based-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.20.6/general/03-Element Selection/condition-based-execution.md",tags:[],version:"0.20.6",frontMatter:{title:"Condition-Based Execution"},sidebar:"docsSidebar",previous:{title:"Automating Multiple Devices",permalink:"/docs/0.20.6/general/Executing Automations/multi-device-automation"},next:{title:"Annotations, Screenshots and Videos",permalink:"/docs/0.20.6/general/Element Selection/annotations-and-screenshots"}},s={},h=[{value:"Check for (Non-) Existence of an Element",id:"check-for-non--existence-of-an-element",level:2},{value:"Check for Existence",id:"check-for-existence",level:3},{value:"Check for Non-Existence",id:"check-for-non-existence",level:3},{value:"Recommendation",id:"recommendation",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"condition-based-execution",children:"Condition-Based Execution"})}),"\n",(0,i.jsx)(t.p,{children:"A common problem of UI Automation is that the user interface changes from run to run for some of the following reasons:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A popup appears ",(0,i.jsx)(t.em,{children:"randomly"})]}),"\n",(0,i.jsx)(t.li,{children:"Elements like buttons have different labels depending on the app state"}),"\n",(0,i.jsx)(t.li,{children:"..."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In this case, you need to check if an element is visible \u2014or not visible depending on your use case\u2014 and change the workflow execution accordingly."}),"\n",(0,i.jsx)(t.p,{children:"We will show you how to do that with an example."}),"\n",(0,i.jsx)(t.h2,{id:"check-for-non--existence-of-an-element",children:"Check for (Non-) Existence of an Element"}),"\n",(0,i.jsxs)(t.p,{children:["On our ",(0,i.jsx)(t.a,{href:"https://askui.github.io/askui-practice-page/",children:"AskUI Practice Page"})," we have a theme switcher-button. It either has the label ",(0,i.jsx)(t.strong,{children:"Switch to Dark"})," or ",(0,i.jsx)(t.strong,{children:"Switch to Light"})," depending on which theme is enabled:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Button with label Switch to Dark",src:n(35128).c+"",width:"165",height:"62"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Button with label Switch to Light",src:n(37628).c+"",width:"165",height:"62"})}),"\n",(0,i.jsx)(t.h3,{id:"check-for-existence",children:"Check for Existence"}),"\n",(0,i.jsxs)(t.p,{children:["To check if the button with the label ",(0,i.jsx)(t.em,{children:"Switch to Dark"})," is present on the screen you first use ",(0,i.jsx)(t.code,{children:"get()"})," and then test if the length of the returned array is greater than zero:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"const switchToDark = await aui.get()\n                              .text('Switch to Dark')\n                              .exec();\n\nif (switchToDark.length > 0) {\n  // Do something here\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"check-for-non-existence",children:"Check for Non-Existence"}),"\n",(0,i.jsxs)(t.p,{children:["To check if the button with the label ",(0,i.jsx)(t.em,{children:"Switch to Light"})," is ",(0,i.jsx)(t.strong,{children:"not"})," present on the screen you first use ",(0,i.jsx)(t.code,{children:"get()"})," and then test if the length of the returned array is zero:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"const switchToLight = await aui.get()\n                               .text('Switch to Light')\n                               .exec();\nif (switchToLight.length === 0) {\n   // Do something here\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"recommendation",children:"Recommendation"}),"\n",(0,i.jsx)(t.p,{children:"Following the example above you can create a theme switch inside your workflow like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"const switchToDark =\n    await aui.get()\n              .text('Switch to Dark')\n              .exec();\nconst switchToLight =\n    await aui.get()\n              .text('Switch to Light')\n              .exec();\n\nif (switchToLight.length > 0) {\n  await aui.click()\n            .text('Switch to Light')\n            .exec();\n}\nelse if (switchToDark.length > 0) {\n  await aui.click()\n            .text('Switch to Dark')\n            .exec();\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"But this will clutter your workflow and make it hard to maintain. It is better to move the code into a separate function which can be called from anywhere. With that you create a modular piece of workflow that can be used anywhere:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"async function switchDarkLight() {\n  const switchToDark =\n      await aui.get()\n                .text('Switch to Dark')\n                .exec();\n  const switchToLight =\n      await aui.get()\n                .text('Switch to Light')\n                .exec();\n\n  if (switchToLight.length > 0) {\n    await aui.click()\n              .text('Switch to Light')\n              .exec();\n  }\n  else if (switchToDark.length > 0) {\n    await aui.click()\n              .text('Switch to Dark')\n              .exec();\n  }\n}\n\n// Call it like this from other workflows\nawait switchDarkLight();\n"})})]})}function r(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},35128:(e,t,n)=>{n.d(t,{c:()=>i});const i="data:image/png;base64,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"},37628:(e,t,n)=>{n.d(t,{c:()=>i});const i="data:image/png;base64,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"},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>A});var i=n(11504);const o={},c=i.createContext(o);function A(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:A(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);