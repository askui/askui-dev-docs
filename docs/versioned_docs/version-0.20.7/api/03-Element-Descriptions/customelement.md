---
displayed_sidebar: apiSidebar
---
# customElement
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

:::tip

We have a powerful replacement of *Custom Elements*: [Please use AI Elements](aielement.md).

:::

Filters for a 'custom element', that is a UI element that is defined by providing an image and other parameters such as degree of rotation. It allows filtering for a UI element based on an image instead of using text or element descriptions like `button().withText('Submit')` in `await aui.click().button().withText('Submit').exec()`.

See the tutorial - [Custom Element](https://docs.askui.com/docs/general/Element%20Selection/custom-elements) for more details.

**Example**
```typescript
await aui
    .click()
    .customElement({
        customImage: './logo.png', // required
        name: 'myLogo', // optional
        threshold: 0.5, // optional, defaults to 0.5
        stopThreshold: 0.9, // optional, defaults to 0.9
        rotationDegreePerStep: 0, // optional, defaults to 0
        imageCompareFormat: 'grayscale', // optional, defaults to 'grayscale'
        // mask:{x:0, y:0}[] // optional, a polygon to match only a certain area of the custom element
    })
    .exec();
```

**Arguments**

- **customImage** (*`string`, required*):
    - A cropped image in the form of a base64 string or file path.
- **name** (*`string`, optional*):
    - A unique name that can be used for filtering for the custom element. If not given, any text inside the custom image will be detected via OCR.
- **threshold** (*`number`, optional*):
    - A threshold for how much a UI element needs to be similar to the custom element as defined by the image. Takes values between `0.0` (== all elements are recognized as the custom element which is probably not what you want) and `1.0` (== elements need to look exactly like the `customImage` which is unlikely to be achieved as even minor differences count). Defaults to `0.5`.
- **stopThreshold** (*`number`, optional*):
    - A threshold for when to stop searching for UI elements similar to the custom element. As soon as UI elements have been found that are at least as similar as the `stopThreshold`, the search is going to stop. After that elements are filtered using the `threshold`. Because of that the `stopThreshold` should be greater than or equal to `threshold`. It is primarily to be used as a speed improvement (by lowering the value). Takes values between `0.0` and `1.0`. Defaults to `0.9`.
- **rotationDegreePerStep** (*`number`, optional*):
    - Step size in rotation degree. Rotates the custom image by this step size until 360° is exceeded. The range is from `0` to `360`. Defaults to `0`.
- **imageCompareFormat** (*`'RGB' | 'grayscale' | 'edges'`, optional*):
    - The color compare style. `'edges'` compares only edges, `'greyscale'` compares the brightness of each pixel whereas `'RGB'` compares all three colors (red, green, blue). Defaults to `'grayscale'`.


   * @param \{CustomElementJson} customElement - The custom element to filter for.
