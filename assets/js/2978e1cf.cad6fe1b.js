"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31327],{57696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(17624),r=n(4552);n(86212),n(22440);const o={sidebar_position:7,pagination_next:"general/Getting Started/whats-next"},s="Interact with Elements",a={id:"general/Getting Started/write-your-first-instruction-part-two",title:"Interact with Elements",description:"Step 1: Interacting with Your Target Element",source:"@site/versioned_docs/version-0.20.7/general/01-Getting Started/write-your-first-instruction-part-two.md",sourceDirName:"general/01-Getting Started",slug:"/general/Getting Started/write-your-first-instruction-part-two",permalink:"/docs/general/Getting Started/write-your-first-instruction-part-two",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.20.7/general/01-Getting Started/write-your-first-instruction-part-two.md",tags:[],version:"0.20.7",sidebarPosition:7,frontMatter:{sidebar_position:7,pagination_next:"general/Getting Started/whats-next"},sidebar:"docsSidebar",previous:{title:"Create Your First Instruction",permalink:"/docs/general/Getting Started/write-your-first-instruction"},next:{title:"What's Next?",permalink:"/docs/general/Getting Started/whats-next"}},l={},c=[{value:"Step 1: Interacting with Your Target Element",id:"step-1-interacting-with-your-target-element",level:3},{value:"Step 2: Identifying Your Target Element",id:"step-2-identifying-your-target-element",level:3},{value:"Step 3: Execute an Instruction",id:"step-3-execute-an-instruction",level:3},{value:"Where to Go Next?",id:"where-to-go-next",level:2}];function u(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"interact-with-elements",children:"Interact with Elements"})}),"\n",(0,i.jsx)(t.h3,{id:"step-1-interacting-with-your-target-element",children:"Step 1: Interacting with Your Target Element"}),"\n",(0,i.jsxs)(t.p,{children:["You first need an ",(0,i.jsx)(t.em,{children:"action"})," to interact with the element. You want to ",(0,i.jsx)(t.code,{children:"click"})," the button so you add a ",(0,i.jsx)(t.code,{children:"click()"})," to the instruction as you can see in the following code. Check our ",(0,i.jsx)(t.a,{href:"/docs/api/Actions/click",children:"API documentation"})," for all the actions."]}),"\n",(0,i.jsx)(t.p,{children:"The code is commented out for now as it is not valid yet."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:'title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers',children:"it('should click on my element', async () => {\n//  await aui\n//    .click(); // your action\n});\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"step-2-identifying-your-target-element",children:"Step 2: Identifying Your Target Element"}),"\n",(0,i.jsxs)(t.p,{children:["This step is about pinpointing the exact UI element (like a button or link) you want to interact with. The element's properties (called ",(0,i.jsx)(t.em,{children:"element-description"}),") act like a unique identifier for each UI component."]}),"\n",(0,i.jsxs)(t.p,{children:["First hover over the button containing the ",(0,i.jsx)(t.code,{children:"2"})," and do a left mouse click. You now have the element-description in your clipboard."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Hovering over the button containing the 2",src:n(32964).c+"",width:"174",height:"138"})}),"\n",(0,i.jsx)(t.p,{children:"Then add it to your action as shown in the code below."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:'title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers',children:"it('should click on my element', async () => {\n  await aui\n           .click() // your action\n           .button() // your element-description\n           .exec();\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["As you can see AskUI tries to click a ",(0,i.jsx)(t.code,{children:"button()"})," but it does not know ",(0,i.jsx)(t.em,{children:"which one"})," yet. Generally you need to think about what makes the target element unique visually. Possibly over multiple runs. In this case, there is no other button with the label ",(0,i.jsx)(t.code,{children:"2"}),", so targeting a button that contains the text ",(0,i.jsx)(t.code,{children:"2"})," should be a reliable way to target this specific element. Also check out all the ",(0,i.jsx)(t.a,{href:"/docs/api/API/table-of-contents#element-descriptions",children:"element-descriptions"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:'title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers',children:"it('should click on my element', async () => {\n  await aui\n           .click() // your action\n           .button().contains().text('2') // your element-description\n           .exec();\n});\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["You can freely go to ",(0,i.jsx)(t.a,{href:"#step-3-execute-an-instruction",children:"Step 3: Executing an Instruction"})," before you finish the whole example to see how your workflow runs before you are finished."]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["Now you run into a problem that somehow ",(0,i.jsx)(t.code,{children:"."})," is not detected as a text and you have a lot of buttons already. So targeting the button with ",(0,i.jsx)(t.code,{children:"."})," only by specifying a button will not work. But you can use a relational selector for this."]}),"\n",(0,i.jsxs)(t.p,{children:["You will target the ",(0,i.jsx)(t.code,{children:"."}),"-button by selecting it in ",(0,i.jsx)(t.em,{children:"relation"})," to another button that is recognized. You already know that the ",(0,i.jsx)(t.code,{children:"2"}),"-button works. So you instruct AskUI to click the button ",(0,i.jsx)(t.code,{children:"below"})," the ",(0,i.jsx)(t.code,{children:"2"}),"-button:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"await aui.click()\n         .button() // This is your target\n         .below() // This is your relation\n         .button().contains().text('2') // This is your anchor\n         .exec();\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["After you entered ",(0,i.jsx)(t.code,{children:"6"})," as described ",(0,i.jsx)(t.a,{href:"#step-1-interacting-with-your-target-element",children:"in step 2 and 3"})," you realize that the ",(0,i.jsx)(t.code,{children:"+"})," is not recognized as text but as an icon. For these cases where an element is not recognized correctly or not recognized at all, you can use ",(0,i.jsx)(t.code,{children:"customElement()"})," with which you select the element based on an image of the element."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["The annotation is dependent on your screen resolution and settings! The ",(0,i.jsx)(t.code,{children:"+"})," may be detected correctly on your machine. In this case, please follow along as if it were ",(0,i.jsx)(t.em,{children:"not"})," detected correctly."]})}),"\n",(0,i.jsxs)(t.p,{children:["Do the following to select the ",(0,i.jsx)(t.code,{children:"+"}),"-button:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a new folder ",(0,i.jsx)(t.code,{children:"custom_elements"})," in your AskUI Project. Then"]}),"\n",(0,i.jsxs)(t.li,{children:["Crop out the ",(0,i.jsx)(t.code,{children:"+"}),"-button from your screen like this with a snipping tool.",(0,i.jsx)(t.br,{}),"\n","(",(0,i.jsx)(t.strong,{children:"Make sure to get the whole element, but crop it out as tightly as possible"}),"): ",(0,i.jsx)(t.img,{alt:"Cropped out +-button",src:n(20255).c+"",width:"124",height:"39"})]}),"\n",(0,i.jsxs)(t.li,{children:["Save it with the name ",(0,i.jsx)(t.code,{children:"plus.clickable.button.png"})," in ",(0,i.jsx)(t.code,{children:"custom_elements"})]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"project_root/\n\u251c\u2500 askui_example/\n\u251c\u2500 node_modules/\n\u251c\u2500 custom_elements/\n  \u251c\u2500 plus.clickable.button.png\n\u251c\u2500 .eslintignore\n\u251c\u2500 .eslintrc.json\n\u251c\u2500 package.json\n\u251c\u2500 tsconfig.json\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"  await aui.click()\n           .customElement({\n             customImage: './custom_elements/plus.clickable.button.png',\n           })\n           .exec();\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"step-3-execute-an-instruction",children:"Step 3: Execute an Instruction"}),"\n",(0,i.jsxs)(t.p,{children:["Comment out the annotation instruction: Use ",(0,i.jsx)(t.code,{children:"xit"})," to ignore the annotation instruction in future runs.\nThe final version should look like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:'title="askui_example/my-first-askui-test-suite.test.ts" showLineNumbers',children:"describe('jest with askui', () => {\n\n  xit('should generate an annotation', async () => {\n    await aui.annotate(); // your inactive annotation\n  });\n\n  it('should click on my element', async () => {\n    await aui.click().button().contains().text('2').exec();\n    await aui.click()\n             .button() // This is your target\n             .below()\n             .button().contains().text('2') // This is your anchor\n             .exec();\n    await aui.click().button().contains().text('6').exec();\n    await aui.click()\n             .customElement({\n               customImage: './custom_elements/plus.clickable.button.png',\n             })\n             .exec();\n    await aui.click().button().contains().text('2').exec();\n\n    // The attentive reader might notice that the last step\n    // is missing: You should know how that works by now hopefully ;-)\n    // If you need help visit https://app.outverse.com/askui/home\n  });\n});\n"})}),"\n",(0,i.jsx)(t.p,{children:"As before, run the code in your terminal:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Windows: Enter ADE and run ",(0,i.jsx)(t.code,{children:"AskUI-RunProject"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["macOS/Linux: Run ",(0,i.jsx)(t.code,{children:"npm run askui"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"You should see AskUI take over your mouse, mouse over the elements you chose and click."}),"\n",(0,i.jsxs)(t.p,{children:["Congratulations! You\u2019ve just built your first automation using AskUI. ","\ud83c\udf89"]}),"\n",(0,i.jsx)(t.h2,{id:"where-to-go-next",children:"Where to Go Next?"}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["We compiled a ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"/docs/general/Element%20Selection/recommended-practices",children:"list of Recommended Practices"})})," that will help you to implement your workflows."]}),(0,i.jsxs)(t.p,{children:["You can check out ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"/docs/general/Tutorials/",children:"tutorials for inspiration"})}),"."]}),(0,i.jsxs)(t.p,{children:["Or learn about ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"/docs/general/Executing%20Automations/mobile-automation",children:"Mobile Automation"})}),"."]})]})]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},22440:(e,t,n)=>{n.d(t,{c:()=>s});n(11504);var i=n(65456);const r={tabItem:"tabItem_Ymn6"};var o=n(17624);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.c)(r.tabItem,s),hidden:n,children:t})}},86212:(e,t,n)=>{n.d(t,{c:()=>f});var i=n(11504),r=n(65456),o=n(77288),s=n(55592),a=n(83472),l=n(95068),c=n(30604),u=n(3244);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,c.wn)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function A(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.Uz)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._M)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!A({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:o}))),[c,d]=g({queryString:n,groupId:r}),[m,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.IN)(n);return[r,(0,i.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),x=(()=>{const e=c??m;return A({value:e,tabValues:o})?e:null})();(0,a.c)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!A({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),p(e)}),[d,p,o]),tabValues:o}}var p=n(89788);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(17624);function w(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.MV)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=a[n].value;r!==i&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.c)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:(0,r.c)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,r.c)("tabs-container",x.tabList),children:[(0,b.jsx)(w,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function f(e){const t=(0,p.c)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},20255:(e,t,n)=>{n.d(t,{c:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAnCAYAAADNVyyKAAABVmlDQ1BJQ0MgUHJvZmlsZQAAKJF1kD9IQnEUhT9Ls6KooKGhQaKiQSPMwFUdImgQKzG359Ms8M/jaUTQWLvQ1GbW2FyNjQ1BUdAg0dzSVLlUvO5PK63owuV+HA6Hy4G2Ts0wMnYgmyuakdmgK7YcdzkfsDNAFw46NL1gBMLhebHwdX9O7RabujcelXU+dlS9nhjZj5afrx7z8d6//h/TnUwVdLlvslO6YRbB5hYObxQNxVvCg6Y8JVxSnG7woeJEg0/rnsVISPhCuF9f1ZLCd8LuRIuebuFsZl3//EF935PKLS2oHNlhosTw4mMGPx6yrJL8x++r+0PkMdjEZI20uIu4CIhikCElPEcOnUncwl6mVLbq+Xd/TS1fAf8LtJeaWmIPTnZgqNrURsvQtw3Hl4Zmat+t2mr2wsq0t8E9QXDcW9bTODh34b1kWa8Vy3o/kHzp6Cz3AXY/ZP1xnfSrAAAAVmVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADkoYABwAAABIAAABEoAIABAAAAAEAAAB8oAMABAAAAAEAAAAnAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdHuUL8cAAAHVaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjM5PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEyNDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrk1YnVAAABv0lEQVR4Ae2cvUoDURCF54pg0K1Eu40iqGi0jG+gvpWCjyKCnQqSB1A7Yzp/EFYQSTrFSiVWunPDXiYQIa1zzjQ7m6T5zrdzE7I/4acsYcEkMFmR9vvf8vr2Lh+fX8JjoErl/25DCJLNTMv83KzUalMJJOiEq+znlx5Fp1j8NCp+aTFP0icUTSebU+1HsiVRr+q3qihcl3GW3wSs3yic0+1XtpJZv1G4b1zS2QQo3KYB0FM4gGSLSOE2DYCewgEkW0QKt2kA9BQOINkiUrhNA6CHFG7/iABwPIQIKXyzsSqdzs1QECg7kMJR5I7iTOfDR73p6bX7u1spiiIhXV1eSK/blSzLZHtnN73uvYER3m5fy9npSfLZap2XFwhkkuc5lPB4AcTD41MKAqHZWF+Rw6NjaTa3EHAjY2NtOW75HQ6jfAAKKXxv/0Dq9QUw1QNcyCUd0TSXdETrJTPkkg7qOmJTOJh9CqdwsATAcDnhFA6WABguJ5zCwRIAw+WEIwrXW0pZfhOwfuOE643jLL8JWL9RuD4lwB4FftHxyNSr+q0qni3THT7yo4rEx1ZF//nIDx+IpBgnAf5KHyclR5/5BcnxdJsWxxAtAAAAAElFTkSuQmCC"},32964:(e,t,n)=>{n.d(t,{c:()=>i});const i="data:image/png;base64,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"},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>s});var i=n(11504);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);