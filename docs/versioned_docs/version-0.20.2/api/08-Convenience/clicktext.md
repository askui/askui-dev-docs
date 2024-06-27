---
displayed_sidebar: apiSidebar
---
# clickText
<span class="theme-doc-version-badge badge badge--secondary">production</span><br/><br/>

Click on a specific text.
You can also use a RegEx or match the text exactly by specifying the specific flag.
Use a relation to find the text in relation to a specific text.

**Examples:** 
```typescript
// Click text that matches exactly
await aui.clickText({text: 'askui', matching: 'similar'})

// Click text that contains 'pie' or 'cake' or 'Pie' or 'Cake'
await aui.clickText({text: '.*([Pp]ie|[Cc]ake).*', matching: 'regex'})

// Click the text 'TERMINAL' that is left of the text 'Ports'
await aui.clickText({
      text: 'TERMINAL',
      matching: 'exact',
      relation: { type: 'leftOf', text: 'PORTS' }
   })
```

   * @param \{Object} params - Object containing required `text` property and optional properties for regular expression matching and relation.
   * @property \{string} params.text - The text to be clicked.
   * @property \{string} params.matching - Whether the text is matched using similarity, exact match or a regular expression.
   * @property \{Object} params.relation - Object describing the relationship between the clicked text and another element.
   * @property \{RelationsForConvenienceMethods} params.relation.type - The type of relation.
   * @property \{string} params.relation.text - The label or text associated with the related element or state.