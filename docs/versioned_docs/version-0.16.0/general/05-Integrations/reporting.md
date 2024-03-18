---
sidebar_position: 3
title: Getting Started
---

# Getting Started

We provide a package `@askui/askui-reporters` with reporters ready-to-use into your AskUI runs. [Check out the repository](https://github.com/askui/askui-reporters) for more details.

## Installation
Install `@askui/askui-reporters` as a dev-dependency:

```bash
npm install --save-dev @askui/askui-reporters
```

## Available Reporters

* [AskUIAllureStepReporter](allure-reporting.md)
* [AskUIJestHtmlStepReporter](html-reporting.md)
* [AskUIAnnotationStepReporter](annotation-reporting.md)
* [AskUIXRayStepReporter](xray-reporting.md)

## Enable Multiple Reporters
You can enable multiple reporters simultaneously by passing an array of reporters in the `reporter` property like this:

```typescript
aui = await UiControlClient.build({
    reporter: [
        new AskUIAnnotationStepReporter(
          AnnotationLevel.ALL,
          "annotation_report",
          "_annotation"
        ),
        new AskUIJestHtmlStepReporter({
          withScreenshots: 'always' as const, // See below for possible values
          withDetectedElements: 'always' as const, // See below for possible values
        })
      ],
  });
```

:::caution
 The `testEnvironment` setting has to be the __SAME__ for all reporters in the array! The following table shows which reporters can be enabled together.
:::

|                             | AskUIAllureStepReporter | AskUIJestHtmlStepReporter | AskUIAnnotationStepReporter | AskUIXRayStepReporter       |
| --------------------------- | :---------------------: | :-----------------------: | :-------------------------: | :-------------------------: |
| AskUIAllureStepReporter     |                         |          ❌               |               ❌             |              ❌             |
| AskUIJestHtmlStepReporter   |         ❌              |                           |               ✅             |              ✅             |
| AskUIAnnotationStepReporter |         ❌              |          ✅                |                             |              ✅             |
| AskUIXRayStepReporter       |         ❌              |          ✅                |              ✅             |                             |

## Implement Your Own Reporter
To write your own reporter you have to implement AskUI's `Reporter` interface. It offers three optional methods you can overwrite to adapt to your specific reporter framework:

```typescript
export interface Reporter {
    config?: ReporterConfig;
    onStepBegin?(step: Step): Promise<void>;
    onStepRetry?(step: Step): Promise<void>;
    onStepEnd?(step: Step): Promise<void>;
}
```

See the [Example implementation for Allure](https://github.com/askui/askui-reporters/blob/main/src/allure/askui-allure-step-reporter.ts) on how that is used to extract the screenshot before/after each step and how to record a video of each step.
