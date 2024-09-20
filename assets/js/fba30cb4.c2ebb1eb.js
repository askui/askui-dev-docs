"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51296],{98848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(17624),a=n(4552),i=n(86212),s=n(22440);const o={sidebar_position:7,pagination_next:"general/Getting Started/write-your-first-instruction-part-two"},l="Create Your First Instruction",c={id:"general/Getting Started/write-your-first-instruction",title:"Create Your First Instruction",description:"What you will learn",source:"@site/versioned_docs/version-0.20.7/general/01-Getting Started/write-your-first-instruction.md",sourceDirName:"general/01-Getting Started",slug:"/general/Getting Started/write-your-first-instruction",permalink:"/docs/general/Getting Started/write-your-first-instruction",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs",tags:[],version:"0.20.7",sidebarPosition:7,frontMatter:{sidebar_position:7,pagination_next:"general/Getting Started/write-your-first-instruction-part-two"},sidebar:"docsSidebar",previous:{title:"Enterprise Checklist",permalink:"/docs/general/Getting Started/Installing AskUI/enterprise-checklist"},next:{title:"Interact with Elements",permalink:"/docs/general/Getting Started/write-your-first-instruction-part-two"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Anatomy of an AskUI Workflow File",id:"anatomy-of-an-askui-workflow-file",level:2},{value:"Annotated Example with Key Components",id:"annotated-example-with-key-components",level:3},{value:"Step-by-Step Implementation With Example",id:"step-by-step-implementation-with-example",level:2},{value:"Step 1: Annotate Your Screen",id:"step-1-annotate-your-screen",level:3},{value:"Step 1.1: Run the Annotation",id:"step-11-run-the-annotation",level:4},{value:"Next Step: Interact with Elements",id:"next-step-interact-with-elements",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"create-your-first-instruction",children:"Create Your First Instruction"})}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"What you will learn"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Understanding AskUI Workflow files"}),"\n",(0,r.jsx)(t.li,{children:"Creating and running your first automation"}),"\n",(0,r.jsx)(t.li,{children:"How to select Elements that are not recognized"}),"\n"]})]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"AskUI is installed on your computer."}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:"Only Windows:"})," The AskUI Controller is running."]}),"\n",(0,r.jsx)(t.li,{children:"We recommend using a second monitor to ensure AskUI is not interacting with your code editor."}),"\n",(0,r.jsxs)(t.li,{children:["You have a workflow file open on your main display, for example the original template ",(0,r.jsx)(t.code,{children:"askui_example/my-first-askui-test-suite.test.ts"}),", in the directory you initialized your AskUI-Project before."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"For macOS Users"}),(0,r.jsx)(t.br,{}),"\n","Some users have reported instability running AskUI on macOS with external displays and/or ",(0,r.jsx)(t.a,{href:"https://support.apple.com/en-gb/guide/mac-help/mh14112/mac",children:"virtual desktops (called Spaces)"}),". If you experience similar issues, please disconnect external displays and close virtual desktops."]})}),"\n",(0,r.jsx)(t.h2,{id:"anatomy-of-an-askui-workflow-file",children:"Anatomy of an AskUI Workflow File"}),"\n",(0,r.jsx)(t.p,{children:"An AskUI Workflow file is a tool for automating user interface (UI) interactions across various applications."}),"\n",(0,r.jsx)(t.h3,{id:"annotated-example-with-key-components",children:"Annotated Example with Key Components"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:"showLineNumbers",children:"// Import Statements: Begin by importing necessary AskUI modules and helpers.\nimport { aui } from './helpers/askui-helper';\n\n// describe Block: Groups related UI automation scenarios or tests.\ndescribe('AskUI Automation Scenarios', () => {\n\n  // it Blocks: Each block defines a specific UI interaction \n  // or automation task, such as form submissions, navigation,\n  // or simulating user actions.\n  it('executes a specific task', async () => {\n\n    // AskUI Instructions: Commands provided for running the automated\n    // tasks or tests through the terminal.\n    await aui.click().text(\"Button Name\").exec();\n\n    // Additional automation logic\n  });\n\n  // More it blocks for different scenarios\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"step-by-step-implementation-with-example",children:"Step-by-Step Implementation With Example"}),"\n",(0,r.jsxs)(t.p,{children:["You will automate a ",(0,r.jsx)(t.a,{href:"https://askui.github.io/askui-practice-page",children:"web calculator"})," in this example to show you all the different techniques. Feel free to follow along. Our goal is to type ",(0,r.jsx)(t.code,{children:"2.6+2"})," by clicking the buttons and then get the result by clicking ",(0,r.jsx)(t.code,{children:"="}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"A simple calculator on the AskUI Practice Page",src:n(16196).c+"",width:"625",height:"358"})}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"You will learn:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"How to see and get element-descriptions from an annotated screen"}),"\n",(0,r.jsx)(t.li,{children:"Use different element-selectors"}),"\n",(0,r.jsx)(t.li,{children:"Select elements that were not recognized by AskUI at first"}),"\n"]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"step-1-annotate-your-screen",children:"Step 1: Annotate Your Screen"}),"\n",(0,r.jsx)(t.p,{children:"The (interactive) annotation serves as the first step in automating UI interactions. It's a process where the tool captures a snapshot of the user interface and identifies all interactive elements like buttons, textfields, and other controls."}),"\n",(0,r.jsxs)(i.c,{children:[(0,r.jsx)(s.c,{value:"windows",label:"Windows",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers',children:"...\n  it('should generate an HTML annotation', async () => {\n    await aui.annotate();\n  });\n...\n"})})}),(0,r.jsx)(s.c,{value:"macos",label:"MacOS",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers',children:"...\n  it('should generate an interactive annotation', async () => {\n    await aui.annotateInteractively();\n  });\n...\n"})})}),(0,r.jsx)(s.c,{value:"linux",label:"Linux",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers',children:"...\n  it('should generate an interactive annotation', async () => {\n    await aui.annotateInteractively();\n  });\n...\n"})})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h4,{id:"step-11-run-the-annotation",children:"Step 1.1: Run the Annotation"}),"\n",(0,r.jsx)(t.p,{children:"To execute the instruction:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"AskUI-RunProject\n"})}),"\n",(0,r.jsxs)(t.p,{children:["A few seconds later an (interactive) annotation will be generated. If you have used the ",(0,r.jsx)(t.code,{children:"annotate()"})," command, the annotation files are saved under ",(0,r.jsx)(t.code,{children:"<project_root>/report"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Your (interactive) annotation looks something like this:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Annotation of the Google calculator",src:n(92168).c+"",width:"625",height:"360"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Your annotation may look differently and some red bounding boxes could be missing as AskUI detects elements visually. This means the detection is dependent on your screen resolution and settings! You will learn how to deal with this in a moment."})}),"\n",(0,r.jsxs)(t.p,{children:["To close the interactive annotation, use ",(0,r.jsx)(t.code,{children:"CMD/CTRL + W"})," or ",(0,r.jsx)(t.code,{children:"ESC"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you\u2019d like a deeper explanation as to what an (interactive) annotation is, read about it here. ",(0,r.jsx)(t.a,{href:"/docs/general/Element%20Selection/annotations-and-screenshots",children:"Explanation of (Interactive) Annotations"})]}),"\n",(0,r.jsx)(t.h2,{id:"next-step-interact-with-elements",children:"Next Step: Interact with Elements"}),"\n",(0,r.jsx)(t.p,{children:"Now that we know which elements you can target the next step is to interact with a real element."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/general/Getting%20Started/write-your-first-instruction-part-two",children:"Please go to the next page to learn how to do that!"})})]})}function p(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},22440:(e,t,n)=>{n.d(t,{c:()=>s});n(11504);var r=n(65456);const a={tabItem:"tabItem_Ymn6"};var i=n(17624);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.c)(a.tabItem,s),hidden:n,children:t})}},86212:(e,t,n)=>{n.d(t,{c:()=>v});var r=n(11504),a=n(65456),i=n(77288),s=n(55592),o=n(83472),l=n(95068),c=n(30604),u=n(3244);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.wn)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.Uz)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._M)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,d]=m({queryString:n,groupId:a}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.IN)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,o.c)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,i]),tabValues:i}}var x=n(89788);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(17624);function w(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.MV)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.c)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.c)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.c)("tabs-container",g.tabList),children:[(0,b.jsx)(w,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function v(e){const t=(0,x.c)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},92168:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/create-first-instruction-calculator-annotated-38462f1eba3023ac19562728bf74deba.png"},16196:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/create-first-instruction-calculator-raw-aaf1c5e6efcf6dfc90f999af6a1bf7b9.png"},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>s});var r=n(11504);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);