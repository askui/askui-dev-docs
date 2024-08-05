---
displayed_sidebar: apiSidebar
---
# typeIntoTextfield
<span class="theme-doc-version-badge badge badge--secondary">production</span><br/><br/>

Types a given text into a textfield.
Use a relation to specify how to find the textfield in relation to a specific label.

**Examples:** 
```typescript
// Finds the textfield nearest to the label 'Email'
await aui.typeIntoTextfield({textToWrite: 'Hello World', relation: {label: 'Email'}});

// Finds the textfield above/below a label 'Password'
await aui.typeIntoTextfield(
  {textToWrite: 'Hello World', relation: {type: 'above', label: 'Password'}}
);
await aui.typeIntoTextfield(
  {textToWrite: 'Hello World', relation: {type: 'below', label: 'Password'}}
);

// If there is no label but a placeholder, the label is contained in the textfield
await aui.typeIntoTextfield(
  {textToWrite: 'Hello World', relation: {type: 'contains', label: 'Enter email'}}
);
```

   * @param \{Object} params - Object containing required `textToWrite` property and optional `relation` property.
   * @property \{string} params.textToWrite - The text to be typed into the textfield.
   * @property \{Object} params.relation - Object describing the relationship between the textfield being interacted with and another element.
   * @property \{RelationsForConvenienceMethods} params.relation.type - The type of relation, optional.
   * @property \{string} params.relation.label - The label associated with the related element, optional.