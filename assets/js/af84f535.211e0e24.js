"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34456],{65764:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>A});var s=t(17624),o=t(4552);const i={sidebar_position:2,title:"Custom Elements"},l="Custom Elements",c={id:"general/Element Selection/custom-elements",title:"Custom Elements",description:"With Custom Elements, you can define a custom element-description based on how the element is displayed on the screen. This can be particularly useful in situations where standard element-descriptions are unreliable due to the non-standard properties of the element:",source:"@site/docs/general/03-Element Selection/custom-elements.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/custom-elements",permalink:"/docs/next/general/Element Selection/custom-elements",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/03-Element Selection/custom-elements.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Custom Elements"},sidebar:"docsSidebar",previous:{title:"Recommended Practices",permalink:"/docs/next/general/Element Selection/recommended-practices"},next:{title:"Text Selectors",permalink:"/docs/next/general/Element Selection/text-and-element-selectors"}},r={},A=[{value:"Understanding the <code>customElement()</code> in AskUI",id:"understanding-the-customelement-in-askui",level:2},{value:"Step-By-Step Guide",id:"step-by-step-guide",level:2},{value:"0. Create a Folder for Your Custom Elements",id:"0-create-a-folder-for-your-custom-elements",level:3},{value:"1. Create a Screenshot of the Element",id:"1-create-a-screenshot-of-the-element",level:3},{value:"2. Save It in Your AskUI Project Folder",id:"2-save-it-in-your-askui-project-folder",level:3},{value:"3. Write the Code",id:"3-write-the-code",level:3},{value:"Recommended Structure and Naming",id:"recommended-structure-and-naming",level:2},{value:"AskUI Project Structure",id:"askui-project-structure",level:3},{value:"Screenshot Naming Scheme",id:"screenshot-naming-scheme",level:3},{value:"Two Things to be Aware of When Using <code>customElement()</code>",id:"two-things-to-be-aware-of-when-using-customelement",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"custom-elements",children:"Custom Elements"})}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.strong,{children:"Custom Elements"}),", you can define a custom element-description based on how the element is displayed on the screen. This can be particularly useful in situations where standard element-descriptions are unreliable due to the non-standard properties of the element:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Two elements only differ stably in color:\n",(0,s.jsx)(n.img,{src:t(980).c+"",width:"168",height:"60"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Unknown icons or logos\n",(0,s.jsx)(n.img,{src:t(53348).c+"",width:"393",height:"91"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Very low contrast where detection fails:\n",(0,s.jsx)(n.img,{src:t(25852).c+"",width:"189",height:"44"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This page will explain step-by-step how to create a ",(0,s.jsx)(n.strong,{children:"Custom Element"})," and also how to structure your workflows, so they remain maintainable."]}),"\n",(0,s.jsxs)(n.h2,{id:"understanding-the-customelement-in-askui",children:["Understanding the ",(0,s.jsx)(n.code,{children:"customElement()"})," in AskUI"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"customElement()"})," is an element to look for on the screen that is defined by the user with a given screenshot of that element. The following code shows the usage of a ",(0,s.jsx)(n.code,{children:"customElement()"})," by clicking a custom element that looks like the element in the file ",(0,s.jsx)(n.code,{children:"logo.png"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await aui\n    .click()\n    .customElement({\n        customImage: './logo.png', // required\n        name: 'myLogo', // optional\n        threshold: 0.9, // optional, defaults to 0.9\n        rotationDegreePerStep: 0, // optional, defaults to 0\n        imageCompareFormat: 'grayscale', // optional, defaults to 'grayscale'\n    })\n    .exec();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Arguments:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"customImage"})," (",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.code,{children:"string"}),", required"]}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A cropped image in the form of a base64 string or file path."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"name"})," (",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.code,{children:"string"}),", optional"]}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A unique name that can be used for filtering for the custom element."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"threshold"})," (",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.code,{children:"number"}),", optional"]}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A threshold for how much a UI element needs to be similar to the custom element as defined. Takes values between ",(0,s.jsx)(n.code,{children:"0.0"})," (== all elements are recognized as the custom element which is probably not what you want) and ",(0,s.jsx)(n.code,{children:"1.0"})," (== elements need to look exactly like the ",(0,s.jsx)(n.code,{children:"customImage"})," which is unlikely to be achieved as even minor differences count). Defaults to ",(0,s.jsx)(n.code,{children:"0.9"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"rotationDegreePerStep"})," (",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.code,{children:"number"}),", optional"]}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Step size in rotation degree. Rotates the custom image by this step size until 360\xb0 is exceeded. The range is from ",(0,s.jsx)(n.code,{children:"0"})," to ",(0,s.jsx)(n.code,{children:"360"}),". Defaults to ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"imageCompareFormat"})," (",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.code,{children:"'RGB' | 'grayscale'"}),", optional"]}),"):","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The color compare style. ",(0,s.jsx)(n.code,{children:"grayscale"})," compares the brightness of each pixel whereas ",(0,s.jsx)(n.code,{children:"RGB"})," compares all three color. ",(0,s.jsx)(n.code,{children:"grayscale"})," is faster in execution, but ",(0,s.jsx)(n.code,{children:"RGB"})," is generally more accurate, both in sensitivity and specificity. Defaults to ",(0,s.jsx)(n.code,{children:"grayscale"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"step-by-step-guide",children:"Step-By-Step Guide"}),"\n",(0,s.jsx)(n.p,{children:"Now that you know how to click a custom element you will create one on your own step-by-step."}),"\n",(0,s.jsxs)(n.p,{children:["You will move your mouse cursor to a little human-figure ",(0,s.jsx)(n.img,{alt:"human-figure",src:t(94324).c+"",width:"42",height:"48"})," as shown in the video below."]}),"\n",(0,s.jsx)("video",{controls:!0,children:(0,s.jsx)("source",{src:"https://d2dnep8p8ldagm.cloudfront.net/assets/docs/blog_customElement_askui_google_street_view.mp4"})}),"\n",(0,s.jsx)(n.h3,{id:"0-create-a-folder-for-your-custom-elements",children:"0. Create a Folder for Your Custom Elements"}),"\n",(0,s.jsxs)(n.p,{children:["We recommend to create a folder ",(0,s.jsx)(n.code,{children:"custom_elements"})," in project's directory to store all the screenshots for custom elements (See also the section ",(0,s.jsx)(n.a,{href:"#recommended-structure-and-naming",children:"Recommended Structure and Naming"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"project_root/\n\u251c\u2500 askui_example/\n\u251c\u2500 node_modules/\n\u251c\u2500 custom_elements/\n\u251c\u2500 .eslintignore\n\u251c\u2500 .eslintrc.json\n\u251c\u2500 package.json\n\u251c\u2500 tsconfig.json\n"})}),"\n",(0,s.jsx)(n.h3,{id:"1-create-a-screenshot-of-the-element",children:"1. Create a Screenshot of the Element"}),"\n",(0,s.jsxs)(n.p,{children:["You can use your favorite ",(0,s.jsx)(n.em,{children:"Snipping"})," tool for this. Our recommendations for the different operating systems are as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.a,{href:"https://support.microsoft.com/en-us/windows/use-snipping-tool-to-capture-screenshots-00246869-1843-655f-f220-97299b865f6b",children:"Windows Snipping Tool (Win 7, 10, 11)"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.em,{children:"Rectangle"})," as area"]}),"\n",(0,s.jsx)(n.li,{children:"You will be asked to select a certain portion of the screen"}),"\n",(0,s.jsxs)(n.li,{children:["The captured image will be stored in the clipboard, save it to ",(0,s.jsx)(n.code,{children:"custom_elements"})," folder."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["macOS: Press ",(0,s.jsx)(n.code,{children:"cmd"})," + ",(0,s.jsx)(n.code,{children:"shift"})," + ",(0,s.jsx)(n.code,{children:"5"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Adjust the area to only enclose your custom element"}),"\n",(0,s.jsxs)(n.li,{children:["Select the ",(0,s.jsx)(n.code,{children:"custom_elements"})," folder under ",(0,s.jsx)(n.code,{children:"Options - Save to"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Linux: ",(0,s.jsx)(n.a,{href:"https://shutter-project.org/",children:"Shutter"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["The quality of the ",(0,s.jsx)(n.strong,{children:"crop-out"})," plays a big role in how good the element will be recognized. Make sure to:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Save it as a ",(0,s.jsx)(n.strong,{children:"PNG"})," to avoid artifacts from compression"]}),"\n",(0,s.jsx)(n.li,{children:"Crop it out as tight as possible. At best with no pixel space on the borders."}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"2-save-it-in-your-askui-project-folder",children:"2. Save It in Your AskUI Project Folder"}),"\n",(0,s.jsxs)(n.p,{children:["Save the image in your project's directory folder ",(0,s.jsx)(n.code,{children:"custom_elements"})," with the name ",(0,s.jsx)(n.code,{children:"human-figure.png"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"project_root/\n\u251c\u2500 askui_example/\n\u251c\u2500 node_modules/\n\u251c\u2500 custom_elements/\n  \u251c\u2500 human-figure.png\n\u251c\u2500 .eslintignore\n\u251c\u2500 .eslintrc.json\n\u251c\u2500 package.json\n\u251c\u2500 tsconfig.json\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-write-the-code",children:"3. Write the Code"}),"\n",(0,s.jsx)(n.p,{children:"Finally you can move the mouse cursor to the custom element."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// move the mouse to the custom element\nawait aui.moveMouseTo()\n    .customElement({\n        customImage: "./custom_elements/human-figure.png",\n        name: "street-view-icon",\n        threshold: 0.9,\n    })\n    .exec();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"recommended-structure-and-naming",children:"Recommended Structure and Naming"}),"\n",(0,s.jsx)(n.p,{children:"When you have more than a few custom elements you want to think about the correct folder structure of your AskUI project and a naming scheme for each custom element. This ensures maintainability of your project."}),"\n",(0,s.jsx)(n.h3,{id:"askui-project-structure",children:"AskUI Project Structure"}),"\n",(0,s.jsxs)(n.p,{children:["The custom elements screenshots should not clutter your ",(0,s.jsx)(n.code,{children:"root"})," folder of your AskUI project. Create a ",(0,s.jsx)(n.code,{children:"custom_elements"})," folder to store all your screenshots."]}),"\n",(0,s.jsx)(n.p,{children:"If you have many workflows with custom elements only used in specific workflows, you can think about creating subfolders for each workflow as shown in the example below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"project_root/\n\u251c\u2500 askui_example/\n\u251c\u2500 node_modules/\n\u251c\u2500 custom_elements/\n  \u251c\u2500 workflow1/\n     \u251c\u2500 lastname.form.textfield.png # path: ./custom_elements/workflow1/lastname.form.textfield.png\n     \u251c\u2500 ...\n  \u251c\u2500 workflow2/\n  \u251c\u2500 ...\n\u251c\u2500 .eslintignore\n\u251c\u2500 .eslintrc.json\n\u251c\u2500 package.json\n\u251c\u2500 tsconfig.json\n\u251c\u2500 human-figure.png\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["There is no ",(0,s.jsx)(n.em,{children:"one-size-fits-all"})," structure. If you develop workflows for different operating systems (OS) you may also want to create folders for each OS."]})}),"\n",(0,s.jsx)(n.h3,{id:"screenshot-naming-scheme",children:"Screenshot Naming Scheme"}),"\n",(0,s.jsx)(n.p,{children:"It is also a good idea to create a naming scheme for screenshots. This will ensure that you can update them easier later."}),"\n",(0,s.jsxs)(n.p,{children:["A proven scheme is: ",(0,s.jsx)(n.code,{children:"free-description.function.class.png"})]}),"\n",(0,s.jsxs)(n.p,{children:["For example for a ",(0,s.jsx)(n.code,{children:"textfield"})," with the label ",(0,s.jsx)(n.code,{children:"lastname"})," that is embedded in a form this gives you: ",(0,s.jsx)(n.code,{children:"lastname.form.textfield.png"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"two-things-to-be-aware-of-when-using-customelement",children:["Two Things to be Aware of When Using ",(0,s.jsx)(n.code,{children:"customElement()"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1) Create the Custom Image by Cropping it From The Actual Screen"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To find a matching element from the screen, the custom image ",(0,s.jsx)(n.strong,{children:"must be very similar as it is displayed on the screen."})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2) The Time of the Execution may Increase by a Notable Amount"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In some cases using a ",(0,s.jsx)(n.code,{children:"customElement()"})," increases the runtime by a notable amount. Therefore, if the task could be accomplished with other element-descriptions such as ",(0,s.jsx)(n.code,{children:"icon()"}),", ",(0,s.jsx)(n.code,{children:"button()"}),", or ",(0,s.jsx)(n.code,{children:"text()"}),", then it may be better to avoid using the ",(0,s.jsx)(n.code,{children:"customElement()"}),"."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},25852:(e,n,t)=>{t.d(n,{c:()=>s});const s="data:image/png;base64,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"},980:(e,n,t)=>{t.d(n,{c:()=>s});const s="data:image/png;base64,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"},53348:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/custom-elements-icon-not-recognized-bb8a54eb0de8f59e2ab627e340bd7f77.png"},94324:(e,n,t)=>{t.d(n,{c:()=>s});const s="data:image/png;base64,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"},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>l});var s=t(11504);const o={},i=s.createContext(o);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);