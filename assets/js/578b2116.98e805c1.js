"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2064],{81132:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=n(17624),t=n(4552);const i={displayed_sidebar:"apiSidebar"},r="moveMouse",c={id:"api/Actions/movemouse",title:"moveMouse",description:"production",source:"@site/versioned_docs/version-0.17.0/api/02-Actions/movemouse.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/movemouse",permalink:"/docs/0.17.0/api/Actions/movemouse",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.17.0/api/02-Actions/movemouse.md",tags:[],version:"0.17.0",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"mouseToggleUp",permalink:"/docs/0.17.0/api/Actions/mousetoggleup"},next:{title:"moveMouseRelatively",permalink:"/docs/0.17.0/api/Actions/movemouserelatively"}},a={},d=[];function u(e){const o={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"movemouse",children:"moveMouse"}),"\n",(0,s.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(o.p,{children:"Moves the mouse to an arbitrary absolute x and y coordinates."}),"\n",(0,s.jsxs)(o.p,{children:["If you want to move your mouse cursor to an element, use ",(0,s.jsx)(o.code,{children:"moveMouseTo()"}),"."]}),"\n",(0,s.jsx)(o.admonition,{type:"caution",children:(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"macOS only"}),": Due to the higher pixel density of the ",(0,s.jsx)(o.strong,{children:"retina display"}),", the input coordinates must be ",(0,s.jsx)(o.strong,{children:"doubled"})," in order to move the mouse as expected. For example, if you want to move the mouse for 100 pixels, use 200."]})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Example:"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-typescript",children:"await aui.moveMouse(500, 500).exec();\n"})}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:n(43280).c+"",width:"800",height:"460"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"@param {number} x_coordinate - A (positive/negative) x coordinate."}),"\n",(0,s.jsx)(o.li,{children:"@param {number} y_coordinate - A (positive/negative) y coordinate."}),"\n"]})]})}function m(e={}){const{wrapper:o}={...(0,t.M)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},43280:(e,o,n)=>{n.d(o,{c:()=>s});const s=n.p+"assets/images/moveMouse-f9d52caeb9aec9fcd0709680c3016153.gif"},4552:(e,o,n)=>{n.d(o,{I:()=>c,M:()=>r});var s=n(11504);const t={},i=s.createContext(t);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);