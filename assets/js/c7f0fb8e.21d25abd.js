"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54412],{61752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var i=t(17624),s=t(4552);const o={sidebar_position:3},l="Select Elements by Proximity",a={id:"general/Element Selection/relational-selectors",title:"Select Elements by Proximity",description:"A common problem while writing instructions which one encounters is interacting with elements which share the same text.",source:"@site/versioned_docs/version-0.17.0/general/03-Element Selection/relational-selectors.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/relational-selectors",permalink:"/docs/0.17.0/general/Element Selection/relational-selectors",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.17.0/general/03-Element Selection/relational-selectors.md",tags:[],version:"0.17.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Text Selectors",permalink:"/docs/0.17.0/general/Element Selection/text-and-element-selectors"},next:{title:"Extracting Data from Elements",permalink:"/docs/0.17.0/general/Element Selection/scraping-and-storing-lements"}},c={},r=[{value:"Selecting an Element by Visual Relation",id:"selecting-an-element-by-visual-relation",level:2},{value:"above()",id:"above",level:2},{value:"below()",id:"below",level:2},{value:"contains()",id:"contains",level:2},{value:"in()",id:"in",level:2},{value:"leftOf() and rightOf()",id:"leftof-and-rightof",level:2},{value:"nearestTo()",id:"nearestto",level:2},{value:"Additional Considerations About the Distance Metric",id:"additional-considerations-about-the-distance-metric",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"select-elements-by-proximity",children:"Select Elements by Proximity"}),"\n",(0,i.jsx)(n.p,{children:"A common problem while writing instructions which one encounters is interacting with elements which share the same text."}),"\n",(0,i.jsx)(n.p,{children:"An example can be seen when you interactively annotate your Visual Studio Code Editor.\nNotice that the magnifying glass icon and many other elements throughout the UI share the same name:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Icon mobile annotation one.",src:t(12904).c+"",width:"788",height:"164"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Icon mobile annotation one.",src:t(51628).c+"",width:"624",height:"198"})}),"\n",(0,i.jsx)(n.p,{children:"To ensure you\u2019re able to instruct AskUI to select the correct element, the use of relational element-descriptions can be employed.\nRelational element-descriptions describe the element relative to other elements in the UI."}),"\n",(0,i.jsx)(n.h2,{id:"selecting-an-element-by-visual-relation",children:"Selecting an Element by Visual Relation"}),"\n",(0,i.jsx)(n.p,{children:"After reading the next section you will know how to use the full power of all the relational element-descriptions. Additionally, you learn what pitfalls you can fall into and how to avoid them in the future."}),"\n",(0,i.jsxs)(n.p,{children:["We will use the ",(0,i.jsx)(n.a,{href:"https://selectorshub.com/xpath-practice-page/",children:"Selectorshub practice page"})," for the demonstration."]}),"\n",(0,i.jsx)(n.p,{children:"We\u2019ll discuss the following relational element-descriptions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#above",children:"above()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#below",children:"below()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#contains",children:"contains()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#in",children:"in()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#leftof-and-rightof",children:"leftOf()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#leftof-and-rightof",children:"rightOf()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#nearestto",children:"nearestTo()"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"above",children:"above()"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to click on a textfield and it is above an element, like for example a button with the text Submit. You can do it with ",(0,i.jsx)(n.code,{children:"above()"}),". The following code snippet moves the mouse to the textfield above the ",(0,i.jsx)(n.em,{children:"Submit"}),"-button:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await aui\n  .click()\n  .textfield()\n  .above()\n  .button()\n  .withText('Submit')\n  .exec();\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"above",src:t(42624).c+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.h2,{id:"below",children:"below()"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to select a textfield you can do so by finding the correct label, which is often above the textfield. The following code snippet moves the mouse to the textfield below the text ",(0,i.jsx)(n.em,{children:"Mobile Number"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .textfield()\n  .below()\n  .text()\n  .withText('Mobile Number')\n  .exec();\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"below",src:t(80102).c+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.h2,{id:"contains",children:"contains()"}),"\n",(0,i.jsxs)(n.p,{children:["For selecting an element, that contains another element, ",(0,i.jsx)(n.code,{children:"contains()"})," is the right candidate. It is especially useful if you want to select a textfield with a placeholder text inside it. The text inside the textfield is annotated as an element itself."]}),"\n",(0,i.jsxs)(n.p,{children:["If you have problems with selecting a specific element, always run ",(0,i.jsx)(n.code,{children:"annotate()"})," to create a screenshot of all the annotations or use ",(0,i.jsx)(n.code,{children:"annotateInteractively()"})," to see if you need to use ",(0,i.jsx)(n.code,{children:"contains()"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The following snippet moves the mouse to a textfield based on its placeholder text ",(0,i.jsx)(n.em,{children:"First Crush"})," which is contained in the textfield:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .textfield()\n  .contains()\n  .text()\n  .withText('First Crush')\n  .exec();\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"contains",src:t(63340).c+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.h2,{id:"in",children:"in()"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to target an element that is inside another element you can use ",(0,i.jsx)(n.code,{children:"in()"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"--------------------\n|     outerEl      |\n|  --------------  |\n|  |  innerEl   |  |\n|  --------------  |\n|                  |\n--------------------\n"})}),"\n",(0,i.jsx)(n.p,{children:"The following code snippet moves the mouse pointer to the text of the first textfield AskUI found:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .text()\n  .in()\n  .textfield()\n  .exec();\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"in",src:t(63928).c+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.h2,{id:"leftof-and-rightof",children:"leftOf() and rightOf()"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to select an element based on its location left or right of another element you have to use ",(0,i.jsx)(n.code,{children:"leftOf()"})," or ",(0,i.jsx)(n.code,{children:"rightOf()"})," respectively."]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udca1 If you do not specify another element-description like ",(0,i.jsx)(n.code,{children:"withText()"})," then you will get the nearest element. Otherwise, AskUI retrieves the nearest element that matches the element-description!"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .text()\n  .leftOf()\n  .text()\n  .withText('Denmark')\n  .exec();\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"leftOf",src:t(76384).c+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .text()\n  .rightOf()\n  .text()\n  .withExactText('Joe Root')\n  .exec();\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"rightOf",src:t(12368).c+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.h2,{id:"nearestto",children:"nearestTo()"}),"\n",(0,i.jsxs)(n.p,{children:["Filtering with the ",(0,i.jsx)(n.code,{children:"nearestTo()"})," will return the element nearest to another element. This is useful when the direction is not clear on where to search. Especially responsive designs are prone to wrap elements into a new line where ",(0,i.jsx)(n.code,{children:"leftOf()"})," and ",(0,i.jsx)(n.code,{children:"rightOf()"})," would fail."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .textfield()\n  .nearestTo()\n  .text()\n  .withTextRegex('User Em*')\n  .exec();\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"nearestTo",src:t(37312).c+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.h2,{id:"additional-considerations-about-the-distance-metric",children:"Additional Considerations About the Distance Metric"}),"\n",(0,i.jsxs)(n.p,{children:["The distance is based entirely on physical distance ",(0,i.jsx)(n.strong,{children:"to the bounding box of a specified element"})," for ",(0,i.jsx)(n.code,{children:"above()"}),", ",(0,i.jsx)(n.code,{children:"below()"}),", ",(0,i.jsx)(n.code,{children:"leftOf()"})," and ",(0,i.jsx)(n.code,{children:"rightOf()"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.code,{children:"above()"})," it takes the upper-left and upper right-corner coordinates of the bounding box. The area that is searched is bordered by orthogonal lines upwards from these coordinates. Every element that is touched by that area can be found."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"  |  ------------  |\n  |  | Returned |  |\n  |  ------------  |\n  |                |\n  |                |   ----------------\n  |   SEARCHED     |   | Not returned |\n  |     AREA       |   ----------------\n  |                |\n  ------------------\n  |     button     |\n  ------------------\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.code,{children:"nearestTo()"})," it also considers special cases, for example, modal dialogues. Therefore the element selected by AskUI might sometimes be wrong from a user's point of view."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"moveMouseTo()"})," like in the following example to see what element an instruction targets."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"await aui\n  .moveMouseTo()\n  .textfield()\n  .above()\n  .button()\n  .withText('Submit')\n  .exec()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},42624:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/above-dc81b84a9b34574ec4f2751a6a13ea86.gif"},80102:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/below-167d0bdcc85218d9a5f6b9c4a6a6761e.gif"},63340:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/contains-092964bf7692f6d8114d6016661d6760.gif"},63928:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/in-dc3fb4817216d048579435358280132f.gif"},76384:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/leftOf-d2505e3702e9d77123f23dab54271821.gif"},37312:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/nearestTo-dec2bcd81d965c45a30127b3ee771bc6.gif"},12368:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/rightOf-042e5b9b516690b86368e0057995934b.gif"},12904:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/relational_selectors_same_icon1-3583aa6ca6c211148d995fc843e7487c.png"},51628:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/relational_selectors_same_icon2-a52291bccba1da0e71acf8b4533ac9e5.png"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>l});var i=t(11504);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);