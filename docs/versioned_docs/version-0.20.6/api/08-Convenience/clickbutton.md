---
displayed_sidebar: apiSidebar
---
# clickButton
<span class="theme-doc-version-badge badge badge--secondary">production</span><br/><br/>

Click a button with a specific label.
Optional relation identifies the button in relation to another element.

**Examples:** 
```typescript
await aui.clickButton({})
await aui.clickButton({label: 'Checkout here'})
await aui.clickButton({relation: {type: 'leftOf', text: 'Choose a ticket'}})
await aui.clickButton({label: 'Click', relation: {type: 'leftOf', text: 'Choose a ticket'}})
```

   * @param \{Object} params - Object containing properties.
   * @property \{string} [params.label] - The text label of the button. Defaults to an empty string.
   * @property \{Object} [params.relation] - Object describing the relationship between the clicked button and another element.
   * @property \{RelationsForConvenienceMethods} params.relation.type - The type of relation.
   * @property \{string} params.relation.text - The text element the relation is based on.
