"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31504],{11152:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=s(17624),i=s(4552);const o={displayed_sidebar:"apiSidebar"},r="exists",c={id:"api/Checks/exists",title:"exists",description:"production",source:"@site/versioned_docs/version-0.14.0/api/05-Checks/exists.md",sourceDirName:"api/05-Checks",slug:"/api/Checks/exists",permalink:"/docs/0.14.0/api/Checks/exists",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.14.0/api/05-Checks/exists.md",tags:[],version:"0.14.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"rightOf",permalink:"/docs/0.14.0/api/Relations/rightof"},next:{title:"notExists",permalink:"/docs/0.14.0/api/Checks/notexists"}},a={},d=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"exists",children:"exists"}),"\n",(0,n.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"Expects that filtered element exists."}),"\n",(0,n.jsxs)(t.p,{children:["Always use together with ",(0,n.jsx)(t.code,{children:"expect()"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"})," Throws an error and stops the execution when the element is not found. You can catch the error and decide what to do as in the examples below."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"// Stops execution at this point when the element does not exist.\nawait aui.expect().text('Login').exists().exec()\n\n// This will catch the error and log a message\n// But the execution will continue afterwards\ntry {\n    await aui.expect().text('Login').exists().exec()\n} catch (error) {\n    console.log('Too bad we could not find the element!');\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>c,M:()=>r});var n=s(11504);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);