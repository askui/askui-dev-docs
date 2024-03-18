"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87296],{38108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(17624),s=t(4552);const o={sidebar_position:1,title:"Annotations, Screenshots and Videos"},a=void 0,r={id:"general/Element Selection/annotations-and-screenshots",title:"Annotations, Screenshots and Videos",description:"Index",source:"@site/docs/general/03-Element Selection/annotations-and-screenshots.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/annotations-and-screenshots",permalink:"/docs/next/general/Element Selection/annotations-and-screenshots",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/03-Element Selection/annotations-and-screenshots.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Annotations, Screenshots and Videos"},sidebar:"docsSidebar",previous:{title:"Automating Multiple Devices",permalink:"/docs/next/general/Executing Automations/multi-device-automation"},next:{title:"Web Search on Android",permalink:"/docs/next/general/Tutorials/android-search-in-browser"}},c={},l=[{value:"Interactive Annotation",id:"interactive-annotation",level:2},{value:"Static Annotation",id:"static-annotation",level:2},{value:"Taking Screenshots",id:"taking-screenshots",level:2},{value:"Recording Videos",id:"recording-videos",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Index"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#interactive-annotation",children:"Interactive Annotation"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#static-annotation",children:"Static Annotation"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#taking-screenshots",children:"Taking Screenshots"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#recording-videos",children:"Recording Videos"})}),"\n",(0,i.jsx)(n.h2,{id:"interactive-annotation",children:"Interactive Annotation"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Windows Users"})}),(0,i.jsxs)(n.p,{children:["Please use ",(0,i.jsx)(n.code,{children:"annotate()"})," as explained ",(0,i.jsx)(n.a,{href:"#static-annotation",children:"in the section below"}),". The interactive annotation ",(0,i.jsx)(n.code,{children:"aui.annotateInteractively()"})," currently leads to an error on Windows."]})]}),"\n",(0,i.jsx)(n.p,{children:"An interactive annotation is in essence three components:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"A screenshot of whatever the AskUI controller is told to see, as defined in the configuration file:"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Screenshot of Visual Studio Code without annotations.",src:t(69764).c+"",width:"1937",height:"914"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Annotations, marked by the red boxes you see, which are added by the machine learning model."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Screenshot of Visual Studio Code with annotations as red bounding boxes.",src:t(77317).c+"",width:"1266",height:"949"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Element-Descriptions, which are labels applied to the annotations of the screenshot."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Clicking an element will copy this element-description, which we can then use in the ",(0,i.jsx)(n.a,{href:"/docs/next/general/Getting%20Started/write-your-first-instruction",children:"step 3 of Write Your First Instruction"}),", which is actually using that run instructions."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Interactive Annotation in action",src:t(42352).c+"",width:"2560",height:"1080"})}),"\n",(0,i.jsx)(n.h2,{id:"static-annotation",children:"Static Annotation"}),"\n",(0,i.jsxs)(n.p,{children:["The helper function ",(0,i.jsx)(n.code,{children:"annotate()"})," creates an annotated HTML file of the given image and saves it into the given path. If no image is given, then it captures the specified screen and annotates the captured image."]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Synopsis and Arguments"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Synopsis"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"UiControlClient.annotate();\n\n// or\n\nUiControlClient.annotate({\n    imagePath: '<your-image-path>',\n    outputPath: '<path-of-the-generated-html>',\n    fileNamePrefix: '<prefix-of-the-output-file>',\n    customElements: CustomElementJson[] // more details in the example below\n});\n"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If no argument is given,"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A screenshot of your specified screen will be taken, and annotated. Thereafter, it will be saved as an interactive HTML file into the ",(0,i.jsx)(n.code,{children:"report/"})," folder."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"imagePath"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If defined, the image at the path is loaded and annotated."}),"\n",(0,i.jsx)(n.li,{children:"If not defined, a screenshot of your specified screen is taken and annotated."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"outputPath"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If defined, the generated HTML report will be saved in this path."}),"\n",(0,i.jsxs)(n.li,{children:["If not defined, a folder ",(0,i.jsx)(n.code,{children:"report/"})," will be created in the project root."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"fileNamePrefix"}),": The prefix for the resulting HTML report."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"customElements"}),": A ",(0,i.jsx)(n.em,{children:"list"})," of custom elements. The AI model will use them to detect elements similar to them."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"elements"}),": A ",(0,i.jsx)(n.em,{children:"list"})," of detected elements obtained with ",(0,i.jsx)(n.code,{children:"get()"}),". Only the bounding boxes for those elements will be rendered."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"/*\nTakes a screenshot of your selected display,\nand produces an HTML report file inside the\ndefault output path <project_root>/report.\n*/\nawait aui.annotate();\n\n\n/*\nLoads the image 'my-screenshot.png'\nand produces an HTML report file inside\nthe output path 'annotation-reports/'\n*/\nawait aui.annotate(\n    {\n        imagePath: 'my-screenshot.png',\n        outputPath: 'annotation-reports/'\n    });\n\n\n/*\nLoads the image 'my-screenshot.png' together with\nthe custom elements and produces an HTML report file\ninside the output path 'annotation-reports/'\n*/\nawait aui.annotate(\n    {\n    imagePath: 'my-screenshot.png',\n    outputPath: 'annotaion-reports/',\n    customElements: [\n        {\n            customImage: '<custom_image_path|base64Image>',\n            imageCompareFormat: 'grayscale',\n            name: 'custom element 1'\n        },\n        {\n            /*\n            for this custom element the OCR AI model\n            will be used to extract text from the image,\n            since no name was given.\n            */\n            customImage: '<custom_image2_path|base64Image>',\n            imageCompareFormat: 'RGB',\n        }\n    ]\n    });\n\n/*\nAnnotates only the text elements with the text 'User Interfaces?'\n*/\nconst detectedElements = await aui.get().text().withText(\"User Interfaces?\").exec();\nawait aui.annotate(\n    { \n        elements: detectedElements\n    });\n"})}),"\n",(0,i.jsx)(n.h2,{id:"taking-screenshots",children:"Taking Screenshots"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to see what AskUI sees at a specific point in the execution you can use TypeScript to create a screenshot. Here is a code-snippet you can copy and paste into your code that saves an image with the name ",(0,i.jsx)(n.strong,{children:"screenshot.png"})," to the root-folder of your project."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Do not forget the import mentioned at the start of the snippet!"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"// Add this to the start of your AskUI-file containing your workflows/instructions\nimport * as fs from 'fs';\n\n// First, get all the information from the annotation\n// This will also save an interactive HTML file to the 'report/' folder\nconst annotation = await aui.annotate();\n\n// The screenshot is contained as a string in 'base64' format\n// Create a buffer with the base64 image\nlet buf = Buffer.from(annotation.image.split('base64,')[1], 'base64');\n\n// Write the file \nfs.writeFileSync(\"./test.png\", buf);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"recording-videos",children:"Recording Videos"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["This page is currently under construction. If you have any questions, please feel free to reach out to ",(0,i.jsx)(n.a,{href:"mailto:info@askui.com",children:"info@askui.com"})," or book a meeting with Jonas ",(0,i.jsx)(n.a,{href:"https://calendly.com/jonas-menesklou/digital-get-to-know",children:"over Calendly"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},69764:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/interactive_annotation1-d1f890769c71495de9e9dd06f2878d60.png"},77317:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/interactive_annotation2-d508cb51bc1046981cf7dd6377e73993.png"},42352:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/interactive-annotate-1e441df77569118330ccd1e7b50d3d0f.gif"},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>a});var i=t(11504);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);