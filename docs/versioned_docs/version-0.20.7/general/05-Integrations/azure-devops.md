---
sidebar_position: 1
---

# Azure DevOps

Place the AskUI workflow files into the folder `workflows` in the ***root*** of your repository (**Important: Can differ if you chose a different name when you created the AskUI project**).

Then implement the following steps in your pipeline:

- - Set the pipeline variables:
    - `ASKUI_WORKSPACE_ID`
    - `ASKUI_TOKEN`
    - `ASKUI_INFERENCE_SERVER_URL`
    - **Optional**: `UI_CONTROLLER_URL` if the UIController is running on a remote machine and not localhost or as a service inside your pipeline.
- Setup docker and `node` in version `16.x`

```yaml
- task: DockerInstaller@0
  inputs:
    dockerVersion: '17.09.0-ce'
- task: NodeTool@0
  inputs:
    versionSpec: '16.x'
  displayName: 'Install Node.js'
```

- Start the AskUI Controller from our Docker image

```yaml
- bash: |
	sudo ufw disable
	echo 'Start UIController'
	docker run -d -p 6769:6769 --cidfile container.cid askuigmbh/askui-ui-controller:v0.11.2-chrome-100.0.4896.60-amd64
```

- Install all dependencies and run the workflow:

```bash
echo 'Run npm install'
npm install
echo 'Run AskUI'
export ASKUI_TOKEN=$(ASKUI_TOKEN)
export ASKUI_WORKSPACE_ID=$(ASKUI_WORKSPACE_ID)
npm run askui
```

- For reports:
  - Generate reports
  - Deploy/Send reports

```yaml
- bash: |
    curl -o allure-commandline-2.10.0.tgz -OLs https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/2.10.0/allure-commandline-2.10.0.tgz
    sudo tar -zxf allure-commandline-2.10.0.tgz -C .
    echo "Creating allure-report"
    ./allure-2.10.0/bin/allure generate allure-results -o allure-report
    echo "allure-report created"
# Install https://github.com/mclay/azure-pipeline-allure-report first
- task: PublishAllureReport@1
  displayName: 'Publish Allure Report'
  inputs:
    reportDir: 'allure-report'
```

[Please check the full example file on GitHub.](https://github.com/askui/askui-ci/blob/main/azure-devops/azure-pipelines-without-askui-studio.yml)
