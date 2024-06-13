---
sidebar_position: 3
title: Annotation
---

# AskUIAnnotationStepReporter

:::tip
Please read the [Getting started with reporting first](reporting.md).
:::

## Enable and Configure the AskUIAnnotationStepReporter in `jest.setup.ts`

```typescript
import { AskUIAnnotationStepReporter, AnnotationLevel } from '@askui/askui-reporters';
...
  aui = await UiControlClient.build({
    ...
    reporter: new AskUIAnnotationStepReporter(
        // AnnotationLevel.ON_FAILURE, /* Uncomment and change to AnnotationLevel.ALL for reporting at every step */
        // folderPath: "report", /* Uncomment and change property for different folder */
        // fileNameSuffix: "_testStep_annotation" /* Uncomment and change property for different file name suffix */
      ),
  });
...
```

`AnnotationLevel` is implemented as an enumeration. You have two options:

* `ON_FAILURE` (Default Value): After a step failed
* `ALL`: After every step

`folderPath` is the folder name, relative to the root of your project, the report-files will be saved to.

* Default value: `report`

`fileNameSuffix`: The suffix for every report-file.

* The generated report-filename has the following name convention:
** `{YYYYYYMMDDTHHmmsssss}_{passed|failed}{fileNameSuffix}.html`
** Example: 20230922072153421_failed_testStep_annotation.html