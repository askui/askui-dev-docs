---
displayed_sidebar: apiSidebar
---
# get
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Returns an array with all filtered elements.
A detected element has the following properties:
- `name` of the element
- `text` content of element
- `bndbox`: location of element described with coordinates of a bounding box

**Examples:**
```typescript 
// ************************************ //
// Log the DetectedElements completely  //
// ************************************ //
const text = await aui.get().text('Sign').exec();
console.log(text);

// Console output
[
  DetectedElement {
    name: 'TEXT',
    text: 'Sign In',
    bndbox: BoundingBox {
      xmin: 1128.2720982142857,
      ymin: 160.21332310267857,
      xmax: 1178.8204241071428,
      ymax: 180.83512834821428
    }
  }
]
```

```typescript 
// *************************************************** //
// Examples on how to work with the returned elements  //
// *************************************************** //
const texts = await aui.get().text().below().textfield().exec();

// We can get a lot of elements this way
console.log(texts);

// Console output
[
  DetectedElement {
    name: 'TEXT',
    text: 'Sign In',
    bndbox: BoundingBox {
      xmin: 1128.2720982142857,
      ymin: 160.21332310267857,
      xmax: 1178.8204241071428,
      ymax: 180.83512834821428
    },
  },
  DetectedElement {
    name: 'TEXT',
    text: 'Login',
    bndbox: BoundingBox {
      xmin: 250.8204241071428,
      ymin: 300.21332310267857,
      xmax: 450.6304241071428,
      ymax: 950.47812834821428
    },
    ... 10 more items
  }
]

// Extract the FIRST element
// Arrays start with index 0!
const firstTextElement = texts[0];
const textOfFirstElement = firstElement.text;

console.log(textOfFirstElement);

// Console output
Sign In

// Log the text of the SECOND element
// with shorter code
const texts = await aui.get().text().below().textfield().exec();
console.log(texts[1].text)

// Console output
Login
```
