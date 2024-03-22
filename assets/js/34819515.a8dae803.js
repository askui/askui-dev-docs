"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39528],{62772:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=s(17624),o=s(4552);const r={displayed_sidebar:"askuiStudioSidebar",custom_edit_url:null},t="GitHub Actions",l={id:"askui-studio/All-Integrations/github-actions",title:"GitHub Actions",description:"You have two options to implement your pipeline. With our AskUI Runner container or without it.",source:"@site/versioned_docs/version-0.16.0/askui-studio/03-All-Integrations/02-github-actions.md",sourceDirName:"askui-studio/03-All-Integrations",slug:"/askui-studio/All-Integrations/github-actions",permalink:"/docs/0.16.0/askui-studio/All-Integrations/github-actions",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"0.16.0",sidebarPosition:2,frontMatter:{displayed_sidebar:"askuiStudioSidebar",custom_edit_url:null},sidebar:"askuiStudioSidebar",previous:{title:"Azure DevOps",permalink:"/docs/0.16.0/askui-studio/All-Integrations/azure-devops"},next:{title:"Gitlab CI",permalink:"/docs/0.16.0/askui-studio/All-Integrations/gitlab-ci"}},u={},c=[{value:"AskUI Runner: Get Workflows from AskUI Studio",id:"askui-runner-get-workflows-from-askui-studio",level:2},{value:"Without AskUI Runner Container",id:"without-askui-runner-container",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,i.jsx)(n.p,{children:"You have two options to implement your pipeline. With our AskUI Runner container or without it."}),"\n",(0,i.jsx)(n.p,{children:"The main difference without the AskUI Runner is, that you can not download the latest version of your workflows from AskUI Studio inside your pipeline but have to provide them to your build."}),"\n",(0,i.jsx)(n.h2,{id:"askui-runner-get-workflows-from-askui-studio",children:"AskUI Runner: Get Workflows from AskUI Studio"}),"\n",(0,i.jsxs)(n.p,{children:["When you want to get the latest version of your workflows from AskUI Studio, the AskUI Runner needs a configuration file ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"config.yaml"})})," to know where to pull them from."]}),"\n",(0,i.jsx)(n.p,{children:"The AskUI Runner downloads the workflows and runs them inside a docker container. You do not have to take care of any installation of tools on your side \ud83e\udd73."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Set these environment variables for your pipeline:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ASKUI_WORKSPACE_ID=<Your workspace id from AskUI Studio>\nASKUI_TOKEN=<An access token from your AskUI Studio workspace>\nASKUI_INFERENCE_SERVER_URL=<Use https://inference.askui.com if your are not on-premise>\nASKUI_WORKFLOW_ENDPOINT_URL=https://app-gateway-api.askui.com/prod/api/v1\n\nDOCKER_USERNAME=<Your Docker Hub username>\nDOCKER_PASSWORD=<Your Docker Hub password>\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Create a ",(0,i.jsx)(n.code,{children:"config.yaml"})," inside your pipeline like this:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat << EOF > config.yaml\n    access_token: ${{ secrets.ASKUI_TOKEN }}\n    inference_server_url: ${{ secrets.ASKUI_INFERENCE_SERVER_URL }}\n    workspace_id: ${{ secrets.ASKUI_WORKSPACE_ID }}\n    workflow_endpoint:\n        prefixes:\n            - workspaces/${{ secrets.ASKUI_WORKSPACE_ID }}/test-cases\n        url: ${{ secrets.ASKUI_WORKFLOW_ENDPOINT_URL }}/workspaces/${{ secrets.ASKUI_WORKSPACE_ID }}/objects            \nEOF\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Execute your workflows with our AskUI Runner container. Do not forget to login into Docker Hub \ud83d\ude09."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'docker run --shm-size="2g" --rm -v ${{ github.workspace }}/config.yaml:/home/askui/config.yaml -v ${{ github.workspace }}/allure-results:/home/askui/test_project/allure-results askuigmbh/askui-runner:v0.13.1-github\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Generate Allure report: The run results are placed in ",(0,i.jsx)(n.code,{children:"allure-results"})," where you can render your report from. Check the detailed examples for your pipeline technology."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/askui/askui-ci/blob/main/.github/workflows/askui-run-with-studio.yml",children:"Please check the full example file on GitHub."})}),"\n",(0,i.jsx)(n.h2,{id:"without-askui-runner-container",children:"Without AskUI Runner Container"}),"\n",(0,i.jsxs)(n.p,{children:["Download the workflows from AskUI Studio and place the folder ",(0,i.jsx)(n.code,{children:"test"})," in the ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"root"})})," of your repository."]}),"\n",(0,i.jsx)(n.p,{children:"Then implement the following steps in your pipeline:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Optional:"})})," Set up AskUI Controller as service"]}),"\n",(0,i.jsxs)(n.li,{children:["Setup ",(0,i.jsx)(n.code,{children:"node"})," in version ",(0,i.jsx)(n.code,{children:"16.x"})]}),"\n",(0,i.jsxs)(n.li,{children:["Install all dependencies: ",(0,i.jsx)(n.code,{children:"npm install"})]}),"\n",(0,i.jsxs)(n.li,{children:["Run tests with ",(0,i.jsx)(n.code,{children:"npm run test"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set the environment variables:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ASKUI_WORKSPACE_ID"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ASKUI_TOKEN"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ASKUI_INFERENCE_SERVER_URL"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Optional:"})," ",(0,i.jsx)(n.code,{children:"UI_CONTROLLER_URL"})," if the UiController is running on a remote machine and not localhost or as a service inside your pipeline."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["For reports:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Generate reports"}),"\n",(0,i.jsx)(n.li,{children:"Deploy/Send reports"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/askui/askui-ci/blob/main/.github/workflows/askui-run-without-studio.yml",children:"Please check the full example file on GitHub."})})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>t});var i=s(11504);const o={},r=i.createContext(o);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);