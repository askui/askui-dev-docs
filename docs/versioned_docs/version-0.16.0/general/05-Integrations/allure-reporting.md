---
sidebar_position: 3
title: Allure
---

# AskUIAllureStepReporter

:::tip
Please read the [Getting started with reporting first](reporting.md).
:::

## Add the reporter to the `UiControlClient` in `jest.setup.ts`:

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

## Configure `beforeEach()` and `afterEach()` in `jest.setup.ts`
The `UiControlClient` retrieves the videos and images from your `AskUI Controller`. You have to implement `beforeEach()` and `afterEach()` in `jest.setup.ts` to start the recording and then add it to your report:

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
  setupFilesAfterEnv: ['./helper/jest.setup.ts'],
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
