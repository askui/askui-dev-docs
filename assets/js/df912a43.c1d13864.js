"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7195],{5948:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var o=i(17624),d=i(4552);const t={sidebar_position:4,title:"Automating Mobile Devices"},s=void 0,r={id:"general/Executing Automations/mobile-automation",title:"Automating Mobile Devices",description:"Index",source:"@site/docs/general/04-Executing Automations/mobile-automation.md",sourceDirName:"general/04-Executing Automations",slug:"/general/Executing Automations/mobile-automation",permalink:"/docs/next/general/Executing Automations/mobile-automation",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/docs/general/04-Executing Automations/mobile-automation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Automating Mobile Devices"},sidebar:"docsSidebar",previous:{title:"Implement Assertions",permalink:"/docs/next/general/Element Selection/assertions"},next:{title:"Automating Multiple Devices",permalink:"/docs/next/general/Executing Automations/multi-device-automation"}},l={},a=[{value:"Android",id:"android",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Set up a Real Android Device",id:"set-up-a-real-android-device",level:4},{value:"Install Android SDK Command-line Tools",id:"install-android-sdk-command-line-tools",level:3},{value:"3. Set Up the ADBKeyboard",id:"3-set-up-the-adbkeyboard",level:3},{value:"4. Done",id:"4-done",level:3},{value:"iOS Automation",id:"ios-automation",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Index"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"#android",children:"Android Automation"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"#ios-automation",children:"iOS Automation"})}),"\n",(0,o.jsx)(n.h2,{id:"android",children:"Android"}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will walk you through how to set up an Android device for automating mobile apps running on Android devices (physical or emulated)."}),"\n",(0,o.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Android device: real or emulated."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"set-up-a-real-android-device",children:"Set up a Real Android Device"}),"\n",(0,o.jsx)(n.p,{children:"This part is for setting up a real Android device. If you want to use an Android emulator instead, then you can skip it and go directly to the next step."}),"\n",(0,o.jsxs)(n.p,{children:["To use additional development features in an Android device, you need to enable the ",(0,o.jsx)(n.code,{children:"Developer Options"})," within the device. To enable the ",(0,o.jsx)(n.code,{children:"Developer Options"}),", tap the ",(0,o.jsx)(n.code,{children:"Build Number"})," option 7 times. You can find this option in one of the following locations, depending on your Android version:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Android 9 (API level 28) and higher: ",(0,o.jsx)(n.code,{children:"Settings"})," > ",(0,o.jsx)(n.code,{children:"About Phone"})," > ",(0,o.jsx)(n.code,{children:"Build Number"})]}),"\n",(0,o.jsxs)(n.li,{children:["Android 8.0.0 (API level 26) and Android 8.1.0 (API level 26): ",(0,o.jsx)(n.code,{children:"Settings"})," > ",(0,o.jsx)(n.code,{children:"System"})," > ",(0,o.jsx)(n.code,{children:"About Phone"})," > ",(0,o.jsx)(n.code,{children:"Build Number"})]}),"\n",(0,o.jsxs)(n.li,{children:["Android 7.1 (API level 25) and lower: ",(0,o.jsx)(n.code,{children:"Settings"})," > ",(0,o.jsx)(n.code,{children:"About Phone"})," > ",(0,o.jsx)(n.code,{children:"Build Number"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["After enabling the ",(0,o.jsx)(n.code,{children:"Developer Options"}),", you can enable the ",(0,o.jsx)(n.code,{children:"USB debugging"})," option. This option will allow the Android Studio and other SDK tools to recognize your Android device via USB. To enable USB debugging, toggle the USB debugging option in the Developer Options menu. You can find this option in one of the following locations, depending on your Android version:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Android 9 (API level 28) and higher: ",(0,o.jsx)(n.code,{children:"Settings"})," > ",(0,o.jsx)(n.code,{children:"System"})," > ",(0,o.jsx)(n.code,{children:"Advanced"})," > ",(0,o.jsx)(n.code,{children:"Developer Options"})," > ",(0,o.jsx)(n.code,{children:"USB debugging"})]}),"\n",(0,o.jsxs)(n.li,{children:["Android 8.0.0 (API level 26) and Android 8.1.0 (API level 26): ",(0,o.jsx)(n.code,{children:"Settings"})," > ",(0,o.jsx)(n.code,{children:"System"})," > ",(0,o.jsx)(n.code,{children:"Developer Options"})," > ",(0,o.jsx)(n.code,{children:"USB debugging"})]}),"\n",(0,o.jsxs)(n.li,{children:["Android 7.1 (API level 25) and lower: ",(0,o.jsx)(n.code,{children:"Settings"})," > ",(0,o.jsx)(n.code,{children:"Developer Options"})," > ",(0,o.jsx)(n.code,{children:"USB debugging"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"install-android-sdk-command-line-tools",children:"Install Android SDK Command-line Tools"}),"\n",(0,o.jsxs)(n.p,{children:["Download the ",(0,o.jsx)(n.strong,{children:"SDK Platform-Tools"})," from the ",(0,o.jsx)(n.a,{href:"https://developer.android.com/studio/releases/platform-tools",children:"official site"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Unzip the .zip file. You can find the ",(0,o.jsx)(n.code,{children:"adb"})," binary within the extracted directory."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd platform-tools\n# Show every available Android devices\n./adb devices\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["The command ",(0,o.jsx)(n.code,{children:"adb"})," is usually not added to your ",(0,o.jsx)(n.code,{children:"$PATH"})," and will not be available globally. Please ",(0,o.jsx)(n.a,{href:"https://developer.android.com/tools#environment-variables",children:"follow the official docs"})," to set it up."]})}),"\n",(0,o.jsx)(n.h3,{id:"3-set-up-the-adbkeyboard",children:"3. Set Up the ADBKeyboard"}),"\n",(0,o.jsx)(n.p,{children:"Until now, you have prepared your Android device and now you are ready to go for automating our Android app. But before you jump into this phase, you will set up one more utility that will make the procedure easier."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/senzhk/ADBKeyBoard",children:"ADBKeyboard"})," is a virtual keyboard that can be installed on Android devices. It enables us to type within the Android device by issuing commands via ",(0,o.jsx)(n.code,{children:"adb"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["One noticeable advantage of using ADBKeyboard is that it can also handle base64 encoding, which becomes handy if you want to type Unicode characters such as emojis. For more details about this virtual keyboard, ",(0,o.jsx)(n.a,{href:"https://github.com/senzhk/ADBKeyBoard/blob/master/README.md",children:"see here"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To install the ADBKeyboard on your device,"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Download the ADBKeyboard package from ",(0,o.jsx)(n.a,{href:"https://github.com/senzhk/ADBKeyBoard/releases/tag/v2.0",children:"this GitHub Repository"})," ",(0,o.jsx)(n.em,{children:"(Important: Version 2.0)"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Unzip it."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Find your device:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# make sure that your Android device is connected.\n# in case of using the emulator, it should be running\nadb devices\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Install the ADBKeyboard on the device:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# inside ADBKeyBoard-2.0/\nadb -s <your device id> install ADBKeyboard.apk\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Configure the ADB Keyboard:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"adb -s <your device id> shell settings put secure default_input_method com.android.adbkeyboard/.AdbIME\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Enable the ADBKeyboard:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"adb -s <your device id> shell ime enable com.android.adbkeyboard/.AdbIME\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["To check if it is enabled:\nClick on a textfield in an app and see if the ",(0,o.jsx)(n.code,{children:"ADB Keyboard {ON}"})," notification is shown at the bottom of the screen."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"4-done",children:"4. Done"}),"\n",(0,o.jsx)(n.p,{children:"We are finally done with the preparation for automating apps running on Android devices."}),"\n",(0,o.jsxs)(n.p,{children:["You can now try your setup in our ",(0,o.jsx)(n.a,{href:"/docs/next/general/Tutorials/android-search-in-browser",children:"Automate Web Search on Android Devices Tutorial"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you have a recurring or persisting issue while following this tutorial, don\u2019t hesitate to ask the ",(0,o.jsx)(n.a,{href:"https://community.askui.com/forums/home",children:"Outverse-Community"})," for help!"]}),"\n",(0,o.jsx)(n.h2,{id:"ios-automation",children:"iOS Automation"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["This page is currently under construction. If you have any questions, please feel free to reach out to ",(0,o.jsx)(n.a,{href:"mailto:info@askui.com",children:"info@askui.com"})," or book a meeting with Jonas ",(0,o.jsx)(n.a,{href:"https://calendly.com/jonas-menesklou/digital-get-to-know",children:"over Calendly"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,d.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>s});var o=i(11504);const d={},t=o.createContext(d);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);