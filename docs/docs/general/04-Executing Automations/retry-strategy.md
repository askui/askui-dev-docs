---
sidebar_position: 3
---

# Retry Strategy
If an application you want to automate has random or dynamic waiting times a quick fix is to use `waitFor(<a few seconds>)`. This solution can lead to flaky tests and makes the workflows hard to comprehend.

You can specify a dynamic `RetryStrategy` instead or implement your own to get rid of `waitFor()`.

### Exponential Retry Strategy
`ExponentialRetryStrategy`  uses an exponential backoff algorithm.

Usage:
```typescript
aui = await UiControlClient.build({
  ...
  // Each retry delay: baseDelayMs * (2 ** attempt count)
  // attempt count is 0-based
  retryStrategy: new ExponentialRetryStrategy(5000, 3);
});
```

### Fixed Retry Strategy
`FixedRetryStrategy` uses a constant delay for each retry attempt.

Usage:
```typescript
aui = await UiControlClient.build({
  ...
  retryStrategy: new FixedRetryStrategy(1000, 3);
});
```

### Linear Retry Strategy
`LinearRetryStrategy` implements a retry strategy that uses a linear backoff algorithm.

Usage:
```typescript
aui = await UiControlClient.build({
  ...
  // Each retry delay: baseDelayMs * attempt count
  // attempt count is 1-based
  retryStrategy: new LinearRetryStrategy(1000, 3);
});
```

### Implement Your Own Strategy
You can also implement your own `RetryStrategy` by implementing the following interface:

```typescript
/**
 * Interface representing a retry strategy for operations.
 */
export interface RetryStrategy {
  /**
   * The base delay in milliseconds before the first retry.
   */
  baseDelayMs: number;

  /**
   * The maximum number of retry attempts.
   */
  retryCount: number;

  /**
   * Function to calculate the delay before the next retry attempt.
   * @param attempt - The current retry attempt number (0-based).
   * @returns The delay in milliseconds for the next retry.
   */
  getDelay(attempt: number): number;
}
```