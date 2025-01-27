"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89512],{45940:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var s=r(17624),l=r(4552);const o={sidebar_position:1},i="Azure DevOps",t={id:"general/Integrations/azure-devops",title:"Azure DevOps",description:"Place the AskUI workflow files into the folder workflows in the root of your repository (Important: Can differ if you chose a different name when you created the AskUI project).",source:"@site/versioned_docs/version-0.20.7/general/05-Integrations/azure-devops.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/azure-devops",permalink:"/docs/0.20.7/general/Integrations/azure-devops",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/versioned_docs/version-0.20.7/general/05-Integrations/azure-devops.md",tags:[],version:"0.20.7",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Gitlab CI/CD",permalink:"/docs/0.20.7/general/Integrations/gitlab-ci"},next:{title:"Using AskUI in Docker",permalink:"/docs/0.20.7/general/Integrations/containers"}},a={},c=[];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"azure-devops",children:"Azure DevOps"})}),"\n",(0,s.jsxs)(n.p,{children:["Place the AskUI workflow files into the folder ",(0,s.jsx)(n.code,{children:"workflows"})," in the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"root"})})," of your repository (",(0,s.jsx)(n.strong,{children:"Important: Can differ if you chose a different name when you created the AskUI project"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"Then implement the following steps in your pipeline:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Set the pipeline variables:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ASKUI_WORKSPACE_ID"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ASKUI_TOKEN"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ASKUI_INFERENCE_SERVER_URL"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optional"}),": ",(0,s.jsx)(n.code,{children:"UI_CONTROLLER_URL"})," if the UIController is running on a remote machine and not localhost or as a service inside your pipeline."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Setup docker and ",(0,s.jsx)(n.code,{children:"node"})," in version ",(0,s.jsx)(n.code,{children:"16.x"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- task: DockerInstaller@0\n  inputs:\n    dockerVersion: '17.09.0-ce'\n- task: NodeTool@0\n  inputs:\n    versionSpec: '16.x'\n  displayName: 'Install Node.js'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Start the AskUI Controller from our Docker image"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- bash: |\n\tsudo ufw disable\n\techo 'Start UIController'\n\tdocker run -d -p 6769:6769 --cidfile container.cid askuigmbh/askui-ui-controller:v0.11.2-chrome-100.0.4896.60-amd64\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Install all dependencies and run the workflow:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo 'Run npm install'\nnpm install\necho 'Run AskUI'\nexport ASKUI_TOKEN=$(ASKUI_TOKEN)\nexport ASKUI_WORKSPACE_ID=$(ASKUI_WORKSPACE_ID)\nnpm run askui\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For reports:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Generate reports"}),"\n",(0,s.jsx)(n.li,{children:"Deploy/Send reports"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- bash: |\n    curl -o allure-commandline-2.10.0.tgz -OLs https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/2.10.0/allure-commandline-2.10.0.tgz\n    sudo tar -zxf allure-commandline-2.10.0.tgz -C .\n    echo \"Creating allure-report\"\n    ./allure-2.10.0/bin/allure generate allure-results -o allure-report\n    echo \"allure-report created\"\n# Install https://github.com/mclay/azure-pipeline-allure-report first\n- task: PublishAllureReport@1\n  displayName: 'Publish Allure Report'\n  inputs:\n    reportDir: 'allure-report'\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/askui/askui-ci/blob/main/azure-devops/azure-pipelines-without-askui-studio.yml",children:"Please check the full example file on GitHub."})})]})}function u(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>t,M:()=>i});var s=r(11504);const l={},o=s.createContext(l);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);