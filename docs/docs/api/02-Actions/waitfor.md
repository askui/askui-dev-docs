---
displayed_sidebar: apiSidebar
---
# waitFor
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

:::info

Consider using a [Retry Strategy instead](../../general/04-Executing%20Automations/retry-strategy.md).

:::

Waits for `<delayInMs>` ms, for example, 1000 ms. The exact delay may be a little longer than `<delayInMs>` but never shorter than that.

**Examples:**
```typescript
await aui.waitFor(500).exec();
```

   * @param \{number} delayInMs - The delay in ms to wait for.
