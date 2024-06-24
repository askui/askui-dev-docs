"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45444],{46237:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>r});var t=i(17624),s=i(4552);const o={title:"2024.03.04 | AskUI SDK Convenience Methods",slug:"release-2024-03-04",authors:["johannesdienst","jonasmenesklou"],tags:["AskUI SDK"],hide_table_of_contents:!1},l=void 0,c={permalink:"/release-notes/release-2024-03-04",source:"@site/blog/2024-03-04/2024-03-04.md",title:"2024.03.04 | AskUI SDK Convenience Methods",description:"Introduction",date:"2024-03-04T00:00:00.000Z",tags:[{inline:!0,label:"AskUI SDK",permalink:"/release-notes/tags/ask-ui-sdk"}],readingTime:1.965,hasTruncateMarker:!1,authors:[{name:"Johannes Dienst",title:"Developer Advocate",email:"johannes.dienst@askui.com",imageURL:"/img/johannesdienst.jpg",key:"johannesdienst"},{name:"Jonas Menesklou",title:"CEO",email:"jonas.menesklou@askui.com",imageURL:"/img/jonasmenesklou.jpeg",key:"jonasmenesklou"}],frontMatter:{title:"2024.03.04 | AskUI SDK Convenience Methods",slug:"release-2024-03-04",authors:["johannesdienst","jonasmenesklou"],tags:["AskUI SDK"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"2024.03.25 | AskUI SDK Automations Directory Option",permalink:"/release-notes/release-2024-03-25"},nextItem:{title:"2024.02.26 | AskUI Suite 24.2.2",permalink:"/release-notes/release-2024-02-26"}},a={authorsImageUrls:[void 0,void 0]},r=[{value:"Introduction",id:"introduction",level:2},{value:"Visual Studio Code Setup on Windows",id:"visual-studio-code-setup-on-windows",level:2},{value:"Convenience Methods",id:"convenience-methods",level:2},{value:"<code>clickButton(label: string)</code>",id:"clickbuttonlabel-string",level:3},{value:"<code>clickIcon(description: string)</code>",id:"clickicondescription-string",level:3},{value:"<code>clickText(text: string)</code>",id:"clicktexttext-string",level:3},{value:"<code>clickTexts(texts: string[])</code>",id:"clicktextstexts-string",level:3},{value:"<code>clickTextfield(placeholder: string)</code>",id:"clicktextfieldplaceholder-string",level:3},{value:"<code>dragTo(element1: Executable, element2: Executable)</code>",id:"dragtoelement1-executable-element2-executable",level:3},{value:"<code>pressKeyNTimes(key: PC_AND_MODIFIER_KEY, times = 2)</code>",id:"presskeyntimeskey-pc_and_modifier_key-times--2",level:3},{value:"<code>pressKeys(keys: PC_AND_MODIFIER_KEY[])</code>",id:"presskeyskeys-pc_and_modifier_key",level:3},{value:"<code>waitUntil(AskUICommand: Executable, maxTry = 5, waitTime = 2000)</code>",id:"waituntilaskuicommand-executable-maxtry--5-waittime--2000",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"This week we improved on our docs. A guide for setting up your terminal and extensions in Visual Studio Code on Windows will improve your experience while developing AskUI Workflows."}),"\n",(0,t.jsxs)(n.p,{children:["We also fixed a display bug at the ",(0,t.jsx)(n.em,{children:"Supported Keys"})," page."]}),"\n",(0,t.jsxs)(n.p,{children:["In version 0.14.0 of the AskUI SDK we introduced some convenience methods to free users from writing repetitive code. This speeds up the development of AskUI Workflows and improves readability. Make sure to read ",(0,t.jsx)(n.a,{href:"https://docs.askui.com/docs/api/Convenience/clickButton",children:"the convenience docs"})," which give you a detailed description on how to use each method."]}),"\n",(0,t.jsx)(n.h2,{id:"visual-studio-code-setup-on-windows",children:"Visual Studio Code Setup on Windows"}),"\n",(0,t.jsxs)(n.p,{children:["Visual Studio Code is our recommended editor for developing AskUI workflows. Our ",(0,t.jsxs)(n.a,{href:"https://docs.askui.com/docs/general/Components/AskUI-Development-Environment#ade--vscode-ide",children:["docs for the ",(0,t.jsx)(n.em,{children:"AskUI Development Environment"})]})," now have a section that helps you to setup Visual Studio Code for developing AskUI workflows efficiently:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Terminal configuration"}),"\n",(0,t.jsx)(n.li,{children:"Recommended extensions for Jest Runner, ESLint & Live View"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"convenience-methods",children:"Convenience Methods"}),"\n",(0,t.jsx)(n.p,{children:"We introduced the following methods:"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"clickbuttonlabel-string",children:(0,t.jsx)(n.code,{children:"clickButton(label: string)"})}),"\n",(0,t.jsx)(n.p,{children:"Searches for an element of type button with a label and clicks it when found."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await aui.clickButton('Sign Up');\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"clickicondescription-string",children:(0,t.jsx)(n.code,{children:"clickIcon(description: string)"})}),"\n",(0,t.jsx)(n.p,{children:"Clicks an icon based on a description."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await aui.clickIcon('Logo looking like an apple');\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"clicktexttext-string",children:(0,t.jsx)(n.code,{children:"clickText(text: string)"})}),"\n",(0,t.jsx)(n.p,{children:"Searches for a text element and clicks it when found."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await aui.clickText('A big bear');\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"clicktextstexts-string",children:(0,t.jsx)(n.code,{children:"clickTexts(texts: string[])"})}),"\n",(0,t.jsx)(n.p,{children:"Searches for text elements and clicks them one after another when found."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await aui.clickTexts(['A big bear', 'Brown Fox', 'Walks into a bar']);\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"clicktextfieldplaceholder-string",children:(0,t.jsx)(n.code,{children:"clickTextfield(placeholder: string)"})}),"\n",(0,t.jsx)(n.p,{children:"Searches for an element of type textfield with a specific placeholder text. If found, clicks it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await aui.clickTextfield('E-Mail Address');\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"dragtoelement1-executable-element2-executable",children:(0,t.jsx)(n.code,{children:"dragTo(element1: Executable, element2: Executable)"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"This method is not working as intended and will be removed with the next release!"})}),"\n",(0,t.jsx)(n.p,{children:"Drags element1 to element2."}),"\n",(0,t.jsx)(n.p,{children:"Both must be a moveMouse() or moveMouseTo() instruction as in the example below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await aui.dragTo(\n   aui.moveMouseTo().text('AskUI'),\n   aui.moveMouseTo().text('UI Automation')\n);\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"presskeyntimeskey-pc_and_modifier_key-times--2",children:(0,t.jsx)(n.code,{children:"pressKeyNTimes(key: PC_AND_MODIFIER_KEY, times = 2)"})}),"\n",(0,t.jsx)(n.p,{children:"Press a key multiple times. At least two times."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await aui.pressKeyNTimes('right');\nawait aui.pressKeyNTimes('left', 3);\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"presskeyskeys-pc_and_modifier_key",children:(0,t.jsx)(n.code,{children:"pressKeys(keys: PC_AND_MODIFIER_KEY[])"})}),"\n",(0,t.jsx)(n.p,{children:"Press an array of keys one after another."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await aui.pressKeys(['right', 'left', 'enter']);\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"waituntilaskuicommand-executable-maxtry--5-waittime--2000",children:(0,t.jsx)(n.code,{children:"waitUntil(AskUICommand: Executable, maxTry = 5, waitTime = 2000)"})}),"\n",(0,t.jsx)(n.p,{children:"Wait until an AskUICommand does not fail."}),"\n",(0,t.jsx)(n.p,{children:"Use it to wait for an element to appear like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"await aui.waitUntil(aui.expect().text('GitHub').exists());\n"})}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>c,M:()=>l});var t=i(11504);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);