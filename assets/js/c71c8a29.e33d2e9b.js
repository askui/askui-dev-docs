"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44897],{68492:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=t(17624),i=t(4552);const s={displayed_sidebar:"apiSidebar"},r="moveMouseRelativelyTo",a={id:"api/Actions/movemouserelativelyto",title:"moveMouseRelativelyTo",description:"production",source:"@site/versioned_docs/version-0.20.7/api/02-Actions/movemouserelativelyto.md",sourceDirName:"api/02-Actions",slug:"/api/Actions/movemouserelativelyto",permalink:"/docs/0.20.7/api/Actions/movemouserelativelyto",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/versioned_docs/version-0.20.7/api/02-Actions/movemouserelativelyto.md",tags:[],version:"0.20.7",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"moveMouseRelatively",permalink:"/docs/0.20.7/api/Actions/movemouserelatively"},next:{title:"moveMouseTo",permalink:"/docs/0.20.7/api/Actions/movemouseto"}},c={},l=[];function d(e){const o={admonition:"admonition",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"movemouserelativelyto",children:"moveMouseRelativelyTo"})}),"\n",(0,n.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(o.p,{children:"Moves the mouse relatively to an element in the direction.\nThis can be used when the mouse should not hover over an element anymore."}),"\n",(0,n.jsx)(o.admonition,{type:"caution",children:(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"macOS only"}),": Due to the higher pixel density of the ",(0,n.jsx)(o.strong,{children:"retina display"}),", the input coordinates must be ",(0,n.jsx)(o.strong,{children:"doubled"})," in order to move the mouse as expected. For example, if you want to move the mouse for 100 pixels, use 200."]})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Examples:"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-typescript",children:"// Move mouse 30 pixels below button\nawait aui.moveMouseRelativelyTo(0, 30).button().withText('Submit').exec()\n"})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:t(53880).c+"",width:"1920",height:"1080"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["@param ","number"," x_offset - A (positive/negative) x direction."]}),"\n",(0,n.jsxs)(o.li,{children:["@param ","number"," y_offset - A (positive/negative) y direction."]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,i.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},53880:(e,o,t)=>{t.d(o,{c:()=>n});const n=t.p+"assets/images/moveMouseRelativelyTo-8b410256841490fe7c1a0d454702cd63.gif"},4552:(e,o,t)=>{t.d(o,{I:()=>a,M:()=>r});var n=t(11504);const i={},s=n.createContext(i);function r(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);