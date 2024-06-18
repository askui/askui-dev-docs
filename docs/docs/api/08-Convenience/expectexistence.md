---
displayed_sidebar: apiSidebar
---

# expectExistence
<span class="theme-doc-version-badge badge badge--secondary">production</span><br/><br/>

Check if one or multiple elements are detected. It expects an array of objects with the following properties:

- `type`. For example `textfield`.
- `text` is evaluated for elements that can *contain* text: `text` and `button`.
- `relation` is used for all other elements, that usually have a label and _not_ text inside them: `switch`, `checkbox` and so forth.

:::note
You can optionally use `relation` for `text` and `button` to anchor the detection in relation to another element. See the examples below.
:::

**Examples:** 
```typescript
await aui.expectExistence([
  {
    type: 'text',
    text: {
      value: 'Switch to Dark',
      matching: 'similar'
    }
  },
]);

// Optional use of relation with 'text' or 'button'
await aui.expectExistence([
  {
    type: 'button',
    text: {
      value: 'Switch to Light',
    },
    relation: {
      type: 'rightOf',
      text: 'Images'
    }
  },
]);

// Check for existence of multiple elements
await aui.expectExistence([
  {
    type: 'textfield',
    relation: {
      type: 'rightOf',
      text: 'Email:'
    }
  },
  {
    type: 'element',
    text: {
      value: 'Switch to Dark'
    }
  },
]);

// Validate existence
const exists = await aui.expectExistence([...]);
exists.everythingExists // true when every element exists

// Check which elements do not exist
// with the elements property
const nonExistentElements = exists.elements.filter((e) => e.exists===false)
```

   * @param \{ExpectExistenceInputParameter[]} params - Objects containing the required property 'type' and the optional properties 'text' and 'relation'.
   * @property \{string} params.type - The type of the element: 'otherElement' | 'switch' | 'element' | 'container' | 'checkbox' 'element' | 'button' | 'table' | 'text' | 'icon' | 'image' | 'textfield'
   * @property \{Object} params.text - Object containing value and matching strategy.
   * @property \{string} params.text.value - The text to match for.
   * @property \{string} params.text.matching - Whether the text is matched using similarity, exact match or a regular expression.
   * @property \{Object} params.relation - Object describing the relationship between the clicked text and another element.
   * @property \{RelationsForConvenienceMethods} params.relation.type - The type of relation.
   * @property \{string} params.relation.text - The label or text associated with the related element or state.
   * @returns \{ExpectExistenceReturnValue.everythingExists} - If every element exists.
   * @returns \{ExpectExistenceReturnValue.elements} - ExpectExistenceElement[].