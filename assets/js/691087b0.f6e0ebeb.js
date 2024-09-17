"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33192],{40120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(17624),o=n(4552);const s={displayed_sidebar:"apiSidebar"},r="leftOf",l={id:"api/Relations/leftof",title:"leftOf",description:"production",source:"@site/versioned_docs/version-0.20.7/api/04-Relations/leftof.md",sourceDirName:"api/04-Relations",slug:"/api/Relations/leftof",permalink:"/docs/api/Relations/leftof",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.20.7/api/04-Relations/leftof.md",tags:[],version:"0.20.7",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"in",permalink:"/docs/api/Relations/in"},next:{title:"nearestTo",permalink:"/docs/api/Relations/nearestto"}},a={},d=[];function c(e){const t={code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"leftof",children:"leftOf"})}),"\n",(0,i.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:"Filters for an element left of another element."}),"\n",(0,i.jsxs)(t.p,{children:["Takes an optional parameter ",(0,i.jsx)(t.code,{children:"index"})," to select the nth element (defaults to ",(0,i.jsx)(t.code,{children:"0"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["Takes an optional parameter ",(0,i.jsx)(t.code,{children:"intersection_area"})," to specify which elements left of the other element are filtered for based on their vertical position (y-coordinates of bounding box):"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"element_center_line"'})," - considered left of the other element if element's bounding box intersects with a horizontal line passing through the center of the other element"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"element_edge_area"'})," - considered left of the other element if element's bounding box intersects with an area between the top and the bottom edge of the other element"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:'"display_edge_area"'})," - considered left of the other element no matter where it is placed vertically on the screen (y-axis)"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"---------                   --------- ----------\n| text3 |                   | text0 | | button |\n---------         --------- --------- ----------\n        --------- | text1 |\n        | text2 | ---------\n        ---------\n\n// General explanation for element_center_line\n// This will find text0 and text3\n...text().leftOf(..., 'element_center_line').button()\n\n// General explanation for element_edge_area\n// This will find text0, text1 and text3\n...text().leftOf(..., 'element_edge_area').button()\n\n// General explanation and display_edge_area\n// This will find text0, text1, text2 and text3\n...text().leftOf(..., 'display_edge_area').button()\n\n// More examples:\n// Returns text0 because it is the first element leftOf button\n...text().leftOf().button()\n...text().leftOf(0).button()\n...text().leftOf(0, 'element_edge_area').button()\n\n// Returns text3 because it is the second text touched by the\n// horizontal line from the center of button\n// Notice: text1 is not touched!\n...text().leftOf(1, 'element_center_line').button()\n\n// Returns text3 because it is the third text touched by the\n// vertical area leftOf the y-axis of button\n// Notice: text2 is not touched!\n...text().leftOf(2, 'element_edge_area').button()\n\n// Returns text2 because it is the third element leftOf button\n...text().leftOf(2, 'display_edge_area').button()\n\n// Returns no element because button is rightOf the texts\n...button().leftOf().text()\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(76384).c+"",width:"1920",height:"1080"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["@param {number} [index=0] - Index of element to filter for going into the direction specified. Defaults to ",(0,i.jsx)(t.code,{children:"0"})," which is the first element (zero-indexed) found in that direction."]}),"\n",(0,i.jsxs)(t.li,{children:['@param {INTERSECTION_AREA} [intersection_area="element_edge_area"] - Intersecting with either ',(0,i.jsx)(t.code,{children:'"element_center_line"'}),", ",(0,i.jsx)(t.code,{children:'"element_edge_area"'})," or ",(0,i.jsx)(t.code,{children:'"display_edge_area"'}),". Defaults to ",(0,i.jsx)(t.code,{children:'"element_edge_area"'}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},76384:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/leftOf-d2505e3702e9d77123f23dab54271821.gif"},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>r});var i=n(11504);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);