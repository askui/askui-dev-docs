"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10016],{66132:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=i(17624),s=i(4552);const r={displayed_sidebar:"apiSidebar"},a="withText",c={id:"api/Element-Descriptions/withtext",title:"withText",description:"production",source:"@site/versioned_docs/version-0.20.7/api/03-Element-Descriptions/withtext.md",sourceDirName:"api/03-Element-Descriptions",slug:"/api/Element-Descriptions/withtext",permalink:"/docs/api/Element-Descriptions/withtext",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/versioned_docs/version-0.20.7/api/03-Element-Descriptions/withtext.md",tags:[],version:"0.20.7",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"withExactText",permalink:"/docs/api/Element-Descriptions/withexacttext"},next:{title:"withTextRegex",permalink:"/docs/api/Element-Descriptions/withtextregex"}},o={},l=[];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"withtext",children:"withText"})}),"\n",(0,n.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"Filters for similar -- meaning >70% similar -- text."}),"\n",(0,n.jsx)(t.p,{children:"Takes an optional parameter to specify the similarity. Usually you need the optional parameter for long texts you want to match precisely."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["We use ",(0,n.jsx)(t.a,{href:"https://rapidfuzz.github.io/RapidFuzz/Usage/fuzz.html#ratio",children:"RapidFuzz"})," which calculates the similarity like this:"]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"1 - (distance / (lengthString1 + lengthString2))"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"'text' === withText('text') => true\n'test' === withText('text') => true\n'Test' === withText('text') => true\n'Text' === withText('text') => true\n'TEXT' === withText('text') => true\n'texst' === withText('text') => true\n'texts' === withText('text') => true\n\n'atebxtc' === withText('text') => false\n'other' === withText('text') => false\n\n// optional parameter: similarity_score\n'978-0-201-00650-6' == withText(\"978-0-201-00\", 90) => false with 82.76 < 90 similarity\n'978-0-201-00650-6' == withText(\"978-0-201-00650\", 90) => true with 93.75 > 90 similarity\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(92024).c+"",width:"640",height:"360"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"@param {string} text - A text to be matched."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},92024:(e,t,i)=>{i.d(t,{c:()=>n});const n=i.p+"assets/images/withText-89a3b4d3a0254f057f1f6ee3d9220b11.gif"},4552:(e,t,i)=>{i.d(t,{I:()=>c,M:()=>a});var n=i(11504);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);