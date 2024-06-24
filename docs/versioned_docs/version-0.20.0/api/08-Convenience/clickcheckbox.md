---
displayed_sidebar: apiSidebar
---
# clickCheckbox
<span class="theme-doc-version-badge badge badge--secondary">production</span><br/><br/>

Click a checkbox with a specific label.
You can also specify where the label is placed relationally.

**Examples:** 
```typescript
await aui.clickCheckbox({label: 'Toggle'})
await aui.clickCheckbox({label: 'Toggle', relation: {type: 'leftOf'}})
```

   * @param \{Object} params - Object containing required `label` property and optional `relation` property.
   * @property \{string} params.label - The label for the checkbox.
   * @property \{Object} params.relation - Object describing the relationship between the clicked checkbox and another element.
   * @property \{RelationsForConvenienceMethods} params.relation.type - The type of relation.