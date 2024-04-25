"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84496],{88700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(17624),i=n(4552);const o={sidebar_position:7},r="Implement Assertions",a={id:"general/Element Selection/assertions",title:"Implement Assertions",description:"In this guide we will first show you how to assert if an element is there or not.",source:"@site/versioned_docs/version-0.17.0/general/03-Element Selection/assertions.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/assertions",permalink:"/docs/general/Element Selection/assertions",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.17.0/general/03-Element Selection/assertions.md",tags:[],version:"0.17.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Scrolling",permalink:"/docs/general/Element Selection/scrolling"},next:{title:"Automating Mobile Devices",permalink:"/docs/general/Executing Automations/mobile-automation"}},l={},c=[{value:"Assert the (non) Existence of Elements",id:"assert-the-non-existence-of-elements",level:2},{value:"Assert the Correctness of Values",id:"assert-the-correctness-of-values",level:2},{value:"1. Use expect() to check if the text in the textfield matches",id:"1-use-expect-to-check-if-the-text-in-the-textfield-matches",level:3},{value:"2. Retrieve the element with get() and use an assertions library",id:"2-retrieve-the-element-with-get-and-use-an-assertions-library",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"implement-assertions",children:"Implement Assertions"}),"\n",(0,s.jsx)(t.p,{children:"In this guide we will first show you how to assert if an element is there or not."}),"\n",(0,s.jsx)(t.h2,{id:"assert-the-non-existence-of-elements",children:"Assert the (non) Existence of Elements"}),"\n",(0,s.jsxs)(t.p,{children:["To validate if an element exists or not we use ",(0,s.jsx)(t.a,{href:"/docs/api/Actions/expect",children:"expect()"})," in combination with ",(0,s.jsx)(t.a,{href:"/docs/api/Checks/exists",children:"exists()"})," or ",(0,s.jsx)(t.a,{href:"/docs/api/Checks/notexists",children:"notExists"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"// Expect that a button with text 'Go for it' exists\nawait aui.expect().text('Login').exists().exec();\n\n// Expect that a text 'Do not go for it' not exists\nawait aui.expect().text('Login').notExists().exec();\n"})}),"\n",(0,s.jsx)(t.h2,{id:"assert-the-correctness-of-values",children:"Assert the Correctness of Values"}),"\n",(0,s.jsx)(t.p,{children:"Let's say you want to check if your automation actually wrote something into a textfield. You can do two things:"}),"\n",(0,s.jsx)(t.h3,{id:"1-use-expect-to-check-if-the-text-in-the-textfield-matches",children:"1. Use expect() to check if the text in the textfield matches"}),"\n",(0,s.jsx)(t.p,{children:"This technique is useful if the text you entered is unique on the screen."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'// Type something into a textfield\nawait aui.typeIn("Please find me").textfield().contains().text("Enter email").exec();\n\n// Assert if the textfield contains the value\nawait aui.expect().textfield().contains().text(\'Please find me\').exists().exec();\n'})}),"\n",(0,s.jsxs)(t.h3,{id:"2-retrieve-the-element-with-get-and-use-an-assertions-library",children:["2. Retrieve the element with ",(0,s.jsx)(t.a,{href:"/docs/api/Getters/get",children:"get()"})," and use an assertions library"]}),"\n",(0,s.jsxs)(t.p,{children:["If your value is not unique on your screen you can retrieve the element with ",(0,s.jsx)(t.a,{href:"/docs/api/Getters/get",children:"get()"})," and a different selector. For example with a relational selector like ",(0,s.jsx)(t.a,{href:"/docs/api/Relations/below",children:"below()"}),". With an assertion library you can assert if the value is correct."]}),"\n",(0,s.jsx)(t.p,{children:"Jest comes with assertions. You only have to import them into your AskUI-file."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Do not forget the import mentioned at the start of the snippet!"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:'// Add this to the start of your AskUI-file containing your workflows/instructions\nimport {expect, jest, test} from \'@jest/globals\';\n\n// Type something into a textfield\nawait aui.typeIn("Please find me").textfield().contains().text("Enter email").exec();\n\n// You have to retrieve the text you wrote inside the textfield here\n// If you retrieve the textfield it does not contain the text inside of it\nconst textfield = await aui.get().text().below().text("User email").exec();\n\n// below() returns an array. We want the first element of that array!\nexpect(textfield[0].text).toBe("Please find me");\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var s=n(11504);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);