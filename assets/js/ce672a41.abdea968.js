"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21284],{15488:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(17624),t=n(4552);const r={sidebar_position:5},i="macOS",c={id:"general/Troubleshooting/mac-os",title:"macOS",description:"Elements Can't Be Found / Annotated Screen Empty / AskUI Controller not starting",source:"@site/versioned_docs/version-0.14.0/general/07-Troubleshooting/mac-os.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/mac-os",permalink:"/docs/0.14.0/general/Troubleshooting/mac-os",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.14.0/general/07-Troubleshooting/mac-os.md",tags:[],version:"0.14.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Linux",permalink:"/docs/0.14.0/general/Troubleshooting/linux"},next:{title:"Proxy",permalink:"/docs/0.14.0/general/Troubleshooting/proxy"}},a={},l=[{value:"Elements Can&#39;t Be Found / Annotated Screen Empty / AskUI Controller not starting",id:"elements-cant-be-found--annotated-screen-empty--askui-controller-not-starting",level:2},{value:"Mouse Cursor Not Moving as Expected",id:"mouse-cursor-not-moving-as-expected",level:2}];function d(e){const o={code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"macos",children:"macOS"}),"\n",(0,s.jsx)(o.h2,{id:"elements-cant-be-found--annotated-screen-empty--askui-controller-not-starting",children:"Elements Can't Be Found / Annotated Screen Empty / AskUI Controller not starting"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"macOS empty screen captured",src:n(24413).c+"",width:"567",height:"354"})}),"\n",(0,s.jsxs)(o.p,{children:["Our AskUI Controller needs the permission for ",(0,s.jsx)(o.em,{children:"Screen Recording"})," and ",(0,s.jsx)(o.em,{children:"Accessibility"})," on macOS."]}),"\n",(0,s.jsx)(o.p,{children:"Here is a step-by-step guide on how to fix missing permissions:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Head over to ",(0,s.jsx)(o.em,{children:"System Preferences > Security & Privacy"}),".\nOpen the ",(0,s.jsx)(o.em,{children:"Privacy"})," tab and check if you can find the ",(0,s.jsx)(o.em,{children:"askui-ui-controller"})," under ",(0,s.jsx)(o.em,{children:"Screen Recording"})," and ",(0,s.jsx)(o.em,{children:"Accessibility"})," (See next picture for reference)."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"macOS Privacy settings",src:n(6256).c+"",width:"567",height:"508"})}),"\n",(0,s.jsxs)(o.p,{children:["1.1 If ",(0,s.jsx)(o.em,{children:"askui-ui-controller"})," does NOT have the permissions, give it to it and restart your workflow. Make sure to reopen your terminal you run workflow from. If it still does not work go on with step 1.2 below."]}),"\n",(0,s.jsxs)(o.p,{children:["1.2. If ",(0,s.jsx)(o.em,{children:"askui-ui-controller"})," has the permissions, revoke them by unchecking the corresponding checkboxes and removing the application from each list by clicking the minus (",(0,s.jsx)(o.em,{children:"-"}),") button."]}),"\n",(0,s.jsxs)(o.ol,{start:"2",children:["\n",(0,s.jsxs)(o.li,{children:["By default AskUI starts the AskUI Controller in the background which sometimes messes up the permissions. Now you will start the AskUI Controller manually which triggers the permission prompt of macOS. Therefore you need to execute the AskUI Controller executable that was downloaded into your AskUI project when you ran your workflow.\nHead over to the folder where you initialized AskUI. Navigate to ",(0,s.jsx)(o.code,{children:"node_modules/askui/dist/release/<version>/darwin"}),".\n",(0,s.jsx)(o.code,{children:"<version>"})," may be ",(0,s.jsx)(o.code,{children:"latest"})," or a semantic version like ",(0,s.jsx)(o.code,{children:"v0.8.0"}),". In there, you should find a ``askui-controller.app",(0,s.jsx)(o.code,{children:"directory which is your installation of the AskUI Controller. Open the"}),"askui-controller.app` directory in your ",(0,s.jsx)(o.em,{children:"Finder"})," by right-clicking it and select ",(0,s.jsx)(o.em,{children:"Reveal in Finder"})," (See screenshot below). Then start it by double-clicking it in the ",(0,s.jsx)(o.em,{children:"Finder"}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Installation folder of askui-ui-controller",src:n(25896).c+"",width:"600",height:"588"})}),"\n",(0,s.jsxs)(o.p,{children:["The application should ask for ",(0,s.jsx)(o.em,{children:"Screen Recording"})," permissions which you have to grant for it to work."]}),"\n",(0,s.jsx)(o.p,{children:"We are actively searching for a solution to improve the current state of affairs but Apple\ndoes not make it easy (which is good for your privacy but not so much for automation frameworks).\nBut be sure that we keep trying!"}),"\n",(0,s.jsx)(o.h2,{id:"mouse-cursor-not-moving-as-expected",children:"Mouse Cursor Not Moving as Expected"}),"\n",(0,s.jsx)(o.p,{children:"Apple devices that have a display manufactured by Apple, i.e., Macbook, iMac have a so-called Retina Display, and they have a higher pixel density."}),"\n",(0,s.jsxs)(o.p,{children:["To use the actions such as ",(0,s.jsx)(o.code,{children:"moveMouse()"})," or ",(0,s.jsx)(o.code,{children:"moveMouseRelatively()"}),", the ",(0,s.jsx)(o.strong,{children:"coordinates should be doubled"})," in order to move the mouse cursor as expected."]}),"\n",(0,s.jsx)(o.p,{children:"For example, let's say that your screen resolution is of 1920x1080. If you want to move the mouse cursor to the middle of the screen, the correct numeric arguments are as such:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-javascript",children:"await aui.moveMouse(1920,1080).exec();\n"})}),"\n",(0,s.jsx)(o.p,{children:"The coordinate of the middle of the screen is (960,540). But if you use these numbers, it will move the cursor only half of the expected distance."})]})}function h(e={}){const{wrapper:o}={...(0,t.M)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25896:(e,o,n)=>{n.d(o,{c:()=>s});const s=n.p+"assets/images/macos-askui-ui-controller-installation-folder-ed73777443f3ca290fa79e353117ef3b.png"},24413:(e,o,n)=>{n.d(o,{c:()=>s});const s=n.p+"assets/images/macos-empty-screen-4a1a780d3e64e1e62e6ad06d5bb696b6.png"},6256:(e,o,n)=>{n.d(o,{c:()=>s});const s=n.p+"assets/images/macos-privacy-settings-513d8744e86a6a6af6f59698f29752e6.png"},4552:(e,o,n)=>{n.d(o,{I:()=>c,M:()=>i});var s=n(11504);const t={},r=s.createContext(t);function i(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);