"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45880],{21116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=n(17624),s=n(4552);const r={displayed_sidebar:"apiSidebar"},l="expectAllExist",o={id:"api/Convenience/expectallexist",title:"expectAllExist",description:"production",source:"@site/versioned_docs/version-0.20.3/api/08-Convenience/expectallexist.md",sourceDirName:"api/08-Convenience",slug:"/api/Convenience/expectallexist",permalink:"/docs/0.20.3/api/Convenience/expectallexist",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/versioned_docs/version-0.20.3/api/08-Convenience/expectallexist.md",tags:[],version:"0.20.3",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"clickTexts",permalink:"/docs/0.20.3/api/Convenience/clicktexts"},next:{title:"pressKeyNTimes",permalink:"/docs/0.20.3/api/Convenience/pressKeyNTimes"}},c={},a=[];function d(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"expectallexist",children:"expectAllExist"})}),"\n",(0,i.jsx)("span",{class:"theme-doc-version-badge badge badge--secondary",children:"production"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:"Check if one or multiple elements are detected. It expects an array of objects with the following properties:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"type"}),". For example ",(0,i.jsx)(t.code,{children:"textfield"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"text"})," is evaluated for elements that can ",(0,i.jsx)(t.em,{children:"contain"})," text: ",(0,i.jsx)(t.code,{children:"text"})," and ",(0,i.jsx)(t.code,{children:"button"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"relation"})," is used for all other elements, that usually have a label and ",(0,i.jsx)(t.em,{children:"not"})," text inside them: ",(0,i.jsx)(t.code,{children:"switch"}),", ",(0,i.jsx)(t.code,{children:"checkbox"})," and so forth."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["You can optionally use ",(0,i.jsx)(t.code,{children:"relation"})," for ",(0,i.jsx)(t.code,{children:"text"})," and ",(0,i.jsx)(t.code,{children:"button"})," to anchor the detection in relation to another element. See the examples below."]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"await aui.expectAllExist([\n  {\n    type: 'text',\n    text: {\n      value: 'Switch to Dark',\n      matching: 'similar'\n    }\n  },\n]);\n\n// Optional use of relation with 'text' or 'button'\nawait aui.expectAllExist([\n  {\n    type: 'button',\n    text: {\n      value: 'Switch to Light',\n    },\n    relation: {\n      type: 'rightOf',\n      text: 'Images'\n    }\n  },\n]);\n\n// Check for existence of multiple elements\nawait aui.expectAllExist([\n  {\n    type: 'textfield',\n    relation: {\n      type: 'rightOf',\n      text: 'Email:'\n    }\n  },\n  {\n    type: 'element',\n    text: {\n      value: 'Switch to Dark'\n    }\n  },\n]);\n\n// Validate existence\nconst exists = await aui.expectAllExist([...]);\nexists.allExist // true when every element exists\n\n// Check which elements do not exist\n// with the elements property\nconst nonExistentElements = exists.elements.filter((e) => e.exists===false)\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"@param {ElementExistsQuery[]} query - Objects containing the required property 'type' and the optional properties 'text' and 'relation'."}),"\n",(0,i.jsx)(t.li,{children:"@property {string} query.type - The type of the element: 'otherElement' | 'switch' | 'element' | 'container' | 'checkbox' 'element' | 'button' | 'table' | 'text' | 'icon' | 'image' | 'textfield'"}),"\n",(0,i.jsx)(t.li,{children:"@property {Object} [query.text] - Object containing value and matching strategy."}),"\n",(0,i.jsx)(t.li,{children:"@property {string} query.text.value - The text to match for."}),"\n",(0,i.jsx)(t.li,{children:"@property {string} [query.text.matching] - Whether the text is matched using similarity, exact match or a regular expression."}),"\n",(0,i.jsx)(t.li,{children:"@property {Object} [query.relation] - Object describing the relationship between the clicked text and another element."}),"\n",(0,i.jsx)(t.li,{children:"@property {RelationsForConvenienceMethods} query.relation.type - The type of relation."}),"\n",(0,i.jsx)(t.li,{children:"@property {string} query.relation.text - The label or text associated with the related element or state."}),"\n",(0,i.jsx)(t.li,{children:"@returns {ExpectExistenceReturnValue.allExist} - If every element exists."}),"\n",(0,i.jsx)(t.li,{children:"@returns {ExpectExistenceReturnValue.elements} - ExpectExistenceElement[]."}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>l});var i=n(11504);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);