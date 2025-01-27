---
sidebar_position: 1
---

# GitHub Actions

Place the AskUI workflow files into the folder `workflows` in the ***root*** of your repository (**Important: Can differ if you chose a different name when you created the AskUI project**).

Then implement the following steps in your pipeline:

- ***Optional:*** Set up AskUI Controller as service
- Setup `node` in version `16.x`
- Install all dependencies: `npm install`
- Run tests with `npm run askui`
  - Set the environment variables:
    - `ASKUI_WORKSPACE_ID`
    - `ASKUI_TOKEN`
    - `ASKUI_INFERENCE_SERVER_URL`
    - __Optional:__ `UI_CONTROLLER_URL` if the UIController is running on a remote machine and not localhost or as a service inside your pipeline.
- For reports:
  - Generate reports
  - Deploy/Send reports

[Please check the full example file on GitHub.](https://github.com/askui/askui-ci/blob/main/.github/workflows/askui-run-without-studio.yml)
