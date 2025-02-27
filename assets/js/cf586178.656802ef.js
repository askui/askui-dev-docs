"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27844],{54564:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=i(17624),l=i(4552);const t={sidebar_position:4,title:"AI Elements"},o="AI Elements",r={id:"general/Element Selection/aielement",title:"AI Elements",description:"Enable the AskUI Development Environment as described in AskUI Development Environment and then activate the experimental commands by running AskUI-ImportExperimentalCommands in your terminal.",source:"@site/docs/general/03-Element Selection/aielement.md",sourceDirName:"general/03-Element Selection",slug:"/general/Element Selection/aielement",permalink:"/docs/next/general/Element Selection/aielement",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"AI Elements"},sidebar:"docsSidebar",previous:{title:"Text Selectors",permalink:"/docs/next/general/Element Selection/text-and-element-selectors"},next:{title:"Guides",permalink:"/docs/next/category/guides"}},a={},d=[{value:"<code>AskUI-NewAIElement</code> Command",id:"askui-newaielement-command",level:2},{value:"Snipping Workflow",id:"snipping-workflow",level:2},{value:"Keyboard Shortcuts",id:"keyboard-shortcuts",level:3},{value:"General",id:"general",level:4},{value:"Magnifier",id:"magnifier",level:4},{value:"Navigation",id:"navigation",level:4},{value:"Modes",id:"modes",level:4},{value:"<code>AskUI-ShowAIElement</code> Command",id:"askui-showaielement-command",level:2},{value:"<code>AskUI-RemoveAIElement</code> Command",id:"askui-removeaielement-command",level:2},{value:"<code>AskUI-OpenAIElement</code> Command",id:"askui-openaielement-command",level:2},{value:"Using AI Elements with Git",id:"using-ai-elements-with-git",level:2},{value:"Current Behavior",id:"current-behavior",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Configuration Steps",id:"configuration-steps",level:3},{value:"Adding AI Elements to Git",id:"adding-ai-elements-to-git",level:3},{value:"Current Limitations",id:"current-limitations",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ai-elements",children:"AI Elements"})}),"\n",(0,s.jsx)("video",{controls:!0,children:(0,s.jsx)("source",{src:"https://files.askui.com/assets/docs/askui-bytes-aiElement.mp4"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Enable the ",(0,s.jsx)(n.em,{children:"AskUI Development Environment"})," as described in ",(0,s.jsx)(n.a,{href:"/docs/next/suite/Components/AskUI-Development-Environment",children:"AskUI Development Environment"})," and then activate the experimental commands by running ",(0,s.jsx)(n.code,{children:"AskUI-ImportExperimentalCommands"})," in your terminal."]})}),"\n",(0,s.jsxs)(n.h2,{id:"askui-newaielement-command",children:[(0,s.jsx)(n.code,{children:"AskUI-NewAIElement"})," Command"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AskUI-NewAIElement"})," allows you to capture elements from your screen. You can use these elements later in AskUI workflows. Accepted parameters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Name"})," (Optional): The name of the screenshot file. If defined, it indicates that only one element is being snipped. If not defined, you will be prompted to provide a name later. For snipping multiple elements, you must provide a name for each one."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WorkspaceId"})," (Optional): By default, the command will use the Workspace ID specified in the settings file. If neither is set, an error will be thrown."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AlwaysPreview"})," (Optional): Automatically opens the preview without prompting. ",(0,s.jsxs)(n.em,{children:["Can not be used together with the ",(0,s.jsx)(n.code,{children:"NoPreview"})," parameter"]}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NoPreview"})," (Optional): Skips the preview and does not open it. *Can not be used with the ",(0,s.jsx)(n.code,{children:"AlwaysPreview"})," parameter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"OneShot"})," (Optional): The snipping ends after the first successful creation of an AI Element."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Annotate"})," (Optional): Allows you to take a fullscreen capture and annotate regions on that screenshot."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"AskUI-NewAIElement\n\n# Output\nTaking screenshots for project:\n  WorkspaceId: <workspaceId>\nFinished taking of 2 screenshots.\nDo you want to preview screenshot #1? [y/n]: y\nScreenshot #1 requires additional metadata.\n  Enter a name for the screenshot 1: <name1>\nScreenshot #1:\n  Name:     <name1>\n  File:     <askuiUserDirectory>\\SnippingTool\\AIElement\\<workspaceId>\\{26342074-5B2A-4695-09ED-41EE47992546}.png\n  Metadata: <askuiUserDirectory>\\SnippingTool\\AIElement\\<workspaceId>\\{26342074-5B2A-4695-09ED-41EE47992546}.json\nDo you want to preview screenshot #2? [y/n]: n\nScreenshot #2 requires additional metadata.\n  Enter a name for the screenshot 2: <name2>\nScreenshot #2:\n  Name:     <name2>\n  File:     <askuiUserDirectory>\\SnippingTool\\AIElement\\<workspaceId>\\{644A00B8-1E27-7ADF-7C68-1751672A5931}.png\n  Metadata: <askuiUserDirectory>\\SnippingTool\\AIElement\\<workspaceId>\\{644A00B8-1E27-7ADF-7C68-1751672A5931}.json\n"})}),"\n",(0,s.jsx)(n.h2,{id:"snipping-workflow",children:"Snipping Workflow"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Should the selection overlay lose focus it needs a left click to make keyboard shortcuts work again."}),(0,s.jsx)(n.p,{children:"Snipping is currently only supported on the primary screen."})]}),"\n",(0,s.jsx)(n.p,{children:"Snipping Tool starts in rectangle mode:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Move mouse cursor to move the magnifier with the selection cursor."}),"\n",(0,s.jsx)(n.li,{children:"Press & hold left mouse button to start the rubber band selection of a rectangle."}),"\n",(0,s.jsx)(n.li,{children:"Optional: Press right mouse button to reset current action."}),"\n",(0,s.jsx)(n.li,{children:"Move mouse to adjust rectangle."}),"\n",(0,s.jsx)(n.li,{children:"Release left mouse button to confirm rectangle selection."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When in polygon mode:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Move mouse to move the magnifier with the selection icon."}),"\n",(0,s.jsx)(n.li,{children:"Press left mouse button to set first polygon point."}),"\n",(0,s.jsx)(n.li,{children:"Move mouse and repeat pressing left mouse button to add more points."}),"\n",(0,s.jsx)(n.li,{children:"Optional: Press right mouse button to remove the last point."}),"\n",(0,s.jsx)(n.li,{children:"Move mouse to the first point and press left mouse button to finish polygon."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When you called ",(0,s.jsx)(n.code,{children:"AskUI-NewAIElement"})," with the ",(0,s.jsx)(n.code,{children:"OneShot"})," parameter, the snipping ends after the first successful creation of an AI-element."]}),"\n",(0,s.jsxs)(n.p,{children:["Otherwise snipping continues until ",(0,s.jsx)(n.code,{children:"ESC"})," is pressed."]}),"\n",(0,s.jsx)(n.h3,{id:"keyboard-shortcuts",children:"Keyboard Shortcuts"}),"\n",(0,s.jsx)(n.h4,{id:"general",children:"General"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ESC"})," End the snipping tool."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SPACE"})," Same as left click on the current location."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"magnifier",children:"Magnifier"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"+"})," / ",(0,s.jsx)(n.code,{children:"mouse wheel up"})," Increase magnification up to x512."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-"})," / ",(0,s.jsx)(n.code,{children:"mouse wheel down"})," Decrease magnification down to x2."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"navigation",children:"Navigation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"up"})," / ",(0,s.jsx)(n.code,{children:"w"})," Move the magnifier (selection) one pixel up."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"down"})," / ",(0,s.jsx)(n.code,{children:"s"})," Move the magnifier (selection) one pixel down."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"left"})," / ",(0,s.jsx)(n.code,{children:"a"})," Move the magnifier (selection) one pixel to the left."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"right"})," / ",(0,s.jsx)(n.code,{children:"d"})," Move the magnifier (selection) one pixel to the right."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"modes",children:"Modes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"r"})," Activate rectangle mode (when not active)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"p"})," Activate polygon mode (when not active)."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"askui-showaielement-command",children:[(0,s.jsx)(n.code,{children:"AskUI-ShowAIElement"})," Command"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AskUI-ShowAIElement"})," shows a list of all available AI Elements. Accepted parameters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NameFilter"})," (Optional): Lists the AI Element with the provided name filter. If not set, all AI Elements are listed."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"# Lists all AI Elements with the name 'logo'\nAskUI-ShowAIElement -NameFilter \"logo\"\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"askui-removeaielement-command",children:[(0,s.jsx)(n.code,{children:"AskUI-RemoveAIElement"})," Command"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AskUI-RemoveAIElement"})," removes AI elements by name."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NameFilter"})," (Mandatory): Specifies a name filter for the AI element to be removed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NoPreview"}),"(Optional): Skips the preview of the filtered AI elements before removal."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AutoApproval"})," (Optional): Automatically approves the deletion without prompting for confirmation."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"# Removes AI Element with the name 'logo'\nAskUI-RemoveAIElement -NameFilter \"logo\" -AutoApproval\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"askui-openaielement-command",children:[(0,s.jsx)(n.code,{children:"AskUI-OpenAIElement"})," Command"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"AskUI-OpenAIElement"})," shows AI Elements by name."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NameFilter"})," (Mandatory): Specifies a name filter for the AI Element to be viewed."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"# Opens all AI Elements with the name 'logo'\nAskUI-OpenAIElement -NameFilter \"logo\"\n"})}),"\n",(0,s.jsx)(n.h2,{id:"using-ai-elements-with-git",children:"Using AI Elements with Git"}),"\n",(0,s.jsx)(n.p,{children:"AI Elements can be version controlled and shared across team members using Git. Here's how to set it up:"}),"\n",(0,s.jsx)(n.h3,{id:"current-behavior",children:"Current Behavior"}),"\n",(0,s.jsxs)(n.p,{children:["By default, AI Elements are stored in the Global AI Element Location under ",(0,s.jsx)(n.code,{children:"~/.askui/SnippingTool/AIElement/<workspace-id>/"}),". This location is not version controlled by Git."]}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Update askui to version 0.22.0 or higher:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install askui@latest\n"})}),"\n",(0,s.jsx)(n.h3,{id:"configuration-steps",children:"Configuration Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a folder in your Git project called ",(0,s.jsx)(n.code,{children:"<project>/ai-elements"})]}),"\n",(0,s.jsxs)(n.li,{children:["Update your ",(0,s.jsx)(n.code,{children:"askui_example/helpers/askui-helper.ts"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'beforeAll(async () => {\n  aui = await UiControlClient.build({\n    // ... existing configuration ...\n    aiElementArgs: {\n      additionalLocations: [\n        "./ai-elements/" // Add your local AI Element location here\n      ]\n    }\n  });\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"adding-ai-elements-to-git",children:"Adding AI Elements to Git"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open ",(0,s.jsx)(n.code,{children:"askui-shell"})]}),"\n",(0,s.jsxs)(n.li,{children:["Get the global AI Element location:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Run ",(0,s.jsx)(n.code,{children:"AskUI-ShowAIElement"})]}),"\n",(0,s.jsx)(n.li,{children:"Copy the path from the Image File"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Open the path in File Explorer"}),"\n",(0,s.jsx)(n.li,{children:"Copy all files from the Global AI Element Location to your Project AI Element Location"}),"\n",(0,s.jsx)(n.li,{children:"Add and commit the files to Git"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"current-limitations",children:"Current Limitations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AskUI-NewAIElement"})," command only stores elements in the Global AI Element Location. Manual copying is required"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AskUI-*AIElement"})," commands are only compatible with the Global AI Element Location"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>o});var s=i(11504);const l={},t=s.createContext(l);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);