"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19992],{1540:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(17624),o=t(4552);const s={title:"2024.03.25 | AskUI SDK Automations Directory Option",slug:"release-2024-03-25",authors:["johannesdienst","jonasmenesklou"],tags:["AskUI SDK"],hide_table_of_contents:!1},a=void 0,r={permalink:"/release-notes/release-2024-03-25",source:"@site/blog/2024-03-25/2024-03-25.md",title:"2024.03.25 | AskUI SDK Automations Directory Option",description:"Introduction",date:"2024-03-25T00:00:00.000Z",tags:[{inline:!0,label:"AskUI SDK",permalink:"/release-notes/tags/ask-ui-sdk"}],readingTime:.99,hasTruncateMarker:!1,authors:[{name:"Johannes Dienst",title:"Developer Advocate",email:"johannes.dienst@askui.com",imageURL:"/img/johannesdienst.jpeg",key:"johannesdienst"},{name:"Jonas Menesklou",title:"CEO",email:"jonas.menesklou@askui.com",imageURL:"/img/jonasmenesklou.jpeg",key:"jonasmenesklou"}],frontMatter:{title:"2024.03.25 | AskUI SDK Automations Directory Option",slug:"release-2024-03-25",authors:["johannesdienst","jonasmenesklou"],tags:["AskUI SDK"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"2024.04.22 | AskUI Suite 24.4.1 - Inference Speedup",permalink:"/release-notes/release-2024-04-22"},nextItem:{title:"2024.03.04 | AskUI SDK Convenience Methods",permalink:"/release-notes/release-2024-03-04"}},c={authorsImageUrls:[void 0,void 0]},l=[{value:"Introduction",id:"introduction",level:2},{value:"Convenience Methods",id:"convenience-methods",level:2},{value:"<code>clickTextfieldNearestTo(label: string)</code>",id:"clicktextfieldnearesttolabel-string",level:3},{value:"New Option <code>-ad --automations-description</code> for <code>init</code>",id:"new-option--ad---automations-description-for-init",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["This week we introduced a new convenience method ",(0,i.jsx)(n.code,{children:"clickTextfieldNearestTo(label: string)"})," which lets you click on a textfield with a label instead of a placeholder."]}),"\n",(0,i.jsxs)(n.p,{children:["We also removed the convenience method ",(0,i.jsx)(n.code,{children:"dragTo"})," as it was not working as intended."]}),"\n",(0,i.jsxs)(n.p,{children:["There is a new option ",(0,i.jsx)(n.code,{children:"-ad --automations-description"})," for initialising an AskUI project with ",(0,i.jsx)(n.code,{children:"npx askui@latest init"}),". It lets you specify the name of the automations directory which was hardcoded to ",(0,i.jsx)(n.code,{children:"askui_example"})," before."]}),"\n",(0,i.jsx)(n.h2,{id:"convenience-methods",children:"Convenience Methods"}),"\n",(0,i.jsxs)(n.p,{children:["We had to remove ",(0,i.jsx)(n.code,{children:"dragTo()"})," as it was not working as expected"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"We introduced the following method:"}),"\n",(0,i.jsx)(n.h3,{id:"clicktextfieldnearesttolabel-string",children:(0,i.jsx)(n.code,{children:"clickTextfieldNearestTo(label: string)"})}),"\n",(0,i.jsx)(n.p,{children:"Searches for an element of type textfield with a specific label nearest to it. If found, clicks it."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"await aui.clickTextfieldNearestTo('E-Mail Address');\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"new-option--ad---automations-description-for-init",children:["New Option ",(0,i.jsx)(n.code,{children:"-ad --automations-description"})," for ",(0,i.jsx)(n.code,{children:"init"})]}),"\n",(0,i.jsxs)(n.p,{children:["When you run ",(0,i.jsx)(n.code,{children:"npx askui@latest init"})," you always got a directory ",(0,i.jsx)(n.code,{children:"askui_example"}),". This broke backwards compatibility with existing installations of AskUI."]}),"\n",(0,i.jsxs)(n.p,{children:["Thus we introduced a new option when running ",(0,i.jsx)(n.code,{children:"askui init"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'-ad, --automations-directory <value>  a name for the directory askui stores its configuration and workflows in. (default: "askui_example")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can use it like this to store the AskUI automations in a directory ",(0,i.jsx)(n.code,{children:"askui-Workflows"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npx askui@latest init -ad askui-Workflows\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>a});var i=t(11504);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);