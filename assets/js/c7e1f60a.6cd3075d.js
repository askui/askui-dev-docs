"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16812],{9980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(17624),i=n(4552);const o={displayed_sidebar:"apiSidebar"},r="notExists",c={id:"api/Checks/notexists",title:"notExists",description:"production",source:"@site/docs/api/05-Checks/notexists.md",sourceDirName:"api/05-Checks",slug:"/api/Checks/notexists",permalink:"/docs/next/api/Checks/notexists",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/api/05-Checks/notexists.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"exists",permalink:"/docs/next/api/Checks/exists"},next:{title:"get",permalink:"/docs/next/api/Getters/get"}},a={},d=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"notexists",children:"notExists"}),"\n",(0,s.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.p,{children:"Expects that filtered element not exists."}),"\n",(0,s.jsxs)(t.p,{children:["Always use together with ",(0,s.jsx)(t.code,{children:"expect()"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"})," Throws an error and stops the execution when the element is found. You can catch the error and decide what to do as in the examples below."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"// Stops execution at this point when the element does exist.\nawait aui.expect().text('Login').notExists().exec()\n\n// This will catch the error and log a message\n// But the execution will continue afterwards\ntry {\n    await aui.expect().text('Login').notExists().exec()\n} catch (error) {\n    console.log('Too bad we could find the element!');\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>r});var s=n(11504);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);