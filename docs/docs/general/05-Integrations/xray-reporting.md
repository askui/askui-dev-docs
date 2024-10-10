---
sidebar_position: 3
title: XRAY
---

# AskUIXRayStepReporter

:::tip
Please read the [Getting started with reporting first](reporting.md).
:::

:::info
Due to restrictions this reporter only works when you run your workflows one after another (default for AskUI)!
:::

## Enable and Configure the AskUIXRayStepReporter in `askui-helper.ts` (former `jest.setup.ts`)
You have to do a few things in your `askui-helper.ts` (former `jest.setup.ts`) to enable the `AskUIXRayStepReporter`:

:::info
We will try to move this into the custom `testEnvironment` we provide.
:::

1. Import the reporter
2. Initialize the reporter
3. Add it to the `UiControlClient`
4. Modify before `beforeEach()` and `afterEach()` hook to create/finish `TestEntries`
5. Add writing the report to `afterAll()` hook

```typescript
import { UiControlClient } from 'askui';

/* 1 Import the reporter */
import { AskUIXRayStepReporter } from '@askui/askui-reporters';

...

/* 2 Initialize the reporter */
let xRayReporter = new AskUIXRayStepReporter({
      withScreenshots: 'always',
    },
    // outputDirectory (default: 'xray-report')
    'xray-report',
    // resetReportDirectory -> deletes the outputDirectory
    //                         before execution if set to true (default: false)
    false,
    // appendToReport -> appends the results to the file 'report.json'
    //                   if set to true. Otherwise it creates files
    //                   report_<timestamp>.json (default: false)
    false) 
  );

beforeAll(async () => {
  ...
  aui = await UiControlClient.build({
    /* 3 Enable reporter */
    reporter: xRayReporter,
  });

  await aui.connect();
});

/* 4 Create TestEntry with name of test from it-block */
beforeEach(async () => {
  xRayReporter.createNewTestEntry(global.testName);
});

/* 4 Finish TestEntry with the test status */
afterEach(async () => {
  xRayReporter.finishTestEntry(global.testName, global.testStatus);
});

afterAll(async () => {
  /* 5 Writing the report */
  await xRayReporter.writeReport();
  aui.disconnect();
});

export { aui };
```

## Configure `jest-xray-environment` in `jest.config.ts`
For the `AskUIXRayStepReporter` step reporter to work properly you need a special `testEnvironment` that provides the names from the `it`-blocks used to create the JSON-Objects for each test. Configure the `testEnvironment` in your `jest.config.ts` as shown in the code below:

```typescript
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: '@askui/askui-jest-xray-environment',
  setupFilesAfterEnv: ['./helpers/askui-helper.ts'],
  sandboxInjectedGlobals: [
    'Math',
  ],
  reporters: [ "default", "jest-junit" ]
};

// eslint-disable-next-line import/no-default-export
export default config;
```
