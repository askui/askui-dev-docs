"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31960],{45776:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var s=o(17624),i=o(4552);const t={sidebar_position:2,title:"Scrolling"},l="Scrolling",r={id:"general/Element Selection/scrolling",title:"Scrolling",description:"When you use AskUI you can only interact with elements that you can see on your screen. Therefore you have to scroll down/sideways to interact with currently invisible elements.",source:"@site/versioned_docs/version-0.18.1/general/03-Element Selection/scrolling.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/scrolling",permalink:"/docs/0.18.1/general/Element Selection/scrolling",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.18.1/general/03-Element Selection/scrolling.md",tags:[],version:"0.18.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Scrolling"},sidebar:"docsSidebar",previous:{title:"Extracting Data from Elements",permalink:"/docs/0.18.1/general/Element Selection/scraping-and-storing-lements"},next:{title:"Implement Assertions",permalink:"/docs/0.18.1/general/Element Selection/assertions"}},c={},a=[{value:"Scrolling With Mouse Wheel",id:"scrolling-with-mouse-wheel",level:3},{value:"Scrolling With Key Press",id:"scrolling-with-key-press",level:3},{value:"Scrolling on Touch Displays",id:"scrolling-on-touch-displays",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"scrolling",children:"Scrolling"}),"\n",(0,s.jsx)(n.p,{children:"When you use AskUI you can only interact with elements that you can see on your screen. Therefore you have to scroll down/sideways to interact with currently invisible elements."}),"\n",(0,s.jsx)(n.h3,{id:"scrolling-with-mouse-wheel",children:"Scrolling With Mouse Wheel"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to scroll with your mouse wheel you can use the ",(0,s.jsx)(n.code,{children:"scroll()"})," action:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// Scroll 10 down in y direction<>\nawait aui.scroll(0, -10).exec()\n"})}),"\n",(0,s.jsx)(n.h3,{id:"scrolling-with-key-press",children:"Scrolling With Key Press"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to scroll with a key press you could use your arrow keys (",(0,s.jsx)(n.code,{children:"up"}),", ",(0,s.jsx)(n.code,{children:"down"}),", ",(0,s.jsx)(n.code,{children:"left"}),", ",(0,s.jsx)(n.code,{children:"right"})," ) or the ",(0,s.jsx)(n.code,{children:"pagedown"}),"-key."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// Press down arrow key\nawait aui.pressKey('down').exec()\n\n// Press up arrow key\nawait aui.pressKey('up').exec()\n\n// Scroll down a page\nawait aui.pressKey('pagedown').exec()\n\n// Scroll up a page\nawait aui.pressKey('pageup').exec()\n"})}),"\n",(0,s.jsx)(n.h3,{id:"scrolling-on-touch-displays",children:"Scrolling on Touch Displays"}),"\n",(0,s.jsx)(n.p,{children:"On touch displays you have to recreate the swipe gesture:"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you want to swipe an element instead of the whole screen: ",(0,s.jsx)(n.a,{href:"/docs/0.18.1/api/Actions/swipe",children:"Checkout the swipe() API docs"}),"."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// Touch the display with your finger, move finger to the left, release\n// Important: Make sure not to accidentially touch a swipeable element\n// as this might only swipe the element!\nawait aui.mouseToggleDown().exec()\nawait aui.moveMouseRelatively(-1500, 0).exec()\nawait aui.mouseToggleUp().exec()\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,o)=>{o.d(n,{I:()=>r,M:()=>l});var s=o(11504);const i={},t=s.createContext(i);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);