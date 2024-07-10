"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49872],{68020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(17624),r=n(4552);const o={displayed_sidebar:"apiSidebar"},s="rightOf",a={id:"api/Relations/rightof",title:"rightOf",description:"production",source:"@site/versioned_docs/version-0.20.3/api/04-Relations/rightof.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/rightof",permalink:"/docs/api/Relations/rightof",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.20.3/api/04-Relations/rightof.md",tags:[],version:"0.20.3",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"or",permalink:"/docs/api/Relations/or"},next:{title:"exists",permalink:"/docs/api/Checks/exists"}},d={},l=[];function c(e){const t={code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"rightof",children:"rightOf"}),"\n",(0,i.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:"Filters for an element right of another element."}),"\n",(0,i.jsxs)(t.p,{children:["Takes an optional parameter ",(0,i.jsx)(t.code,{children:"index"})," to select the nth element (defaults to ",(0,i.jsx)(t.code,{children:"0"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["Takes an optional parameter ",(0,i.jsx)(t.code,{children:"intersection_area"})," to specify which elements right of the other element are filtered for based on their vertical position (y-coordinates of bounding box):"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"element_center_line"'})," - considered right of the other element if element's bounding box intersects with a horizontal line passing through the center of the other element"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"element_edge_area"'})," - considered right of the other element if element's bounding box intersects with an area between the top and the bottom edge of the other element"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"display_edge_area"'})," - considered right of the other element no matter where it is placed vertically on the screen (y-axis)"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"---------- ---------                     ---------\n| button | | text0 |                     | text3 |\n---------- --------- ---------           ---------\n                     | text1 | ---------\n                     --------- | text2 |\n                               ---------\n\n// General explanation for element_center_line\n// This will find text0 and text3\n...text().rightOf(..., 'element_center_line').button()\n\n// General explanation for element_edge_area\n// This will find text0, text1 and text3\n...text().rightOf(..., 'element_edge_area').button()\n\n// General explanation and display_edge_area\n// This will find text0, text1, text2 and text3\n...text().rightOf(..., 'display_edge_area').button()\n\n// More examples:\n// Returns text0 because it is the first element rightOf button\n...text().rightOf().button()\n...text().rightOf(0).button()\n...text().rightOf(0, 'element_edge_area').button()\n\n// Returns text3 because it is the second text touched by the\n// horizontal line from the center of button\n// Notice: text1 is not touched!\n...text().rightOf(1, 'element_center_line').button()\n\n// Returns text3 because it is the third text touched by the\n// vertical area rightOf the y-axis of button\n// Notice: text2 is not touched!\n...text().rightOf(2, 'element_edge_area').button()\n\n// Returns text2 because it is the third element rightOf button\n...text().rightOf(2, 'display_edge_area').button()\n\n// Returns no element because button is rightOf the texts\n...button().rightOf().text()\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(12368).c+"",width:"1920",height:"1080"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["@param {number} [index=0] - Index of element to filter for going into the direction specified. Defaults to ",(0,i.jsx)(t.code,{children:"0"})," which is the first element (zero-indexed) found in that direction."]}),"\n",(0,i.jsxs)(t.li,{children:['@param {INTERSECTION_AREA} [intersection_area="element_edge_area"] - Intersecting with either ',(0,i.jsx)(t.code,{children:'"element_center_line"'}),", ",(0,i.jsx)(t.code,{children:'"element_edge_area"'})," or ",(0,i.jsx)(t.code,{children:'"display_edge_area"'}),". Defaults to ",(0,i.jsx)(t.code,{children:'"element_edge_area"'}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},12368:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/rightOf-042e5b9b516690b86368e0057995934b.gif"},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>s});var i=n(11504);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);