"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69448],{84028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=t(17624),i=t(4552);const s={displayed_sidebar:"apiSidebar"},r="below",l={id:"api/Relations/below",title:"below",description:"production",source:"@site/versioned_docs/version-0.20.7/api/04-Relations/below.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/below",permalink:"/docs/api/Relations/below",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/versioned_docs/version-0.20.7/api/04-Relations/below.md",tags:[],version:"0.20.7",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"and",permalink:"/docs/api/Relations/and"},next:{title:"contains",permalink:"/docs/api/Relations/contains"}},a={},d=[];function c(e){const n={code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"below",children:"below"})}),"\n",(0,o.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.p,{children:"Filters for an element below another element."}),"\n",(0,o.jsxs)(n.p,{children:["Takes an optional parameter ",(0,o.jsx)(n.code,{children:"index"})," to select the nth element (defaults to ",(0,o.jsx)(n.code,{children:"0"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["Takes an optional parameter ",(0,o.jsx)(n.code,{children:"intersection_area"})," to specify which elements below of the other element are filtered for based on their horizontal position (y-coordinates of bounding box):"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'"element_center_line"'})," - considered below of the other element if element's bounding box intersects with a vertical line passing through the center of the other element"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'"element_edge_area"'})," - considered below of the other element if element's bounding box intersects with an area between the left and the right edge of the other element"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'"display_edge_area"'})," - considered below of the other element no matter where it is placed horizontally on the screen (y-axis)"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"------------\n|   text   |\n------------\n------------\n|  button0 |\n------------\n         -----------\n         | button1 |\n         -----------\n            -----------\n            | button2 |\n            -----------\n------------\n|  button3 |\n------------\n\n// General explanation for element_center_line\n// This will find button0 and button3\n...button().below(..., 'element_center_line').text()\n\n// General explanation for element_edge_area\n// This will find button0, button1 and button3\n...button().below(..., 'element_edge_area').text()\n\n// General explanation and display_edge_area\n// This will find button0, button1, button2 and button3\n...button().below(..., 'display_edge_area').text()\n\n// More examples:\n// Returns button0 because button0 is the first button below text\n...button().below().text()\n...button().below(0).text()\n...button().below(0, 'element_edge_area').text()\n\n// Returns button3 because it is the second button touched by the\n// vertical line from the center of text\n// Notice: button1 is not touched\n...button().below(1, 'element_center_line').text()\n\n// Returns button3 because it is the third button touched by the\n// vertical area below the x-axis of text\n// Notice: button2 is not touched!\n...button().below(2, 'element_edge_area').text()\n\n// Returns button2 because it is the third element below text\n...button().below(2, 'display_edge_area').text()\n\n// Returns no element because text is above the buttons\n...text().below().button()\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(80102).c+"",width:"1920",height:"1080"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["@param {number} [index=0] - Index of element to filter for going into the direction specified. Defaults to ",(0,o.jsx)(n.code,{children:"0"})," which is the first element (zero-indexed) found in that direction."]}),"\n",(0,o.jsxs)(n.li,{children:['@param {INTERSECTION_AREA} [intersection_area="element_edge_area"] - Intersecting with either ',(0,o.jsx)(n.code,{children:'"element_center_line"'}),", ",(0,o.jsx)(n.code,{children:'"element_edge_area"'})," or ",(0,o.jsx)(n.code,{children:'"display_edge_area"'}),". Defaults to ",(0,o.jsx)(n.code,{children:'"element_edge_area"'}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},80102:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/below-167d0bdcc85218d9a5f6b9c4a6a6761e.gif"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var o=t(11504);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);