"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22652],{65144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(17624),o=n(4552);const s={displayed_sidebar:"apiSidebar"},i="annotate",r={id:"api/Annotation/annotate",title:"annotate",description:"production",source:"@site/versioned_docs/version-0.20.6/api/07-Annotation/annotate.md",sourceDirName:"api/07-Annotation",slug:"/api/Annotation/annotate",permalink:"/docs/0.20.6/api/Annotation/annotate",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.20.6/api/07-Annotation/annotate.md",tags:[],version:"0.20.6",frontMatter:{displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"getAll",permalink:"/docs/0.20.6/api/Getters/getall"},next:{title:"annotateInteractively",permalink:"/docs/0.20.6/api/Annotation/annotateInteractively"}},d={},c=[{value:"Annotate <code>DetectedElements</code> from <code>get()</code>",id:"annotate-detectedelements-from-get",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"annotate",children:"annotate"})}),"\n",(0,a.jsx)("span",{class:"theme-doc-version-badge badge badge--success",children:"production"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.p,{children:"Creates an annotated HTML file of the given image and saves it into the given path. If no image is given, then it captures the specified screen and annotates the captured image."}),"\n",(0,a.jsxs)(t.p,{children:["The annotated image is saved to ",(0,a.jsx)(t.code,{children:"<project_root>/report"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["See also ",(0,a.jsx)(t.a,{href:"/docs/0.20.6/general/Element%20Selection/annotations-and-screenshots#static-annotation",children:"the detailed explanation"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Examples:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"// The annoted image is saved to `<project_root>/report`.\nawait aui.annotate();\n\n// or\n\nUiControlClient.annotate({\n    imagePath: '<your-image-path>',\n    outputPath: '<path-of-the-generated-html>',\n    fileNamePrefix: '<prefix-of-the-output-file>',\n    customElements: CustomElementJson[], // A list of custom elements. The AI model will use them to detect elements similar to them.\n    elements: DetectedElement[] // A list of detected elements obtained with get()\n});\n"})}),"\n",(0,a.jsxs)(t.h2,{id:"annotate-detectedelements-from-get",children:["Annotate ",(0,a.jsx)(t.code,{children:"DetectedElements"})," from ",(0,a.jsx)(t.code,{children:"get()"})]}),"\n",(0,a.jsxs)(t.p,{children:["The method also accepts an optional parameter of type ",(0,a.jsx)(t.code,{children:"AnnotationRequest"}),". You can use this to annotate only the elements that where returned with a ",(0,a.jsx)(t.code,{children:"get()"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Example:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'const detectedElements = await aui.get().text().withText("User Interfaces?").exec();\nawait aui.annotate({ elements: detectedElements });\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Resulting annotation from a screen displaying the website ",(0,a.jsx)(t.a,{href:"https://www.askui.com/",children:"askui.com"})," where only the text ",(0,a.jsx)(t.code,{children:"User Interfaces?"})," has a bounding box:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot of askui.com website with a bounding box around the detected element User Interfaces?",src:n(67868).c+"",width:"1275",height:"563"})})]})}function h(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},67868:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/annotate_with_detected_elements-44889f673564afd1a7d443a0bd1a2b74.png"},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>i});var a=n(11504);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);