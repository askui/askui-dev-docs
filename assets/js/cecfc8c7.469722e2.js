"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33692],{36244:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=i(17624),o=i(4552);const s={sidebar_position:1},t="Gitlab CI/CD",l={id:"general/Integrations/gitlab-ci",title:"Gitlab CI/CD",description:"You have two options to implement your pipeline. With our AskUI Runner Docker container or without it.",source:"@site/versioned_docs/version-0.20.7/general/05-Integrations/gitlab-ci.md",sourceDirName:"general/05-Integrations",slug:"/general/Integrations/gitlab-ci",permalink:"/docs/general/Integrations/gitlab-ci",draft:!1,unlisted:!1,editUrl:"https://pr.new/askui/askui-dev-docs/edit/main/docs/versioned_docs/version-0.20.7/general/05-Integrations/gitlab-ci.md",tags:[],version:"0.20.7",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"GitHub Actions",permalink:"/docs/general/Integrations/github-actions"},next:{title:"Azure DevOps",permalink:"/docs/general/Integrations/azure-devops"}},a={},c=[{value:"Gitlab CI",id:"gitlab-ci",level:2},{value:"AskUI Runner Container: Get Workflows from AskUI Studio",id:"askui-runner-container-get-workflows-from-askui-studio",level:3},{value:"Without AskUI Runner Container",id:"without-askui-runner-container",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"gitlab-cicd",children:"Gitlab CI/CD"})}),"\n",(0,r.jsx)(n.p,{children:"You have two options to implement your pipeline. With our AskUI Runner Docker container or without it."}),"\n",(0,r.jsx)(n.p,{children:"The main difference without the AskUI Runner container is, that you can not download the latest version of your workflows from AskUI Studio inside your pipeline but have to provide them to your build."}),"\n",(0,r.jsx)(n.h2,{id:"gitlab-ci",children:"Gitlab CI"}),"\n",(0,r.jsx)(n.h3,{id:"askui-runner-container-get-workflows-from-askui-studio",children:"AskUI Runner Container: Get Workflows from AskUI Studio"}),"\n",(0,r.jsxs)(n.p,{children:["When you want to get the latest version of your workflows from AskUI Studio, the AskUI Runner container needs a configuration file ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"config.yaml"})})," to know where to pull them from."]}),"\n",(0,r.jsx)(n.p,{children:"The AskUI Runner container downloads the workflows and runs them inside a docker container. You do not have to take care of any installation of tools on your side \ud83e\udd73."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Set these Gitlab variables for your pipeline:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ASKUI_WORKSPACE_ID=<Your workspace id from AskUI Studio>\nASKUI_TOKEN=<An access token from your AskUI Studio workspace>\nASKUI_INFERENCE_SERVER_URL=<Use https://inference.askui.com if your are not on-premise>\nASKUI_WORKFLOW_ENDPOINT_URL=https://app-gateway-api.askui.com/prod/api/v1\n\nDOCKER_USERNAME=<Your Docker Hub username>\nDOCKER_PASSWORD=<Your Docker Hub password>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Create a ",(0,r.jsx)(n.code,{children:"config.yaml"})," inside your pipeline like this:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cat << EOF > config.yaml\n    access_token: $ASKUI_TOKEN\n    inference_server_url: $ASKUI_INFERENCE_SERVER_URL\n    workspace_id: $ASKUI_WORKSPACE_ID\n    workflow_endpoint:\n        prefixes:\n            - workspaces/${ASKUI_WORKSPACE_ID}/test-cases\n        url: ${ASKUI_WORKFLOW_ENDPOINT_URL}/workspaces/${ASKUI_WORKSPACE_ID}/objects            \nEOF\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Do not forget to login into Docker Hub\xa0and enable Docker-In-Docker like this \ud83d\ude09:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'services:\n  - docker:dind\nbefore_script:\n  - docker info\n  - echo "$DOCKER_PASSWORD" | docker login --username $DOCKER_USERNAME --password-stdin\n'})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Execute your workflows with our AskUI Runner container."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'docker run --shm-size="2g" --rm -v ./config.yaml:/home/askui/config.yaml -v ./allure-results:/home/askui/test_project/allure-results askuigmbh/askui-runner:v0.13.1-github\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["Generate Allure report: The run results are placed in ",(0,r.jsx)(n.code,{children:"allure-results"})," where you can render your report from."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Check the detailed examples for your pipeline technology."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://gitlab.com/askui/gitlab-ci-integration-askui-studio/-/blob/main/.gitlab-ci.yml",children:"Please check the full example file on Gitlab.com."})}),"\n",(0,r.jsx)(n.h3,{id:"without-askui-runner-container",children:"Without AskUI Runner Container"}),"\n",(0,r.jsxs)(n.p,{children:["Download the workflows from AskUI Studio and place the folder ",(0,r.jsx)(n.code,{children:"test"})," in the ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"root"})})," of your repository."]}),"\n",(0,r.jsx)(n.p,{children:"Then implement the following steps in your pipeline:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Optional:"})})," Set up AskUI Controller as service"]}),"\n",(0,r.jsxs)(n.li,{children:["Setup ",(0,r.jsx)(n.code,{children:"node"})," in version ",(0,r.jsx)(n.code,{children:"16.x"})]}),"\n",(0,r.jsxs)(n.li,{children:["Install all dependencies: ",(0,r.jsx)(n.code,{children:"npm install"})]}),"\n",(0,r.jsxs)(n.li,{children:["Run tests with ",(0,r.jsx)(n.code,{children:"npm run test"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Set the environment variables:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"ASKUI_WORKSPACE_ID"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"ASKUI_TOKEN"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"ASKUI_INFERENCE_SERVER_URL"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Optional:"})," ",(0,r.jsx)(n.code,{children:"UI_CONTROLLER_URL"})," if the UIController is running on a remote machine and not localhost or as a service inside your pipeline."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["For reports:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Generate reports"}),"\n",(0,r.jsx)(n.li,{children:"Deploy/Send reports"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://gitlab.com/askui/gitlab-ci-integration/-/blob/main/.gitlab-ci.yml",children:"Please check the full example file on Gitlab.com."})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>t});var r=i(11504);const o={},s=r.createContext(o);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);