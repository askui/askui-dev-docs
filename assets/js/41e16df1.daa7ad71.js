"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94792],{36752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=t(17624),s=t(4552);const i={sidebar_position:6},o="Proxy",l={id:"general/Troubleshooting/proxy",title:"Proxy",description:"In enterprises, proxies are a standard to secure and control network traffic.",source:"@site/versioned_docs/version-0.18.1/general/07-Troubleshooting/proxy.md",sourceDirName:"general/07-Troubleshooting",slug:"/general/Troubleshooting/proxy",permalink:"/docs/0.18.1/general/Troubleshooting/proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/askui/askui/tree/main/docs/versioned_docs/version-0.18.1/general/07-Troubleshooting/proxy.md",tags:[],version:"0.18.1",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"macOS",permalink:"/docs/0.18.1/general/Troubleshooting/mac-os"},next:{title:"Windows",permalink:"/docs/0.18.1/general/Troubleshooting/windows"}},c={},a=[{value:"Installing AskUI Through NTLM or Kerberos Proxy Server",id:"installing-askui-through-ntlm-or-kerberos-proxy-server",level:2},{value:"Install Local Proxy",id:"install-local-proxy",level:3},{value:"Windows Startup",id:"windows-startup",level:3},{value:"Create <code>.npmrc</code> file for <code>npm</code>",id:"create-npmrc-file-for-npm",level:3},{value:"Set Environment Variables",id:"set-environment-variables",level:3},{value:"AskUI Controller Connection to AskUI Inference",id:"askui-controller-connection-to-askui-inference",level:2},{value:"Using Default Configuration with hpagent",id:"using-default-configuration-with-hpagent",level:3},{value:"Manually Configuring the HTTP and HTTPS Agent",id:"manually-configuring-the-http-and-https-agent",level:3},{value:"Deep Package Inspection",id:"deep-package-inspection",level:3},{value:"Deactivate TLS certificate validation (NOT RECOMMENDED)",id:"deactivate-tls-certificate-validation-not-recommended",level:4},{value:"Add Self-Signed Certificate as Extra CA Certs (RECOMMENDED)",id:"add-self-signed-certificate-as-extra-ca-certs-recommended",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"proxy",children:"Proxy"})}),"\n",(0,r.jsxs)(n.p,{children:["In enterprises, ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Proxy_server",children:"proxies"})," are a standard to secure and control network traffic."]}),"\n",(0,r.jsx)(n.p,{children:"A problem with a proxy can occur at two points in time:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Installing AskUI"}),"\n",(0,r.jsx)(n.li,{children:"AskUI Controller connection to AskUI Inference"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installing-askui-through-ntlm-or-kerberos-proxy-server",children:"Installing AskUI Through NTLM or Kerberos Proxy Server"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.em,{children:"Windows New Technology LAN Manager"})," (NTLM) or ",(0,r.jsx)(n.em,{children:"Kerberos"})," proxy requires you to authenticate yourself. This is done via your currently logged in Windows user or the ",(0,r.jsx)(n.strong,{children:"username/password"})," combination (Linux, macOS). The easiest way to do this is to install a local proxy that handles the handshake with the proxy for you."]}),"\n",(0,r.jsx)(n.h3,{id:"install-local-proxy",children:"Install Local Proxy"}),"\n",(0,r.jsxs)(n.p,{children:["We recommend ",(0,r.jsxs)(n.a,{href:"https://github.com/genotrance/px",children:[(0,r.jsx)(n.em,{children:"Px"})," as a local proxy"]}),". Install it in your preferred way and start it. The default port it runs on is ",(0,r.jsx)(n.code,{children:"3128"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Choose the binary option if a package manager is not feasible in your environment."})}),"\n",(0,r.jsx)(n.h3,{id:"windows-startup",children:"Windows Startup"}),"\n",(0,r.jsxs)(n.p,{children:["You can add ",(0,r.jsx)(n.em,{children:"Px"})," to the startup for the binary zipped option in Windows like this:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"px-start.bat"})," file within the unzipped folder, e.g., ",(0,r.jsx)(n.code,{children:"c:\\tools\\px"})," with the content:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd c:\\tools\\px (or whatever path you unzipped the archive to)\npx.exe\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Double-Click on the ",(0,r.jsx)(n.code,{children:"px-start.bat"})," file to start ",(0,r.jsx)(n.em,{children:"Px"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Optional"}),": Set up ",(0,r.jsx)(n.em,{children:"Px"})," to autostart on system startup so you don\u2019t have to start it manually each time you want to use it"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.digitalcitizen.life/2-ways-generate-link-shared-network-folder-or-library/#:~:text=If%20you're%20using%20Windows%2010%2C%20hold%20down%20Shift%20on,path%E2%80%9D%20in%20the%20contextual%20menu.",children:"Create a link"})," to ",(0,r.jsx)(n.code,{children:"px-start.bat"})]}),"\n",(0,r.jsxs)(n.li,{children:["Open the startup folder with ",(0,r.jsx)(n.code,{children:"Windows logo key + R"}),", enter\xa0",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"shell:startup"})})]}),"\n",(0,r.jsxs)(n.li,{children:["Move the link to ",(0,r.jsx)(n.code,{children:"px-start.bat"})," into this folder"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"create-npmrc-file-for-npm",children:["Create ",(0,r.jsx)(n.code,{children:".npmrc"})," file for ",(0,r.jsx)(n.code,{children:"npm"})]}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:".npmrc"})," file in your AskUI project. You want to make sure that:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"registry"})," and ",(0,r.jsx)(n.code,{children:"noproxy"})," point to your companies registry (i.e. Artifactory)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"proxy"})," and ",(0,r.jsx)(n.code,{children:"https-proxy"})," point to the local ",(0,r.jsx)(n.em,{children:"Px"})," proxy"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"registry=<company-registry-url>\nproxy=http://127.0.0.1:3128\nhttps-proxy=http://127.0.0.1:3128\nnoproxy=<company-registry-url>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"set-environment-variables",children:"Set Environment Variables"}),"\n",(0,r.jsxs)(n.p,{children:["Setting the proxy inside ",(0,r.jsx)(n.code,{children:".npmrc"})," does not cover all cases. Sometimes a separate ",(0,r.jsx)(n.code,{children:"node"})," command spawns a new process which does not inherit the proxy settings. Therefore you need to set the environment variable ",(0,r.jsx)(n.code,{children:"HTTPS_PROXY"})," like this:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.oracle.com/en/database/oracle/machine-learning/oml4r/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html#GUID-DD6F9982-60D5-48F6-8270-A27EC53807D0",children:"Windows instructions"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# Linux and macOS\n# Add it to your favourite shell\n# at startup if necessary\nexport HTTPS_PROXY=http://127.0.0.1:3128\n"})}),"\n",(0,r.jsx)(n.h2,{id:"askui-controller-connection-to-askui-inference",children:"AskUI Controller Connection to AskUI Inference"}),"\n",(0,r.jsx)(n.p,{children:"We describe two ways to connect to our backend AskUI Inference."}),"\n",(0,r.jsx)(n.h3,{id:"using-default-configuration-with-hpagent",children:"Using Default Configuration with hpagent"}),"\n",(0,r.jsxs)(n.p,{children:["Per default, our library uses ",(0,r.jsx)(n.a,{href:"https://github.com/delvedor/hpagent",children:"hpagent"})," to support the use of HTTP and HTTPS proxies. ",(0,r.jsx)(n.code,{children:"hpagent"})," is an open source package which provides HTTP(S) proxies that keeps connections alive. To use it, you need to"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["install ",(0,r.jsx)(n.code,{children:"hpagent"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev hpagent \n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["configure which proxies to use by setting the proxies' URLs using the environment variables ",(0,r.jsx)(n.code,{children:"HTTP_PROXY"})," or ",(0,r.jsx)(n.code,{children:"HTTPS_PROXY"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export HTTP_PROXY=http://<your-proxy-url>\nexport HTTPS_PROXY=https://<your-proxy-url>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"manually-configuring-the-http-and-https-agent",children:"Manually Configuring the HTTP and HTTPS Agent"}),"\n",(0,r.jsx)(n.p,{children:"If you need even more control, you can also configure an HTTP agent and HTTPS agent supporting your proxy manually for either one or both,"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["the AskUI Controller (configuring the ",(0,r.jsx)(n.code,{children:"UiController"}),") running on the OS you would like to control and"]}),"\n",(0,r.jsxs)(n.li,{children:["the Inference API (configuring the ",(0,r.jsx)(n.code,{children:"UiControlClient"}),") running on our servers and providing the vision to run your tests."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In the following example we are going to use ",(0,r.jsx)(n.a,{href:"https://github.com/delvedor/hpagent",children:"hpagent"})," again but you can use any HTTP and HTTPS agents that support proxies, e.g., the ",(0,r.jsx)(n.a,{href:"https://nodejs.org/api/http.html#class-httpagent",children:"http.Agent"})," or the ",(0,r.jsx)(n.a,{href:"https://nodejs.org/api/https.html#class-httpsagent",children:"https.Agent"})," provided by the ",(0,r.jsx)(n.code,{children:"http"})," and ",(0,r.jsx)(n.code,{children:"https"})," module of Node.js, respectively."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.code,{children:"hpagent"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev hpagent \n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Import ",(0,r.jsx)(n.code,{children:"hpagent"})," (or the agent(s) you would like to use) and configure the ",(0,r.jsx)(n.code,{children:"UiController"})," and/or the ",(0,r.jsx)(n.code,{children:"UiControlClient"})," inside the ",(0,r.jsx)(n.code,{children:"test/helpers/askui-helper.ts"})," file."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { HttpProxyAgent, HttpsProxyAgent } from \'hpagent\'; // <-- Add imports\n// other code\n\nbeforeAll(async () => {\n  // Add this block\n  const httpProxyUrl = "http://<your-proxy-url>" // <-- Adapt http proxy url\n  const httpsProxyUrl = "https://<your-proxy-url>" // <-- Adapt https proxy url\n\n  const proxyAgents = {\n    http: new HttpProxyAgent({\n      proxy: httpProxyUrl,\n    }),\n    https: new HttpsProxyAgent({\n      proxy: httpsProxyUrl,\n    }),\n  }\n\n  // other code\n\n  uiController = new UiController({\n    proxyAgents // <-- Set proxy agents\n  });\n  \n  // other code\n\n  aui = await UiControlClient.build({\n    proxyAgents // <-- Set proxy agents\n  });\n\n  // other code\n})\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Here are some example for the ",(0,r.jsx)(n.code,{children:"httpProxyUrl"})," (for more details see ",(0,r.jsx)(n.a,{href:"https://github.com/delvedor/hpagent#usage",children:"docs from hpagent"}),")"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Proxy Type"}),(0,r.jsx)(n.th,{children:"URL"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP"}),(0,r.jsxs)(n.td,{children:["e.g. ",(0,r.jsx)(n.a,{href:"http://proxy.company.com:8293",children:"http://proxy.company.com:8293"})]}),(0,r.jsx)(n.td,{children:"A HTTP proxy without authentication"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP + Basic Auth"}),(0,r.jsxs)(n.td,{children:["e.g. ",(0,r.jsx)(n.a,{href:"http://username:password@proxy.company.com:8293",children:"http://username:password@proxy.company.com:8293"})]}),(0,r.jsx)(n.td,{children:"A HTTP proxy with authentication"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SOCKET"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Socket proxies are not supported by ",(0,r.jsx)(n.code,{children:"hpagent"})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Here are some example for the ",(0,r.jsx)(n.code,{children:"httpsProxyUrl"})," (for more details see ",(0,r.jsx)(n.a,{href:"https://github.com/delvedor/hpagent#usage",children:"docs from hpagent"}),")"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Proxy Type"}),(0,r.jsx)(n.th,{children:"URL"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTPS"}),(0,r.jsxs)(n.td,{children:["e.g. ",(0,r.jsx)(n.a,{href:"https://proxy.company.com:8293",children:"https://proxy.company.com:8293"})]}),(0,r.jsx)(n.td,{children:"A HTTPS proxy without authentication"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTPS + Basic Auth"}),(0,r.jsxs)(n.td,{children:["e.g. ",(0,r.jsx)(n.a,{href:"https://username:password@proxy.company.com:8293",children:"https://username:password@proxy.company.com:8293"})]}),(0,r.jsx)(n.td,{children:"A HTTP proxy with authentication."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SOCKET"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Socket proxies are not supported by ",(0,r.jsx)(n.code,{children:"hpagent"})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"deep-package-inspection",children:"Deep Package Inspection"}),"\n",(0,r.jsxs)(n.p,{children:["Company proxies, like ",(0,r.jsx)(n.a,{href:"https://www.zscaler.com/resources/security-terms-glossary/what-is-cloud-proxy",children:"Zscalar"}),", use ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Deep_packet_inspection",children:"deep package inspection"})," to analyze the network traffic. Such proxies are adding self-signed certificates to the HTTPS request to break up the TLS connection."]}),"\n",(0,r.jsx)(n.p,{children:"This can result in the following error messages:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" RequestError: self signed certificate\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" RequestError: unable to verify the first certificate\n"})}),"\n",(0,r.jsx)(n.p,{children:"There are multiple options to deal with this:"}),"\n",(0,r.jsx)(n.h4,{id:"deactivate-tls-certificate-validation-not-recommended",children:"Deactivate TLS certificate validation (NOT RECOMMENDED)"}),"\n",(0,r.jsxs)(n.p,{children:["This option deactivates the TLS validation (see ",(0,r.jsx)(n.a,{href:"https://nodejs.org/api/cli.html#node_tls_reject_unauthorizedvalue",children:"here"}),") and ",(0,r.jsx)(n.strong,{children:"is not recommended"}),". Only for testing!"]}),"\n",(0,r.jsx)(n.p,{children:"Windows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"set NODE_TLS_REJECT_UNAUTHORIZED 0\n"})}),"\n",(0,r.jsx)(n.p,{children:"macOS/Unix:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export NODE_TLS_REJECT_UNAUTHORIZED=0\n"})}),"\n",(0,r.jsx)(n.h4,{id:"add-self-signed-certificate-as-extra-ca-certs-recommended",children:"Add Self-Signed Certificate as Extra CA Certs (RECOMMENDED)"}),"\n",(0,r.jsxs)(n.p,{children:["The other option is to add the self-signed certificate as ",(0,r.jsx)(n.a,{href:"https://nodejs.org/api/cli.html#node_extra_ca_certsfile",children:"extra certificates for Node.js"}),"."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Get the certificate and convert it to a ",(0,r.jsx)(n.code,{children:".pem"})," file, e.g., by ",(0,r.jsx)(n.a,{href:"https://superuser.com/a/1292098",children:"exporting it with Chrome"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Set the ",(0,r.jsx)(n.code,{children:"NODE_EXTRA_CA_CERTS"})," with the following commands:"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Windows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"set NODE_EXTRA_CA_CERTS '<path>\\<cert>.pem'\n"})}),"\n",(0,r.jsx)(n.p,{children:"macOS/Unix:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export NODE_EXTRA_CA_CERTS='<path>/<cert>.pem'\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Additional information:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://help.zscaler.com/zia/adding-custom-certificate-application-specific-trusted-store",children:"Get Zscalar custom certificate"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>o});var r=t(11504);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);