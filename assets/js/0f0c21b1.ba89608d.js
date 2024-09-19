"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48632],{13436:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=i(17624),t=i(4552);const s={sidebar_position:4},l="AI Element",r={id:"general/Element Selection/aielement",title:"AI Element",description:"Enable the AskUI Development Environment as described in AskUI Development Environment and then activate the experimental commands by running AskUI-ImportExperimentalCommands in your terminal.",source:"@site/versioned_docs/version-0.20.6/general/03-Element Selection/aielement.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/aielement",permalink:"/docs/0.20.6/general/Element Selection/aielement",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.20.6/general/03-Element Selection/aielement.md",tags:[],version:"0.20.6",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Select Elements by Proximity",permalink:"/docs/0.20.6/general/Element Selection/relational-selectors"},next:{title:"Extracting Data from Elements",permalink:"/docs/0.20.6/general/Element Selection/scraping-and-storing-lements"}},a={},d=[{value:"<code>AskUI-NewAIElement</code> Command",id:"askui-newaielement-command",level:2},{value:"Snipping Workflow",id:"snipping-workflow",level:2},{value:"Keyboard Shortcuts",id:"keyboard-shortcuts",level:3},{value:"General",id:"general",level:4},{value:"Magnifier",id:"magnifier",level:4},{value:"Navigation",id:"navigation",level:4},{value:"Modes",id:"modes",level:4},{value:"<code>AskUI-ShowAIElement</code> Command",id:"askui-showaielement-command",level:2},{value:"<code>AskUI-RemoveAIElement</code> Command",id:"askui-removeaielement-command",level:2},{value:"<code>AskUI-OpenAIElement</code> Command",id:"askui-openaielement-command",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"ai-element",children:"AI Element"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Enable the ",(0,o.jsx)(n.em,{children:"AskUI Development Environment"})," as described in ",(0,o.jsx)(n.a,{href:"/docs/0.20.6/suite/Components/AskUI-Development-Environment",children:"AskUI Development Environment"})," and then activate the experimental commands by running ",(0,o.jsx)(n.code,{children:"AskUI-ImportExperimentalCommands"})," in your terminal."]})}),"\n",(0,o.jsxs)(n.h2,{id:"askui-newaielement-command",children:[(0,o.jsx)(n.code,{children:"AskUI-NewAIElement"})," Command"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"AskUI-NewAIElement"})," allows you to capture elements from your screen. You can use these elements later in AskUI workflows. Accepted parameters:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Name"})," (Optional): The name of the screenshot file. If defined, it indicates that only one element is being snipped. If not defined, you will be prompted to provide a name later. For snipping multiple elements, you must provide a name for each one."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"WorkspaceId"})," (Optional): By default, the command will use the Workspace ID specified in the settings file. If neither is set, an error will be thrown."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AlwaysPreview"})," (Optional): Automatically opens the preview without prompting. ",(0,o.jsxs)(n.em,{children:["Can not be used together with the ",(0,o.jsx)(n.code,{children:"NoPreview"})," parameter"]}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"NoPreview"})," (Optional): Skips the preview and does not open it. *Can not be used with the ",(0,o.jsx)(n.code,{children:"AlwaysPreview"})," parameter."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"OneShot"})," (Optional): The snipping ends after the first successful creation of an AI Element."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"AskUI-NewAIElement\n\n# Output\nTaking screenshots for project:\n  WorkspaceId: <workspaceId>\nFinished taking of 2 screenshots.\nDo you want to preview screenshot #1? [y/n]: y\nScreenshot #1 requires additional metadata.\n  Enter a name for the screenshot 1: <name1>\nScreenshot #1:\n  Name:     <name1>\n  File:     <askuiUserDirectory>\\SnippingTool\\AIElement\\<workspaceId>\\{26342074-5B2A-4695-09ED-41EE47992546}.png\n  Metadata: <askuiUserDirectory>\\SnippingTool\\AIElement\\<workspaceId>\\{26342074-5B2A-4695-09ED-41EE47992546}.json\nDo you want to preview screenshot #2? [y/n]: n\nScreenshot #2 requires additional metadata.\n  Enter a name for the screenshot 2: <name2>\nScreenshot #2:\n  Name:     <name2>\n  File:     <askuiUserDirectory>\\SnippingTool\\AIElement\\<workspaceId>\\{644A00B8-1E27-7ADF-7C68-1751672A5931}.png\n  Metadata: <askuiUserDirectory>\\SnippingTool\\AIElement\\<workspaceId>\\{644A00B8-1E27-7ADF-7C68-1751672A5931}.json\n"})}),"\n",(0,o.jsx)(n.h2,{id:"snipping-workflow",children:"Snipping Workflow"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"Should the selection overlay lose focus it needs a left click to make keyboard shortcuts work again."}),(0,o.jsx)(n.p,{children:"Snipping is currently only supported on the primary screen."})]}),"\n",(0,o.jsx)(n.p,{children:"Snipping Tool starts in rectangle mode:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Move mouse cursor to move the magnifier with the selection cursor."}),"\n",(0,o.jsx)(n.li,{children:"Press & hold left mouse button to start the rubber band selection of a rectangle."}),"\n",(0,o.jsx)(n.li,{children:"Optional: Press right mouse button to reset current action."}),"\n",(0,o.jsx)(n.li,{children:"Move mouse to adjust rectangle."}),"\n",(0,o.jsx)(n.li,{children:"Release left mouse button to confirm rectangle selection."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"When in polygon mode:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Move mouse to move the magnifier with the selection icon."}),"\n",(0,o.jsx)(n.li,{children:"Press left mouse button to set first polygon point."}),"\n",(0,o.jsx)(n.li,{children:"Move mouse and repeat pressing left mouse button to add more points."}),"\n",(0,o.jsx)(n.li,{children:"Optional: Press right mouse button to remove the last point."}),"\n",(0,o.jsx)(n.li,{children:"Move mouse to the first point and press left mouse button to finish polygon."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["When you called ",(0,o.jsx)(n.code,{children:"AskUI-NewAIElement"})," with the ",(0,o.jsx)(n.code,{children:"OneShot"})," parameter, the snipping ends after the first successful creation of an AI-element."]}),"\n",(0,o.jsxs)(n.p,{children:["Otherwise snipping continues until ",(0,o.jsx)(n.code,{children:"ESC"})," is pressed."]}),"\n",(0,o.jsx)(n.h3,{id:"keyboard-shortcuts",children:"Keyboard Shortcuts"}),"\n",(0,o.jsx)(n.h4,{id:"general",children:"General"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ESC"})," End the snipping tool."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"magnifier",children:"Magnifier"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"+"})," / ",(0,o.jsx)(n.code,{children:"mouse wheel up"})," Increase magnification up to x512."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"-"})," / ",(0,o.jsx)(n.code,{children:"mouse wheel down"})," Decrease magnification down to x2."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"navigation",children:"Navigation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"up"})," / ",(0,o.jsx)(n.code,{children:"w"})," Move the magnifier (selection) one pixel up."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"down"})," / ",(0,o.jsx)(n.code,{children:"s"})," Move the magnifier (selection) one pixel down."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"left"})," / ",(0,o.jsx)(n.code,{children:"a"})," Move the magnifier (selection) one pixel to the left."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"right"})," / ",(0,o.jsx)(n.code,{children:"d"})," Move the magnifier (selection) one pixel to the right."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"modes",children:"Modes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"r"})," Activate rectangle mode (when not active)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"p"})," Activate polygon mode (when not active)."]}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"askui-showaielement-command",children:[(0,o.jsx)(n.code,{children:"AskUI-ShowAIElement"})," Command"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"AskUI-ShowAIElement"})," shows a list of all available AI Elements. Accepted parameters:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"NameFilter"})," (Optional): Lists the AI Element with the provided name filter. If not set, all AI Elements are listed."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"# Lists all AI Elements with the name 'logo'\nAskUI-ShowAIElement -NameFilter \"logo\"\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"askui-removeaielement-command",children:[(0,o.jsx)(n.code,{children:"AskUI-RemoveAIElement"})," Command"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"AskUI-RemoveAIElement"})," removes AI elements by name."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"NameFilter"})," (Mandatory): Specifies a name filter for the AI element to be removed."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"NoPreview"}),"(Optional): Skips the preview of the filtered AI elements before removal."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"AutoApproval"})," (Optional): Automatically approves the deletion without prompting for confirmation."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"# Removes AI Element with the name 'logo'\nAskUI-RemoveAIElement -NameFilter \"logo\" -AutoApproval\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"askui-openaielement-command",children:[(0,o.jsx)(n.code,{children:"AskUI-OpenAIElement"})," Command"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"AskUI-OpenAIElement"})," shows AI Elements by name."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"NameFilter"})," (Mandatory): Specifies a name filter for the AI Element to be viewed."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"# Opens all AI Elements with the name 'logo'\nAskUI-OpenAIElement -NameFilter \"logo\"\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>l});var o=i(11504);const t={},s=o.createContext(t);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);