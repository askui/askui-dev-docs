"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6380],{10796:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=t(17624),s=t(4552);const i={displayed_sidebar:"askuiStudioSidebar",custom_edit_url:null},o="Start Working with Workflows",r={id:"askui-studio/Onboarding-Guide/start-working-with-workflows",title:"Start Working with Workflows",description:"This guide will show you how to get started with AskUI Studio by guiding you through the creation of a workflow and then running it.",source:"@site/versioned_docs/version-0.14.0/askui-studio/02-Onboarding-Guide/03-start-working-with-workflows.md",sourceDirName:"askui-studio/02-Onboarding-Guide",slug:"/askui-studio/Onboarding-Guide/start-working-with-workflows",permalink:"/docs/0.14.0/askui-studio/Onboarding-Guide/start-working-with-workflows",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"0.14.0",sidebarPosition:3,frontMatter:{displayed_sidebar:"askuiStudioSidebar",custom_edit_url:null},sidebar:"askuiStudioSidebar",previous:{title:"Select and Interact with Elements",permalink:"/docs/0.14.0/askui-studio/Onboarding-Guide/select-and-interact-with-elements"},next:{title:"Unlock More Flexibility with Code",permalink:"/docs/0.14.0/askui-studio/Onboarding-Guide/unlock-more-flexibility-with-code"}},d={},c=[{value:"Workflow and How to Create One",id:"workflow-and-how-to-create-one",level:2},{value:"Workflow Editor Structure",id:"workflow-editor-structure",level:2},{value:"Left Side",id:"left-side",level:3},{value:"Right Side",id:"right-side",level:3},{value:"Design Your Workflow",id:"design-your-workflow",level:2},{value:"Schedule/Run Your Workflow",id:"schedulerun-your-workflow",level:2},{value:"View Report of Run",id:"view-report-of-run",level:2}];function a(A){const e={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...A.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"start-working-with-workflows",children:"Start Working with Workflows"}),"\n",(0,n.jsxs)(e.p,{children:["This guide will show you how to get started with ",(0,n.jsx)(e.strong,{children:"AskUI Studio"})," by guiding you through the creation of a workflow and then running it."]}),"\n",(0,n.jsx)(e.p,{children:"You will learn:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"What a workflow is"}),"\n",(0,n.jsx)(e.li,{children:"How to create a new one"}),"\n",(0,n.jsx)(e.li,{children:"How the Workflow Editor is structured"}),"\n",(0,n.jsxs)(e.li,{children:["Design your workflow out of steps","\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"General structure"}),"\n",(0,n.jsx)(e.li,{children:"How to write instructions"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.li,{children:"Schedule/Run your workflow"}),"\n",(0,n.jsx)(e.li,{children:"View a report of your run"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"workflow-and-how-to-create-one",children:"Workflow and How to Create One"}),"\n",(0,n.jsx)(e.admonition,{type:"info",children:(0,n.jsxs)(e.p,{children:["A ",(0,n.jsx)(e.strong,{children:"workflow"})," consists of a number of steps that are ordered sequentially. A workflow run executes all the steps of a workflow."]})}),"\n",(0,n.jsxs)(e.p,{children:["To create a workflow navigate to the workflow overview page by clicking on the ",(0,n.jsx)(e.em,{children:(0,n.jsx)(e.strong,{children:"Workflow"})})," menu item on the left."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(53608).c+"",width:"654",height:"389"})}),"\n",(0,n.jsxs)(e.p,{children:["Then click on ",(0,n.jsx)(e.strong,{children:"+ CREATE WORKFLOW"})," in the upper right corner."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(62372).c+"",width:"645",height:"314"})}),"\n",(0,n.jsxs)(e.p,{children:["Enter a name for your workflow and click ",(0,n.jsx)(e.strong,{children:"CREATE"}),"."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(88372).c+"",width:"510",height:"358"})}),"\n",(0,n.jsx)(e.p,{children:"This will take you to the Workflow Editor."}),"\n",(0,n.jsx)(e.h2,{id:"workflow-editor-structure",children:"Workflow Editor Structure"}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.strong,{children:"Workflow Editor"})," can be confusing at first. So let\u2019s make sense of it, shall we?"]}),"\n",(0,n.jsx)(e.h3,{id:"left-side",children:"Left Side"}),"\n",(0,n.jsx)(e.p,{children:"You can upload a screenshot for each step that gets annotated with bounding boxes that mark the elements found by our inference backend. Once you select a step on the right side."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(4567).c+"",width:"2454",height:"906"})}),"\n",(0,n.jsx)(e.p,{children:"When you hover over the bounding boxes you see what element type our inference backend detected."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(3480).c+"",width:"1273",height:"870"})}),"\n",(0,n.jsx)(e.h3,{id:"right-side",children:"Right Side"}),"\n",(0,n.jsxs)(e.p,{children:["On the right side under ",(0,n.jsx)(e.strong,{children:"Steps"}),", you can edit your steps. Each box is one step, with each step containing exactly one instruction."]}),"\n",(0,n.jsx)(e.admonition,{type:"info",children:(0,n.jsxs)(e.p,{children:["A ",(0,n.jsx)(e.strong,{children:"step"})," is the basic building block of a workflow. It represents an instruction that is carried out within the graphical user interface of a screen at a specific moment in time."]})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(47756).c+"",width:"2440",height:"1002"})}),"\n",(0,n.jsx)(e.p,{children:"You can do the following things with a step:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Simulate once you entered an instruction"}),"\n",(0,n.jsx)(e.li,{children:"Attach a screenshot that should be annotated (covered in the next section)"}),"\n",(0,n.jsx)(e.li,{children:"Move up/down"}),"\n",(0,n.jsx)(e.li,{children:"Delete"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"design-your-workflow",children:"Design Your Workflow"}),"\n",(0,n.jsx)(e.p,{children:"Each step needs an instruction, with which you specify what should happen on the user interface represented by the screenshot you uploaded."}),"\n",(0,n.jsx)(e.admonition,{type:"info",children:(0,n.jsxs)(e.p,{children:["An ",(0,n.jsx)(e.strong,{children:"instruction"})," is a single AskUI directive that usually has the following parts:\xa0",(0,n.jsx)(e.em,{children:"action"}),"\xa0+ (optional) ",(0,n.jsx)(e.em,{children:"element-selector"}),"."]})}),"\n",(0,n.jsxs)(e.p,{children:["When you start out there is no instruction. Add one by clicking the ",(0,n.jsx)(e.strong,{children:"+ ADD"})," button."]}),"\n",(0,n.jsxs)(e.p,{children:["Click into the textfield ",(0,n.jsx)(e.strong,{children:"Instruction"})," to start editing the instruction."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(30276).c+"",width:"693",height:"176"})}),"\n",(0,n.jsxs)(e.p,{children:["An interaction with a GUI happens through so-called ",(0,n.jsx)(e.em,{children:"actions"}),":"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"type"}),"\n",(0,n.jsx)(e.li,{children:"click"}),"\n",(0,n.jsx)(e.li,{children:"press key"}),"\n",(0,n.jsx)(e.li,{children:"move mouse"}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["You can scroll through all the commands from the drop-down box that appears when you focus the ",(0,n.jsx)(e.em,{children:"Instruction"})," textfield."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(90644).c+"",width:"984",height:"876"})}),"\n",(0,n.jsxs)(e.p,{children:["For example to click the button on the top right with the text ",(0,n.jsx)(e.strong,{children:"Get started"})," from the screenshot we showed earlier you can write this. Use the annotations from the screenshot to find out with which elements you can interact:"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(22400).c+"",width:"858",height:"232"})}),"\n",(0,n.jsx)(e.p,{children:"Click on the little paper plane icon on the right to save your step."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(73320).c+"",width:"930",height:"506"})}),"\n",(0,n.jsxs)(e.p,{children:["Then click on the three dots of the step and on ",(0,n.jsx)(e.strong,{children:"Simulate"}),"."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(34340).c+"",width:"942",height:"516"})}),"\n",(0,n.jsx)(e.p,{children:"A red dot should appear over the selected element on the left side where your annotated screenshot is."}),"\n",(0,n.jsx)(e.p,{children:"Congratulations! You selected an element visually and clicked on it with AskUI \ud83c\udf89."}),"\n",(0,n.jsx)(e.h2,{id:"schedulerun-your-workflow",children:"Schedule/Run Your Workflow"}),"\n",(0,n.jsx)(e.admonition,{type:"info",children:(0,n.jsxs)(e.p,{children:["When you choose an ",(0,n.jsx)(e.em,{children:"AskUI-hosted"})," runner like in this guide your workflow will start at a browser window and will be limited to what you can do in a browser. Please add an instruction that enters a URL into the browser bar."]})}),"\n",(0,n.jsxs)(e.p,{children:["If you want to host your own runner in your own environment \u2192 ",(0,n.jsx)(e.a,{href:"/docs/0.14.0/askui-studio/Onboarding-Guide/deploy-and-manage-your-own-runners",children:"Check out this guide"})]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(79740).c+"",width:"884",height:"146"})}),"\n",(0,n.jsx)(e.p,{children:"Your final workflow should look like this:"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(95920).c+"",width:"1194",height:"982"})}),"\n",(0,n.jsxs)(e.p,{children:["Once you are finished editing your workflow it is time to schedule the real thing: A ",(0,n.jsx)(e.strong,{children:"run"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["For this click on the calendar icon named ",(0,n.jsx)(e.strong,{children:"Runs"})," located right of the screenshot."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(86300).c+"",width:"948",height:"788"})}),"\n",(0,n.jsxs)(e.p,{children:["Then click on the button ",(0,n.jsx)(e.strong,{children:"+ New run"})," in the right upper corner."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(47092).c+"",width:"1196",height:"520"})}),"\n",(0,n.jsxs)(e.p,{children:["Give the Run a name. Under ",(0,n.jsx)(e.em,{children:"Runner"})," select ",(0,n.jsx)(e.strong,{children:"AskUI-hosted"})," and leave the ",(0,n.jsx)(e.em,{children:"Run Time"})," property at ",(0,n.jsx)(e.strong,{children:"Run Now"}),". Make sure you tick the checkbox for your workflow on the right side. Then click ",(0,n.jsx)(e.strong,{children:"Create"})," on the bottom left."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(88672).c+"",width:"2440",height:"1104"})}),"\n",(0,n.jsx)(e.p,{children:"You should see status updates on the right bottom side and also a success message. The status of the scheduled run will be updated dynamically on the right side."}),"\n",(0,n.jsx)(e.admonition,{type:"info",children:(0,n.jsx)(e.p,{children:"Your scheduled run gets put in a queue and then executed. It might need a few minutes to finish."})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(39292).c+"",width:"1200",height:"598"})}),"\n",(0,n.jsx)(e.h2,{id:"view-report-of-run",children:"View Report of Run"}),"\n",(0,n.jsx)(e.p,{children:"Once your workflow run is finished you will get a nice report."}),"\n",(0,n.jsxs)(e.p,{children:["You can click on the ",(0,n.jsx)(e.strong,{children:"View report"}),"."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(32436).c+"",width:"1164",height:"590"})}),"\n",(0,n.jsx)(e.p,{children:"Every run will be stored for you, so you can visit them later."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:t(53352).c+"",width:"1631",height:"640"})}),"\n",(0,n.jsx)(e.admonition,{type:"info",children:(0,n.jsx)(e.p,{children:"If you want multiple runs of the same workflow to appear in one report you have to schedule it under the same name. This happens automatically if you schedule a regular run of your workflow."})})]})}function l(A={}){const{wrapper:e}={...(0,s.M)(),...A.components};return e?(0,n.jsx)(e,{...A,children:(0,n.jsx)(a,{...A})}):a(A)}},53608:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/01-Workflow-Menu-Item-ddfa81d27640bf482551dd0a5829af0e.png"},62372:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/02-Create-Workflow-1a8483c9e26a1302f2469dad7d464d36.png"},88372:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/03-First-Workflow-Creation-Dialog-26c87f6f63380fb723b973ddf00f1be9.png"},4567:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/04-Blank_Workflow_Editor-04e8a9c0c661d8e93a17cbd40d747b3e.png"},3480:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/05-WorkflowEdit-Annotation-c1e2f296366b23883a4bf7b39f5cf8ba.png"},47756:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/06-Right-Side-74c36fb89d22ce6225badfacfda80b3b.png"},30276:(A,e,t)=>{t.d(e,{c:()=>n});const n="data:image/png;base64,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AQQQyLDAV199ZW+++aZt3brVli1bZu+8806GR1Cxh0vbTG1hYaHdd999dsopp7jkX7HDDmZvS5cutRdeeMG6dOmS8XNesGCBLVq0yD799FMrLi62Y445xgYMGGBNmzYNJhajQgABBBBAAIGDKrB58+ao48e+j1oZgjdpm6nNz8+3Z555xhYvXpwWhq+//tpuvvlme//999PSf2mdvvjiizZy5MiozfQ/HoXaTz75JGp5Ot/of1fXX3+9DRw40B566CHbsGGDffjhh/b444/b2Wefbf/617/SeXj6RgABBBBAAIGQCpx88slWr149N/qcnByXG0J6Km7YaZupTTeKwtvMmTOtW7du6T5U3P5fe+01W7duXdS6nj17mmpTatWqFbU8nW80K/v3v//dxo4da/379zf9UWqW/PXXX7cbb7zRHn74YZsyZUo6h0DfCCCAAAIIIBBCgdzcXLvlllts1apV1rhxY6tZs2YIz+KHIadtpvaHQ/zwau/evbZv377Igo0bN9o333wTeR/7QuFMwfG7776LWqVZYP2oFRQU2J49eyL96r23TvuvXbvWvv32WysqKnLbKQT6m7dcv+M1jfG///1vZJX61PH0W02v9aP9q1SpYo0aNbLatWtHtve/WL9+ve3atcu/yL3WmPx9qi+Ne/v27SW2jV1Qp04dW7hwoQ0aNMgFWq1XsL3ooovs8MMPz+iscezYeI8AAggggAACwRbIzs62448/PvSBVsoZDbU/+9nP7IorrrDZs2e7GdYzzzzTOnXqZL1793YhzrvsCr7jxo2zli1buu06dOhgHTt2tFdeecVt0rp1a7v88svda5UgtGnTJjJl/uCDD5rWa8ZU9bznnHOOPfDAA6Z6V203Z84c7zDutz6e1/K//vWvkeUKlb///e/dMTVGHbvb/hlh9Tl16lS3/fz5813g1r76mTVrlv373/92r71xqkN/X127drUTTzzRLrvsMjce74A7duxw+02cONGNVR8HaNz6PXz4cNu9e7e3adzfVatWLbE8KyvLBf1WrVqVWMcCBBBAAAEEEEBAAsopK1asSGkiLehiGS0/qF+/vquB1R12+qhcNZ9z5861J554wu666y5Xgysw1aVOnjzZrr32WrvwwgtNM7wKjarRveSSS2zGjBnuAowePdpto34qVarkrGvUqOF+X3XVVXbllVe6Yxx2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bg6LLUvw1qnEQev8fcpEP/H28coZFIRpCCCAAAIIIIAAAiUFSru/qeQeJZfok3OVdypz+UtAY7cM1UytN3g9riteS7Tc2zZeOPXWVa5c2XsZ+S28RKE10fLIzrxAAAEEEEAAAQQQyJhAqGpqM6bCgRBAAAEEEEAAAQRCJUCoDdXlYrAIIIAAAggggAAC8QQItfFUWIYAAggggAACCCAQKgFCbaguF4NFAAEEEEAAAQQQiCdAqI2nwjIEEEAAAQQQQACBUAkQakN1uRgsAggggAACCCCAQDyBwIRaPfdVz4r1fvRM2aC26dOn28KFC4M6PMaFAAIIIIAAAggccgKBeU7tiBEj7P3334+6ANWrV7dTTz3Vbr75ZtPX0wal/fGPf7QLL7zQTjvttKAMKaVx6FvY9ADj4447LqXt2QgBBBBAAAEEEAiLQGBCrb7VTAH2d7/7nbPTTO2SJUvs+eeft8GDB9vs2bPdV9yGBTaI47ztttssLy/PHnnkkSAOjzEhgAACCCCAAAIHLBCYUKszqFmzZtSMbJs2baxJkyZ2/fXX2z//+U/r2rVr1InG+6paLdNXqPm/7ta/k9Yn+zaw0tb7+0rl9cHoL9Exk321nM4l0X7+80z2VcP+7XiNAAIIIIAAAghkUiAwNbWJTrpRo0Zu1e7du93v8847z5599llTucJJJ51kDzzwgFu+evVqu+GGG6xz58521lln2R133GHePtrg3XfftUsvvdTto7KBUaNGuY/itU5hbtKkSda9e3e3Xr8fffRR27Nnj1aX2l544QUXuF977TW37fbt2+3uu++O9HfdddfZF1984daplOLaa68t0efEiRPt4osvdmMpsXL/gr/97W925ZVXuvH17t3bnnzyychmn3/+uTv+ggULIi7qS2USBQUFtnLlSrdefbz99tvutSzUiouL7amnnorY/PznP7f33nsv0vfMmTPdOs2U6z8V7dq1s++++y6ynhcIIIAAAggggEAQBAIdatetW2dPPPGEqbZWQVVt165dNm7cOKtRo4Y988wz1q9fP1u/fr0LfIcddpi99NJLdtddd9ny5cvt1ltvdfuojlQh+PTTT7dXX33VBULNOC5btsytf+utt2zChAlumzfffNPtP3fuXNu6datbn+yfqVOnuu2HDh1qF110kanf4cOH24oVK+yxxx6zadOmWeXKle2q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"},90644:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/08-Scroll_Down-d1620d167c6c3cbf4bbaa2e3778f6d6a.png"},22400:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/09-Instruction-Click-Get-Started-Button-d3c45f07b4198f4b76db7cef305d1029.png"},73320:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/10-Click-Little-Paper-Plane-9ebc26066367d7393e0f9bae9d94c73d.png"},34340:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/11-Simulate-8adfffa6c184d2616e15feca2ea8e43e.png"},79740:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/12-important-note-askui-hosted-f0a56bfbedac461d59d09d7224938785.png"},95920:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/13-final-workflow-31cc22fa4084a060de3cd559bad677c0.png"},86300:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/14-Runs-icon-4433fee30f882c7ad62ef339fc3fedbe.png"},47092:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/15-New-Run-b2a0c683915330a51a1c633a3917b3c5.png"},88672:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/16-AskUI-Hosted-Run-Config-6a62495f2a5acd700c08e990fa693959.png"},39292:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/17-Waiting-Run-To-Finish-31baf343a32cdcfaafe79ef456d273e2.png"},32436:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/18-Click-View-Report-b9842e0ddbd0af3cf30b0b15c33eb348.png"},53352:(A,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/19-Report-With-4-Runs-ecd6dd98793602f6fbbb9c075e45b3ff.png"},4552:(A,e,t)=>{t.d(e,{I:()=>r,M:()=>o});var n=t(11504);const s={},i=n.createContext(s);function o(A){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function r(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(s):A.components||s:o(A.components),n.createElement(i.Provider,{value:e},A.children)}}}]);