"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14784],{99356:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(17624),t=i(4552);const r={sidebar_position:5},l="Silent Unix Installer (macOS, Linux)",o={id:"suite/Components/silent-unix-installer",title:"Silent Unix Installer (macOS, Linux)",description:"The installer for macOS and Linux requires user interaction during the installation. The silent mode lets you install the AskUI Suite without further user interaction.",source:"@site/docs/suite/02-Components/silent-unix-installer.md",sourceDirName:"suite/02-Components",slug:"/suite/Components/silent-unix-installer",permalink:"/docs/next/suite/Components/silent-unix-installer",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/docs/suite/02-Components/silent-unix-installer.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"suiteSidebar",previous:{title:"Annotations for Retraining",permalink:"/docs/next/suite/ADE/annotations-for-training"},next:{title:"Command Configuration File",permalink:"/docs/next/suite/ADE/command-configuration-file"}},a={},c=[{value:"Usage",id:"usage",level:2},{value:"Help Arguments",id:"help-arguments",level:3},{value:"Installation Arguments",id:"installation-arguments",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"silent-unix-installer-macos-linux",children:"Silent Unix Installer (macOS, Linux)"})}),"\n",(0,s.jsxs)(n.p,{children:["The installer for macOS and Linux requires user interaction during the installation. The silent mode lets you install the ",(0,s.jsx)(n.em,{children:"AskUI Suite"})," without further user interaction."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"help-arguments",children:"Help Arguments"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-v, \u2014version"}),": Display the installer version."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"> bash ./AskUI-Suite-<your version>-User-Installer-<MacOS or Linux>-<AMD64 or ARM64>-Full.run -v\n\nAskUI Suite Installer version 24.8.1\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-h, \u2014help"}),": Display help information."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"> bash ./AskUI-Suite-<your version>-User-Installer-<MacOS or Linux>-<AMD64 or ARM64>-Full.run -h \n\nAskUI Suite Installer version 24.9.1.2\n 1) Getting help or info about ./AskUI-Suite-24.9.1.2-User-Installer-MacOS-ARM64-Full.run:\n    ./AskUI-Suite-24.9.1.2-User-Installer-MacOS-ARM64-Full.run -h, --help      Print this message\n    ./AskUI-Suite-24.9.1.2-User-Installer-MacOS-ARM64-Full.run -v, --version   Print installer version\n    ./AskUI-Suite-24.9.1.2-User-Installer-MacOS-ARM64-Full.run -i, --info      Print embedded info: title, version, OS, Architecture, ...\n\n 2) Running ./AskUI-Suite-24.9.1.2-User-Installer-MacOS-ARM64-Full.run:\n    ./AskUI-Suite-24.9.1.2-User-Installer-MacOS-ARM64-Full.run [options]\n    with following options (in that order)\n    -a, --accept-license    \n        Bypass the display and prompting for acceptance of the\n        askui GmbH License Agreement. By passing this option\n        you indicate that you have read and accept the License Agreement.\n\n    -sm, --silent-mode\n        Run the installer in silent mode. No user interaction is required.\n        This implies that the license agreement is accepted.\n\n    -cfg, --configuration-file <filePath>    \n        Installer configuration file path in JSON format.\n        Available keys are:\n            OverwritePreviousInstaller (true/false)\n            ProxyHttpAddress (string)\n            ProxyHttpsAddress (string)\n            TLSConnectionCertificate (string)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-i, \u2014info"}),": Display embedded information about the installer."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"> bash ./AskUI-Suite-<your version>-User-Installer-<MacOS or Linux>-<AMD64 or ARM64>-Full.run -i\nIdentification: AskUI Suite Installer\nversion: 24.9.1.2\nBuilt for OS: MacOS\nBuilt for Architecture: ARM64\nUncompressed size: 1402820 KB\nCompression: gzip\nEncryption: n\nDate of packaging: Wed Sep 25 09:28:17 CEST 2024\nBuilt with Makeself version 2.5.0\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation-arguments",children:"Installation Arguments"}),"\n",(0,s.jsx)(n.p,{children:"The installer accepts three arguments:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-a, --accept-license"}),": Bypass the display and prompting for acceptance of  askui GmbH License Agreement. By passing this option you indicate that you have read and accept the License Agreement."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-sm, --silent-mode"}),": Run the installer in silent mode. No user interaction is required. This implies that the license agreement is accepted.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If used without a configuration file, the following default settings will be applied:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"OverwritePreviousInstaller"}),": ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ProxyHttpAddress"}),": undefined"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ProxyHttpsAddress"}),": undefined"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"TLSConnectionCertificate"}),": undefined"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-cfg, --configuration-file <absoluteFilePath>"}),": Specify the path to the installer configuration file in JSON format.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Available keys are:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"OverwritePreviousInstaller"}),": (true/false)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ProxyHttpAddress"}),": (string)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ProxyHttpsAddress"}),": (string)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"TLSConnectionCertificate"}),": (string)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "OverwritePreviousInstaller": false,\n    "ProxyHttpAddress"  : "http://Proxy:8080",\n    "ProxyHttpsAddress"  : "http://Proxy:8080",\n    "TLSConnectionCertificate": "<absoluteFilePath>",\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>l});var s=i(11504);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);