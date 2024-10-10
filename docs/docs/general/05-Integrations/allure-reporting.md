---
sidebar_position: 3
title: Allure
---

# AskUIAllureStepReporter

:::tip
Please read the [Getting started with reporting first](reporting.md).
:::

With the `AskUIAllureStepReporter` you can create a detailed HTML-Report from your AskUI Runs. The following report is pulled from [GitHub Repository: askui-example-allure-reporter](https://github.com/askui/askui-example-allure-reporter): 

<div class="iFrameWrapper">
  <iframe
    id="inlineFrameExample"
    title="Inline Frame Example"
    src="https://askui.github.io/askui-example-allure-reporter/6/">
  </iframe>
</div>

## Add the reporter to the `UiControlClient` in `helpers/askui-helper.ts`:

:::warning
If you used the AskUI Installer and did not change anything in `helpers/askui-helper.ts` you can skip the configuration and directly go to [Render and View Report](#render-and-view-the-report-in-a-browser-java-required).
:::

```typescript
import { AskUIAllureStepReporter } from "@askui/askui-reporters";
...
  const reporterConfig: ReporterConfig = {
    withScreenshots: 'always', // See below for possible values
    withDetectedElements: 'always', // See below for possible values
  }

  aui = await UiControlClient.build({
    reporter: new AskUIAllureStepReporter(
      reporterConfig
    )
  });
...
```

You can pass a `ReporterConfig` object to the reporter to configure the level of detail for screenshots and detected elements.

There are four possible values (See [the @askui/askui-reporters README for a detailed explanation](https://github.com/askui/askui-reporters/tree/main#allure-reporter)):

* onFailure (Default for both)
* required
* begin
* always

## Configure `beforeEach()` and `afterEach()` in `helpers/askui-helper.ts`
The `UiControlClient` retrieves the videos and images from your `AskUI Controller`. You have to implement `beforeEach()` and `afterEach()` in `helpers/askui-helper.ts` to start the recording and then add it to your report:

1. Allure Reporter
```typescript
beforeEach(async () => {
  await aui.startVideoRecording();
});

afterEach(async () => {
  await aui.stopVideoRecording();
  const video = await aui.readVideoRecording();
  await AskUIAllureStepReporter.attachVideo(video);
});
```

## Enable the Test Environment `@askui/jest-allure-circus` in `jest.config.ts`
Install `@askui/jest-allure-circus` environment:

```bash
npm install --save-dev @askui/jest-allure-circus
```

```typescript
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./helper/askui-helper.ts'],
  sandboxInjectedGlobals: [
    'Math',
  ],
  // highlight-start
  // Enables the test environment for Allure
  testEnvironment: '@askui/jest-allure-circus',
  // highlight-end
};

// eslint-disable-next-line import/no-default-export
export default config;
```

## Render and View the Report in a Browser (Java Required)

### Step 1: Install Java
We recommend _SDKMAN!_ for managing Java. Please follow the [Installation guide on their homepage](https://sdkman.io/install).

Then run the following command to use the latest Java JDK:

```sh
sdk install java 21.0.2-amzn
```

Answer the question `Do you want java 21.0.2-amzn to be set as default? (Y/n)` with `Y`.

### Step 2: Install `allure-commandline`
The next thing you install is a `npm`-package so you can run _Allure_ inside `npm`.

```sh
npm install allure-commandline --save-dev
```

### Step 3: Generate HTML and Serve Report
Add the following scripts to your `package.json`s `script` section.

```json
...
  "scripts": {
    ...
    "allure-generate": "allure generate",
    "allure-serve": "allure serve"
  },
...
```

### Step 4: Run the Scripts
First create the HTML-Report by running:

```sh
npm run allure-generate
```

And after that serve the HTML-Report by running the following command, which will also open the report in the browser automatically:

```sh
npm run allure-serve
```
