"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25224],{77088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(17624),s=t(4552);const a={sidebar_position:5},r="Web Search on Android",o={id:"general/Tutorials/android-search-in-browser",title:"Web Search on Android",description:"In this tutorial, we will automate web searching on Android devices. This tutorial assumes that you have already set up your Android Development Environment. If you haven't set it up yet, you can check out our Setup Android tutorial.",source:"@site/docs/general/06-Tutorials/android-search-in-browser.md",sourceDirName:"general/06-Tutorials",slug:"/general/Tutorials/android-search-in-browser",permalink:"/docs/next/general/Tutorials/android-search-in-browser",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/06-Tutorials/android-search-in-browser.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Annotations, Screenshots and Videos",permalink:"/docs/next/general/Element Selection/annotations-and-screenshots"},next:{title:"Flutter Sample Android App",permalink:"/docs/next/general/Tutorials/flutter-android-sample-app"}},c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"1. Prepare the AskUI Development Environment",id:"1-prepare-the-askui-development-environment",level:2},{value:"Install and initialize AskUI",id:"install-and-initialize-askui",level:3},{value:"2. Try Annotating",id:"2-try-annotating",level:2},{value:"3. Automate Web Searching",id:"3-automate-web-searching",level:2},{value:"1) Open Chrome",id:"1-open-chrome",level:3},{value:"2) Select the Search Bar and Type &#39;spacecraft&#39;",id:"2-select-the-search-bar-and-type-spacecraft",level:3},{value:"3) Click on the Desired Search Result",id:"3-click-on-the-desired-search-result",level:3},{value:"4. Complete AskUI Code",id:"4-complete-askui-code",level:2},{value:"5. Conclusion",id:"5-conclusion",level:2}];function h(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"web-search-on-android",children:"Web Search on Android"})}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial, we will automate web searching on Android devices. This tutorial assumes that you have already set up your Android Development Environment. If you haven't set it up yet, you can check out our ",(0,i.jsx)(n.a,{href:"/docs/next/general/Executing%20Automations/mobile-automation#android",children:"Setup Android tutorial"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you have already set up your development environment, go directly to ",(0,i.jsx)(n.a,{href:"#3-automate-web-searching",children:"3. Automate Web Searching"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Index"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#1-prepare-the-askui-development-environment",children:"1. Prepare the AskUI Development Environment"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"#2-try-annotating",children:"2. Try Annotation"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"#3-automate-web-searching",children:"3. Automate Web Searching"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"#4-complete-askui-code",children:"4. Complete AskUI Code"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"#5-conclusion",children:"5. Conclusion"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Android Studio"})," or ",(0,i.jsx)(n.strong,{children:"Android SDK Command-line Tools"})," installed (See ",(0,i.jsx)(n.a,{href:"/docs/next/general/Executing%20Automations/mobile-automation#android",children:"Setup Android tutorial"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"(optional) Android device, if you want to run your app on a real device."}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-prepare-the-askui-development-environment",children:"1. Prepare the AskUI Development Environment"}),"\n",(0,i.jsx)(n.h3,{id:"install-and-initialize-askui",children:"Install and initialize AskUI"}),"\n",(0,i.jsxs)(n.p,{children:["Please follow the ",(0,i.jsx)(n.a,{href:"/docs/next/general/Getting%20Started/Installing%20AskUI/getting-started",children:"Getting Started"})," tutorial."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Configure AskUI for Android"})}),"\n",(0,i.jsx)(n.p,{children:"We need to run the AskUI Controller manually with an extra argument to specify the runtime mode, as the current version of AskUI doesn't provide the API for running it with the runtime option yet:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# first, go to the folder that contains the binary\ncd <YOUR_PROJECT_DIRECTORY>/node_modules/askui/dist/release/latest/<YOUR_PLATFORM>\n\n# for example, Mac OS\ncd node_modules/askui/dist/release/latest/darwin/askui-ui-controller.app/Contents/MacOS/\n\n# then run it\n./askui-ui-controller -r android\n\n# If you can't find the binary as described above,\n# then you might have AskUI freshly installed and haven't run it yet.\n# The binary gets downloaded as the AskUI code runs the first time.\n# Run the command below to run the AskUI code:\nnpm run askui\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the AskUI Controller starts, it will display its logs in the terminal. We can leave it in the background, and prepare a new terminal window for the next step."}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udca1",(0,i.jsxs)(n.em,{children:["If you got any errors after running the binary, please check if your android device/emulator is properly connected and recognized by the Android Debug Bridge ",(0,i.jsx)(n.code,{children:"adb"})," by using this command: ",(0,i.jsx)(n.code,{children:"adb devices"}),". You should see a list of recognized devices."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Next, we have to change a few lines of the generated code, as the code ships with the part that creates another ",(0,i.jsx)(n.strong,{children:"AskUI Controller"})," instance."]}),"\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.code,{children:"helper/jest.setup.ts"})," and comment out every line that is using ",(0,i.jsx)(n.code,{children:"uiController"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { UiControlClient, UiController } from 'askui';\n\n// Server for controlling the operating system\n// let uiController: UiController;\n\n// Client is necessary to use the askui API\n// eslint-disable-next-line import/no-mutable-exports\nlet aui: UiControlClient;\n\njest.setTimeout(60 * 1000 * 60);\n\nbeforeAll(async () => {\n//   uiController = new UiController({\n//     /**\n//      * Select the display you want to run your tests on, display 0 is your main display;\n//      * ignore if you have only one display\n//      */\n//     display: 0,\n//   });\n\n//   await uiController.start();\n\n  aui = await UiControlClient.build({\n    credentials: {\n      workspaceId: myworkspaceid,\n      token: mytoken,\n    }\n  });\n\n  await aui.connect();\n});\n\nafterAll(async () => {\n//   await uiController.stop();\n\n  aui.disconnect();\n});\n\nexport { aui };\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"2-try-annotating",children:"2. Try Annotating"}),"\n",(0,i.jsx)(n.p,{children:"Make sure that your Android device is connected, or if you are using the Android Emulator, make sure that it is open and running on your local machine."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"AskUI"})," provides a feature where you can monitor how the visible elements are understood by ",(0,i.jsx)(n.strong,{children:"AskUI"}),". Try to change the code within ",(0,i.jsx)(n.code,{children:"test/my-first-askui-test-suite.test.ts"})," to the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { aui } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n  it('should show the annotation', async () => {\n    await aui.annotateInteractively();\n  });\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"and run,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run askui\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"annotated-chrome",src:t(27552).c+"",width:"600",height:"1386"})}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,i.jsx)(n.strong,{children:"Annotation is Interactive"}),"\n",(0,i.jsx)(n.em,{children:"Try to hover your mouse on the red bounding box. It will let you know how to manipulate that element via AskUI"})]}),"\n",(0,i.jsx)(n.h2,{id:"3-automate-web-searching",children:"3. Automate Web Searching"}),"\n",(0,i.jsx)(n.p,{children:"Now we are good to go for the actual automation process.\nThe automation consist of three steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open Chrome"}),"\n",(0,i.jsx)(n.li,{children:"Select the search bar and type 'spacecraft'"}),"\n",(0,i.jsx)(n.li,{children:"Click on the desired search result"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"1-open-chrome",children:"1) Open Chrome"}),"\n",(0,i.jsxs)(n.p,{children:["To open Chrome, we first have to figure out how we can let ",(0,i.jsx)(n.strong,{children:"AskUI"})," know where to click on."]}),"\n",(0,i.jsxs)(n.p,{children:["As we can see in the annotated image above, the Chrome icon is recognized as an ",(0,i.jsx)(n.code,{children:"icon: undo"}),". Indeed, we could also tell ",(0,i.jsx)(n.strong,{children:"AskUI"})," to select the ",(0,i.jsx)(n.code,{children:"icon: undo"}),", but we will try to do it in a more precise way."]}),"\n",(0,i.jsx)(n.p,{children:"What we're gonna do is:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"(1) Select the search bar"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"(2) Type 'chrome'"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"(3) Select the icon above the text 'chrome'"})}),"\n",(0,i.jsx)(n.p,{children:'This approach will give us a more consistent result because typing "chrome" in the search bar will give us a more understandable visual element.'}),"\n",(0,i.jsx)(n.p,{children:"Try to change your code according to this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { aui } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n  it('should open chrome', async () => {\n\n    await aui.click().textfield().exec();\n\n    // Type the desired keyword into the search bar\n    await aui.type('chrome').exec();\n\n    // We wait for 1500 milliseconds, to make sure that the search result \n    // has been loaded before AskUI start to look for the search result. \n    await aui.waitFor(1500).exec(); \n\n    // Then click the icon that is above the text 'chrome'\n    await aui.click().icon().above().text('chrome').exec();\n  });\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"and run,"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run askui\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now you will be able to see that Chrome has been opened."}),"\n",(0,i.jsx)(n.h3,{id:"2-select-the-search-bar-and-type-spacecraft",children:"2) Select the Search Bar and Type 'spacecraft'"}),"\n",(0,i.jsx)(n.p,{children:"Let's select the search bar of chrome, and type our desired keyword in there."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"chrome-main-page",src:t(56388).c+"",width:"600",height:"1373"})}),"\n",(0,i.jsx)(n.p,{children:"Add this code block to the bottom of our code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// We first look for the search bar. Depending on the system language of your device, the default text within the search bar may differ.\nawait aui.clickText({text: 'search or type web address', type: 'similar'});\n\n// Type our desired keyword and hit enter\nawait aui.type('spacecraft').exec();\nawait aui.pressAndroidKey('enter').exec();\n"})}),"\n",(0,i.jsx)(n.p,{children:"In some cases, when searching in Google, you will be asked to give consent for the cookies.\nTo avoid our execution from failing, we have to examine whether we got a pop-up for the cookie consent or not:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"try {\n    // The 'expect()' examines whether a specific element is detected or not.\n    // An instruction starting with 'expect()' must always end with 'exists()' or 'notExists()'\n    await aui.expect().text().containsText('cookies').notExists().exec();\n} catch (error) {\n    await aui.clickText({text: 'read more', type: 'similar'});\n    await aui.waitFor(1000).exec(); // wait until the scrolling animation has been finished\n    await aui.clickText({text: 'accept all', type: 'similar'});\n}\n// From here, we can write our next instructions\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-click-on-the-desired-search-result",children:"3) Click on the Desired Search Result"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"search-result-spacecraft",src:t(11536).c+"",width:"600",height:"1373"})}),"\n",(0,i.jsx)(n.p,{children:"After clearing the cookie consent pop-up, we can see and click our desired search result. In our case, we will look for the result from Wikipedia:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// We ask the AskUI to click the text that contains 'wikipedia',\n// which is the text that is nearest to the text containing 'wikipedia.org'\nawait aui.click()\n    .text()\n    .containsText('wikipedia')\n    .nearestTo()\n    .text()\n    .containsText('wikipedia.org')\n    .exec();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Pay attention to the relational element-description ",(0,i.jsx)(n.code,{children:"nearestTo()"})," that is interconnecting two different text elements."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"AskUI"})," offers several ",(0,i.jsx)(n.strong,{children:"Relational Element-Descriptions"}),", which enable you to select the desired element by their screen position:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.askui.com/docs/api/Relations/above",children:"above()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.askui.com/docs/api/Relations/below",children:"below()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.askui.com/docs/api/Relations/contains",children:"contains()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.askui.com/docs/api/Relations/in",children:"in()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.askui.com/docs/api/Relations/leftof",children:"leftOf()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.askui.com/docs/api/Relations/rightof",children:"rightOf()"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.askui.com/docs/api/Relations/nearestto",children:"nearestTo()"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,i.jsx)(n.strong,{children:"About withText() and containsText():"})]}),"\n",(0,i.jsxs)(n.p,{children:["You might wonder how ",(0,i.jsx)(n.code,{children:"withText()"})," and ",(0,i.jsx)(n.code,{children:"containsText()"})," differ. ",(0,i.jsx)(n.code,{children:"withText()"})," tries to match the given text as the whole sequence, whereas ",(0,i.jsx)(n.code,{children:"containsText()"})," tries to match the given text as a sub-text within the elements. Generally speaking, ",(0,i.jsx)(n.code,{children:"containsText()"})," can be handier to match the text roughly, but you might face a case where you want to find a specific text as a whole sequence."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"4-complete-askui-code",children:"4. Complete AskUI Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { aui } from './helper/jest.setup';\n\ndescribe('jest with askui', () => {\n  it('should search spacecraft in chrome', async () => {\n    \n    await aui.click().textfield().exec();    \n\n    // Type the desired keyword into the search bar\n    await aui.type('chrome').exec();\n    // We wait for 1500 miliseconds, to make sure that the search result has been loaded before AskUI start to look for the search result. \n    await aui.waitFor(1500).exec(); \n    // Then click the icon that is above the text 'chrome'\n    await aui.click().icon().above().text('chrome').exec();\n\n    // We wait the Chrome app to be launched\n    await aui.waitFor(1500).exec();\n\n    // We first look for the search bar. Depending on the system language of your device, the default text within the search bar may differ.\n    await aui.clickText({text: 'search or type web address', type: 'similar'});\n\n    // Type our desired keyword and hit enter\n    await aui.type('spacecraft').exec();\n    await aui.pressAndroidKey('enter').exec();\n\n    // We wait for the search result to be loaded\n    await aui.waitFor(3000).exec();\n\n    try {\n        // The 'expect()' examines whether a specific element is detected or not.\n        // An instruction starting with 'expect()' must always end with 'exists()' or 'notExists()'\n        await aui.expect().text().containsText('cookies').notExists().exec();\n    } catch (error) {\n        await aui.clickText({text: 'read more', type: 'similar'});\n        await aui.waitFor(1000).exec(); // wait until the scrolling animation has been finished\n        await aui.clickText({text: 'accept all', type: 'similar'});\n    }\n\n    // We ask the AskUI to click the text that contains 'wikipedia' which is the text that is nearest to the text containing 'wikipedia.org'\n    await aui.click().text().containsText('wikipedia').nearestTo().text().containsText('wikipedia.org').exec();\n  });\n});\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"5-conclusion",children:"5. Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["We have covered a use case of AskUI to automate web searching in Android devices. If you got any issues while following the instruction, feel free to ask in our ",(0,i.jsx)(n.a,{href:"https://community.askui.com/forums/home",children:"Outverse-Community"}),"!"]})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},27552:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/annotation-chrome-46e87cbace798b3fa4297a88a33863e9.png"},56388:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/chrome-main-d9fee1233fe042983eb2f0c6fad8090b.png"},11536:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/search-result-27de309a46eec5fe671e882d87c03ef9.png"},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>r});var i=t(11504);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);