"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9488],{10900:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=o(17624),t=o(4552);const c={displayed_sidebar:"apiSidebar"},i="execOnShell",r={id:"api/Actions/execonshell",title:"execOnShell",description:"production",source:"@site/versioned_docs/version-0.14.0/api/02-Actions/execonshell.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/execonshell",permalink:"/docs/0.14.0/api/Actions/execonshell",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.14.0/api/02-Actions/execonshell.md",tags:[],version:"0.14.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"click",permalink:"/docs/0.14.0/api/Actions/click"},next:{title:"expect",permalink:"/docs/0.14.0/api/Actions/expect"}},a={},l=[];function d(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"execonshell",children:"execOnShell"}),"\n",(0,s.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Executes a shell command on the device your AskUI Controller is connected to."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// Open the lastpass app\nawait aui.execOnShell(\'monkey -p com.lastpass.authenticator 1\').exec();\n\n// Open Google Chrome on Windows\nawait aui.execOnShell("start chrome").exec()\n\n;// Open Google Chrome on macOS\nawait aui.execOnShell("open -a \'Google Chrome\'").exec();\n\n// Open Google Chrome on Linux\nawait aui.execOnShell("chrome").exec();\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"@param {string} shell_command - A shell command which is executed."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,o)=>{o.d(n,{I:()=>r,M:()=>i});var s=o(11504);const t={},c=s.createContext(t);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);