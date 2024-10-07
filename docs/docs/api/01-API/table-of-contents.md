---
displayed_sidebar: apiSidebar
custom_edit_url: null
---

# Table of Contents

:::tip

Use your browser search: `CMD/CTRL + f`

:::

## Actions

<table style={{display: 'table'}}>
    <thead>
        <tr>
            <th style={{width: '10%', textAlign: "left"}}>Name</th>
            <th style={{width: '90%', textAlign: "left"}}>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <md-block>`click()`</md-block>
            </td>
            <td>
<md-block>

Mouse left-clicks/taps on the filtered element by moving the mouse cursor to the filtered element first.

If you need a simple mouseleftclick/tap only, use `mouseLeftClick`.

**Example:**
```typescript 
await aui.click().button().withText('Google Search').exec();
```

![](/img/gif/click.gif)

  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`execOnShell()`</md-block>
            </td>
            <td>
<md-block>

Executes a shell command on the device your AskUI Controller is connected to.

**Example:**
```typescript 
// Open the lastpass app
await aui.execOnShell('monkey -p com.lastpass.authenticator 1').exec();

// Open Google Chrome on Windows
await aui.execOnShell("start chrome").exec();

// Open Google Chrome on macOS
await aui.execOnShell("open -a 'Google Chrome'").exec();

// Open Google Chrome on Linux
await aui.execOnShell("chrome").exec();
```  

</md-block>
<md-block>

    * @param \{string} shellCommand - A shell command which is executed.
    * @param \{number} [timeoutInMilliseconds=1] - A timeout in milliseconds.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`expect()`</md-block>
            </td>
            <td>
<md-block>

Expects a condition, for example, `exists()` or `notExits()`.

Use the structure `expect().<your filter>.(exists()|notExists())` as shown in the examples below.

**Examples:**
```typescript 
await aui.expect().text('Login').exists().exec()
await aui.expect().text('Login').notExists().exec()
```  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`mouseDoubleLeftClick()`</md-block>
            </td>
            <td>
<md-block>

Double-clicks with left mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseDoubleLeftClick().exec();
```

![](/img/gif/mouseDoubleLeftClick.gif)  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`mouseDoubleMiddleClick()`</md-block>
            </td>
            <td>
<md-block>

Double-clicks with middle mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseDoubleMiddleClick().exec();
```  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`mouseDoubleRightClick()`</md-block>
            </td>
            <td>
<md-block>

Double-clicks with right mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseDoubleRightClick().exec();
```  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`mouseLeftClick()`</md-block>
            </td>
            <td>
<md-block>

Clicks with left mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseLeftClick().exec();
```  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`mouseMiddleClick()`</md-block>
            </td>
            <td>
<md-block>

Clicks with middle mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseMiddleClick().exec();
```  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`mouseRightClick()`</md-block>
            </td>
            <td>
<md-block>

Clicks with right mouse key.

If you need to move the mouse first, use `moveMouseTo()`.

**Examples:**
```typescript
// Optional: Move mouse to an element first
await aui.moveMouseTo().button().withText('Login').exec();

await aui.mouseRightClick().exec();
```  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`mouseToggleDown()`</md-block>
            </td>
            <td>
<md-block>

Toggles mouse down (Left mouse key/tap). 

 This is the equivalent to **mouse-left-press-and-hold**. It holds the mouse button until the `mouseToogleUp()` is called. Often combined with `mouseToggleUP` to automate **drag-and-drop**.

**Example:**
```typescript
await aui.mouseToggleDown().exec();
await aui.moveMouseRelatively(-400,0).exec();
await aui.mouseToggleUp().exec();
```

![](/img/gif/mouseToggleDownUp.gif)  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`mouseToggleUp()`</md-block>
            </td>
            <td>
<md-block>

Toggles mouse up (Left mouse key/tap).

This is the equivalent to releasing the pressing mouse left button. Often combined with `mouseToggleDown()` to automate **drag-and-drop**.

**Example:**
```typescript
await aui.mouseToggleDown().exec();
await aui.moveMouseRelatively(-400,0).exec();
await aui.mouseToggleUp().exec();
```

![](/img/gif/mouseToggleDownUp.gif)  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`moveMouse()`</md-block>
            </td>
            <td>
<md-block>

Moves the mouse to the absolute x and y coordinates.

If you want to move your mouse cursor to an element, use `moveMouseTo()`.

**Example:**
```typescript
await aui.moveMouse(500, 500).exec();
```

![](/img/gif/moveMouse.gif)  

</md-block>
<md-block>

    * @param \{number} x_coordinate - A (positive/negative) x coordinate.
    * @param \{number} y_coordinate - A (positive/negative) y coordinate.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`moveMouseRelatively()`</md-block>
            </td>
            <td>
<md-block>

Moves the mouse from the current position (relative) in x and y direction.

**Example:**
```typescript
await aui.moveMouseRelatively(0, 50).exec();
```

![](/img/gif/moveMouseRelatively.gif)  

</md-block>
<md-block>

    * @param \{number} x_offset - A (positive/negative) x direction.
    * @param \{number} y_offset - A (positive/negative) y direction.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`moveMouseRelativelyTo()`</md-block>
            </td>
            <td>
<md-block>

Moves the mouse relatively to an element in the direction.
This can be used when the mouse should not hover over an element anymore.

**Examples:**
```typescript 
// Move mouse 30 pixels below button
await aui.moveMouseRelativelyTo(0, 30).button().withText('Submit').exec()
```
![](/img/gif/moveMouseRelativelyTo.gif)  

</md-block>
<md-block>

    * @param \{number} x_offset - A (positive/negative) x direction.
    * @param \{number} y_offset - A (positive/negative) y direction.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`moveMouseTo()`</md-block>
            </td>
            <td>
<md-block>

Move mouse over the filtered element.

**Example:**
```typescript 
await aui.moveMouseTo().text().withText('Grinning_Face').exec()
```

![](/img/gif/moveMouseTo.gif)

  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`pressAndroidKey()`</md-block>
            </td>
            <td>
<md-block>

Press one Android key like `del`
See [API docs](https://docs.askui.com/docs/api/Actions/pressandroidtwokey) for available keys.

**Examples:**
```typescript
await aui.pressAndroidKey('notification').exec();
```

![](/img/gif/pressAndroidKey.gif)  

</md-block>
<md-block>

    * @param \{ANDROID_KEY} key - A Android key

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`pressAndroidThirdKey()`</md-block>
            </td>
            <td>
<md-block>

Press three Android keys like `CTRL+ALT+DEL`  

</md-block>
<md-block>

    * @param \{ANDROID_KEY} first_key - A Android key
    * @param \{ANDROID_KEY} second_key - A Android key
    * @param \{ANDROID_KEY} third_key - A Android key

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`pressAndroidTwoKey()`</md-block>
            </td>
            <td>
<md-block>

Press two Android keys like `volume_down+power`
See [API docs](https://docs.askui.com/docs/api/Actions/pressandroidtwokey) for available keys.

**Examples:**
```typescript
await aui.pressAndroidTwoKey('volume_down', 'power').exec();
```

![](/img/gif/pressAndroidTwoKeys.gif)  

</md-block>
<md-block>

    * @param \{ANDROID_KEY} first_key - A Android key
    * @param \{ANDROID_KEY} second_key - A Android key

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`pressKey()`</md-block>
            </td>
            <td>
<md-block>

Press one keys like `DEL`

**Operating system specific mappings:**
1. Windows: `command`-key maps to `windows`-key

**Examples:**
```typescript
await aui.pressKey('tab').exec();
```

![](/img/gif/pressKey.gif)  

</md-block>
<md-block>

    * @param \{PC_AND_MODIFIER_KEY} key - A key

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`pressThreeKeys()`</md-block>
            </td>
            <td>
<md-block>

Press three keys like `CTRL+ALT+DEL`

**Operating system specific mappings:**
1. Windows: `command`-key maps to `windows`-key

**Examples:**
```typescript
await aui.pressThreeKeys('control', 'command' 'space').exec();
```

![](/img/gif/pressThreeKeys.gif)  

</md-block>
<md-block>

    * @param \{MODIFIER_KEY} first_key - A modifier key
    * @param \{MODIFIER_KEY} second_key - A modifier key
    * @param \{PC_KEY} third_key - A key

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`pressTwoKeys()`</md-block>
            </td>
            <td>
<md-block>

Press two keys like `ALT+F4`

**Operating system specific mappings:**
1. Windows: `command`-key maps to `windows`-key
---
  

</md-block>
<md-block>

    * @param \{MODIFIER_KEY} first_key - A modifier key
    * @param \{PC_KEY} second_key - A key

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`scroll()`</md-block>
            </td>
            <td>
<md-block>

Scrolls based on the current mouse position in the x and y direction.

**Important**: Mouse must be positioned in a scrollable area.

**macOS**: May not work as expected!

**Example:**
```typescript 
// Scroll 500 pixels down in y direction
await aui.scroll(0, -500).exec()
```

![](/img/gif/scroll.gif)  

</md-block>
<md-block>

    * @param \{number} x_offset - A (positive/negative) x direction.
    * @param \{number} y_offset - A (positive/negative) y direction.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`scrollInside()`</md-block>
            </td>
            <td>
<md-block>

Moves mouse to the filtered element and scrolls in the x and y direction.

**macOS**: May not work as expected!

**Example:**
```typescript 
await aui.scrollInside(0,-500).text().withText('Bottom sheet').exec();
```

![](/img/gif/scrollInside.gif)  

</md-block>
<md-block>

    * @param \{number} x_offset - A (positive/negative) x direction.
    * @param \{number} y_offset - A (positive/negative) y direction.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`swipe()`</md-block>
            </td>
            <td>
<md-block>

Swipe an element in the x and y direction.
Holds the left mouse button down on Windows, Linux and macOS and drags the element.
On touch devices it taps the element and then drags it.

**Example:**
```typescript 
// Swipe the element 500 to the right
await aui.swipe(500, 0).image().exec()
```
![](/img/gif/swipe.gif)  

</md-block>
<md-block>

    * @param \{number} x_offset - A x direction. positive and negative values are accepted
    * @param \{number} y_offset - A y direction. positive and negative values are accepted

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`type()`</md-block>
            </td>
            <td>
<md-block>

Types a text at the current position.
If you need to focus the element first, use typeIn()

**Note:** In the current version it copies the text and pastes it.

**Examples:**
```typescript 
await aui.type('askui@askui.com').exec()

// mask the text so it is not send to the askui-inference server
await aui.type('Type some text', \{ isSecret: true, secretMask: '**' }).exec()
```

![](/img/gif/type.gif)  

</md-block>
<md-block>

    * @param \{string} text - A text to type

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`typeIn()`</md-block>
            </td>
            <td>
<md-block>

Puts the focus on the filtered element and types in the text.

**Note:** In the current version it copies the text and pastes it.

**Examples:**
```typescript 
await aui.typeIn('Type some text').textfield().exec()

// mask the text so it is not send to the askui-inference server
await aui.typeIn('Type some text', \{ isSecret: true, secretMask: '**' }).textfield().exec()
```
![](/img/gif/typeIn.gif)  

</md-block>
<md-block>

    * @param \{string} text - A text to type

</md-block>
            </td>
        </tr>
    </tbody>
</table>

## Element-descriptions

<table style={{display: 'table'}}>
    <thead>
        <tr>
            <th style={{width: '10%', textAlign: "left"}}>Name</th>
            <th style={{width: '90%', textAlign: "left"}}>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <md-block>`aiElement()`</md-block>
            </td>
            <td>
<md-block>

Detects an AI Element created with the [snipping workflow](https://docs.askui.com/docs/general/Element%20Selection/aielement#snipping-workflow).

**Examples:**

```typescript
await aui.click().aiElement('askui-logo').exec();
```  

</md-block>
<md-block>

    * @param \{string} aiElementName - Name of the AI Element.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`button()`</md-block>
            </td>
            <td>
<md-block>

Filters for a UI element 'button'.

**Examples:** 
```typescript
await aui.click().button().contains().text().withText('Google Search').exec()
```

![](/img/gif/button.gif)  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`checkbox()`</md-block>
            </td>
            <td>
<md-block>

Filters for a UI element 'checkbox'.  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`container()`</md-block>
            </td>
            <td>
<md-block>

Filters for a UI element 'container'.  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`containsText()`</md-block>
            </td>
            <td>
<md-block>

Filters for text containing the text provided as an argument.

**Examples:** 
```typescript
'This is a text' === containsText('text') => true
'This is a text' === containsText('other text') => false
'This is a text' === containsText('other') => false
```
![](/img/gif/containsText.gif)  

</md-block>
<md-block>

    * @param \{string} text - A text to be matched.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`customElement()`</md-block>
            </td>
            <td>
<md-block>

:::tip

We have a powerful replacement of *Custom Elements*: [Please use AI Elements](#element-descriptions).

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
  

</md-block>
<md-block>

    * @param \{CustomElementJson} customElement - The custom element to filter for.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`element()`</md-block>
            </td>
            <td>
<md-block>

Filters for any UI element on the screen.

**Examples:** 
```typescript
await aui.moveMouseTo().element().exec()
```  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`icon()`</md-block>
            </td>
            <td>
<md-block>

Filters for a UI element 'icon'.

You can combine it with the element-description 'withText()' to look for a specific icon.

**Examples:** 
```typescript
icon().withText('plus')
```

![](/img/gif/icon.gif)

**Note:** This is an alpha feature. The prediction of the icon name is sometimes unstable. Use custom elements as an alternative.  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`image()`</md-block>
            </td>
            <td>
<md-block>

Filters for a UI element 'image'.

**Examples:**
```typescript
// Works if there is only one image visible on the screen
await aui.click().image().exec();

// Works if you have an image with
// a text below
await aui.click().image().above().text().withText('Automating WebGL').exec();
```

![](/img/gif/image.gif)

  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`matching()`</md-block>
            </td>
            <td>
<md-block>

Filters elements based on a textual description.

**What Should I Write as Matching Text**

The text description inside the `matching()` should describe the element visually.
It understands color, some famous company/product names, general descriptions.

**Important: _Matching only returns the best matching element when you use it with `get()`_**

A bit of playing around to find a matching description is sometimes needed:
For example, `puzzle piece` can fail while `an icon showing a puzzle piece` might work.
Generally, the more detail the better.

We also recommend to not restrict the type of element by using the general selector `element()` as shown in the examples below.

**Examples:**
```typescript
// Select the black sneaker from a bunch of sneakers
await aui.click().element().matching('a black sneaker shoe').exec();

// Select an image that has text in it
await aui.click().element().matching('has Burger King in it').exec();
await aui.click().element().matching('has adidas in it').exec();

// Target a logo/image by describing it
await aui.click().element().matching('a mask on purple background and a firefox logo').exec();
await aui.click().element().matching('logo looking like an apple with one bite bitten off').exec();
await aui.click().element().matching('logo looking like a seashell').exec();
```  

</md-block>
<md-block>

    * @param \{string} text - A description of the target element.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`otherElement()`</md-block>
            </td>
            <td>
<md-block>

Filters for a UI element 'other element'.  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`special()`</md-block>
            </td>
            <td>
<md-block>

Filters special elements defined over a specifically trained custom element descriptor.

Custom element descriptors are trained on your elements that were not detected with our 
default models. Please contact us for further details on how to do this. We are working on 
a solution to provide this in our User Portal. 

In the example below circle refers to a circle shaped icon with specific properties.

**Examples:** 
```typescript
await aui.moveMouseTo().element().special("circle").exec()
```  

</md-block>
<md-block>

    * @param \{string} text - A text to be matched.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`switch()`</md-block>
            </td>
            <td>
<md-block>

Filters for a UI element 'switch'.  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`table()`</md-block>
            </td>
            <td>
<md-block>

Filters for a UI element 'table'.  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`text()`</md-block>
            </td>
            <td>
<md-block>

Filters for an UI element 'text'.

Takes an optional parameter to filter for a specific text.
See the examples below.

See also the filters `withTextRegex()` and `withExactText()`

**Examples:**
```typescript
await aui.click().text().exec();
await aui.click().text('Username').exec();

// Matching with an exact text
await aui.click().text().withExactText('Username').exec();

// Matching with a regex
await aui.click().text().withTextRegex('\b[Ss]\w+').exec();
```  

</md-block>
<md-block>

    * @param \{string} [text] - A text to be matched.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`textfield()`</md-block>
            </td>
            <td>
<md-block>

Filters for a UI element 'textfield'.

**Examples:**
```typescript
// Works if there is only one textfield visible on the screen
await aui.typeIn('Oh yeah').textfield().exec();

// Works if you have a labeled textfield
// Label is above the textfield
await aui.typeIn('Oh yeah').textfield().below().text().withText('E-Mail Address').exec();
```

![](/img/gif/textfield.gif)

  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`withExactText()`</md-block>
            </td>
            <td>
<md-block>

Filters for equal text.

**Note:** This should be only used in cases where the similarity
 comparison of \{@link FluentFilters.withText()} allows not for
 specific enough filtering (too many elements).

**Examples:** 
```typescript
'text' === withExactText('text') => true
'test' === withExactText('text') => false
'other' === withExactText('text') => false

await aui.moveMouseTo().text().withExactText('Password').exec()
```

![](/img/gif/withExactText.gif)

  

</md-block>
<md-block>

    * @param \{string} text - A text to be matched.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`withText()`</md-block>
            </td>
            <td>
<md-block>

Filters for similar -- meaning >70% similar -- text.

Takes an optional parameter to specify the similarity. Usually you need the optional parameter for long texts you want to match precisely.

_We use [RapidFuzz](https://maxbachmann.github.io/RapidFuzz/Usage/fuzz.html#ratio) which calculates the similarity like this:_

`1 - (distance / (lengthString1 + lengthString2))`

**Examples:** 
```typescript
'text' === withText('text') => true
'test' === withText('text') => true
'Test' === withText('text') => true
'Text' === withText('text') => true
'TEXT' === withText('text') => true
'texst' === withText('text') => true
'texts' === withText('text') => true

// usually false
'atebxtc' === withText('text') => false
'other' === withText('text') => false

// optional parameter: similarity_score
'978-0-201-00650-6' == withText("978-0-201-00", 90) => false with 82.76 < 90 similarity
'978-0-201-00650-6' == withText("978-0-201-00650", 90) => true with 93.75 > 90 similarity
```
![](/img/gif/withText.gif)  

</md-block>
<md-block>

    * @param \{string} text - A text to be matched.
    * @param \{number} [similarityScore=70] - Similarity score minimum value, it should be between `0` and `100`.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`withTextRegex()`</md-block>
            </td>
            <td>
<md-block>

Filters for texts, which match the regex pattern.

**Examples:**

```typescript
'The rain in Spain' === withTextRegex('\b[Ss]\w+') => true
'The rain in Portugal' === withTextRegex('\b[Ss]\w+') => false
'The rain in switzerland' === withTextRegex('\b[Ss]\w+') => true

await aui.get().text().withTextRegex('\b[Ss]\w+').exec()
```

![](/img/gif/withTextRegex.gif)

  

</md-block>
<md-block>

    * @param \{string} regex_pattern - A regex pattern

</md-block>
            </td>
        </tr>
    </tbody>
</table>

## Relations

<table style={{display: 'table'}}>
    <thead>
        <tr>
            <th style={{width: '10%', textAlign: "left"}}>Name</th>
            <th style={{width: '90%', textAlign: "left"}}>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <md-block>`above()`</md-block>
            </td>
            <td>
<md-block>

Filters for an element above another element.

Takes an optional parameter `index` to select the nth element (defaults to `0`).

Takes an optional parameter `intersection_area` to specify which elements above of the other element are filtered for based on their horizontal position (y-coordinates of bounding box):
- `"element_center_line"` - considered above of the other element if element's bounding box intersects with a vertical line passing through the center of the other element
- `"element_edge_area"` - considered above of the other element if element's bounding box intersects with an area between the left and the right edge of the other element
- `"display_edge_area"` - considered above of the other element no matter where it is placed horizontally on the screen (y-axis)

**Examples:**
```typescript 
------------
|  text3   |
------------
            ------------
            |  text2   |
            ------------
    ------------
    |  text1   |
    ------------
------------
|  text0   |
------------
------------
|  button  |
------------

// General explanation for element_center_line
// This will find text0 and text3
...text().above(..., 'element_center_line').button()

// General explanation for element_edge_area
// This will find text0, text1 and text3
...text().above(..., 'element_edge_area').button()

// General explanation and display_edge_area
// This will find text0, text1, text2 and text3
...text().above(..., 'display_edge_area').button()

// More examples:
// Returns text0 because it is the first element above button
...text().above().button()
...text().above(0).button()
...text().above(0, 'element_edge_area').button()

// Returns text3 because it is the second text touched by the
// vertical line from the center of button
// Notice: text1 is not touched!
...text().above(1, 'element_center_line').button()

// Returns text3 because it is the third text touched by the
// vertical area above the x-axis of button
// Notice: text2 is not touched!
...text().above(2, 'element_edge_area').button()

// Returns text2 because it is the third element above button
...text().above(2, 'display_edge_area').button()

// Returns no element because button is below the texts
...button().above().text()
```
![](/img/gif/above.gif)  

</md-block>
<md-block>

    * @param \{number} [index=0] - Index of element to filter for going into the direction specified. Defaults to `0` which is the first element (zero-indexed) found in that direction.
    * @param \{INTERSECTION_AREA} [intersection_area="element_edge_area"] - Intersecting with either `"element_center_line"`, `"element_edge_area"` or `"display_edge_area"`. Defaults to `"element_edge_area"`.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`and()`</md-block>
            </td>
            <td>
<md-block>

Logic and operator

**Examples:**
```text 
example scene: 
 ---------------   ----------------
 |  icon user  |   |  icon search |
 ---------------   ----------------
```
```typescript 
const icons = await aui.get().icon().exec();
console.log(icons);
```
Using only the element-description icon, the get will return both icons 
```text 
console output: [
  DetectedElement {
     name: 'ICON',
     text: 'user',
     bndbox: BoundingBox {
        xmin: 1000,
        ymin: 1010,
        xmax: 1020,
        ymax: 1030
     }
  },
  DetectedElement {
     name: 'ICON',
     text: 'search',
     bndbox: BoundingBox {
        xmin: 900,
        ymin: 910,
        xmax: 920,
        ymax: 930
     }
  }
 ]
```
You can combine element-descriptions with **the `and()` relation** and specify exactly which icon you want.
```typescript 
const icons = await aui.get().icon().and().withText('user').exec()
console.log(icons)
```
The get returns only the user icon although both elements are icons.
```text 
 console output: [
  DetectedElement {
     name: 'ICON',
     text: 'user',
     bndbox: BoundingBox {
        xmin: 900,
        ymin: 910,
        xmax: 920,
        ymax: 930
     }
  }
 ]
```  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`below()`</md-block>
            </td>
            <td>
<md-block>

Filters for an element below another element.

Takes an optional parameter `index` to select the nth element (defaults to `0`).

Takes an optional parameter `intersection_area` to specify which elements below of the other element are filtered for based on their horizontal position (y-coordinates of bounding box):
- `"element_center_line"` - considered below of the other element if element's bounding box intersects with a vertical line passing through the center of the other element
- `"element_edge_area"` - considered below of the other element if element's bounding box intersects with an area between the left and the right edge of the other element
- `"display_edge_area"` - considered below of the other element no matter where it is placed horizontally on the screen (y-axis)

**Examples:**
```typescript 
------------
|   text   |
------------
------------
|  button0 |
------------
         -----------
         | button1 |
         -----------
            -----------
            | button2 |
            -----------
------------
|  button3 |
------------

// General explanation for element_center_line
// This will find button0 and button3
...button().below(..., 'element_center_line').text()

// General explanation for element_edge_area
// This will find button0, button1 and button3
...button().below(..., 'element_edge_area').text()

// General explanation and display_edge_area
// This will find button0, button1, button2 and button3
...button().below(..., 'display_edge_area').text()

// More examples:
// Returns button0 because button0 is the first button below text
...button().below().text()
...button().below(0).text()
...button().below(0, 'element_edge_area').text()

// Returns button3 because it is the second button touched by the
// vertical line from the center of text
// Notice: button1 is not touched
...button().below(1, 'element_center_line').text()

// Returns button3 because it is the third button touched by the
// vertical area below the x-axis of text
// Notice: button2 is not touched!
...button().below(2, 'element_edge_area').text()

// Returns button2 because it is the third element below text
...button().below(2, 'display_edge_area').text()

// Returns no element because text is above the buttons
...text().below().button()
```
![](/img/gif/below.gif)  

</md-block>
<md-block>

    * @param \{number} [index=0] - Index of element to filter for going into the direction specified. Defaults to `0` which is the first element (zero-indexed) found in that direction.
    * @param \{INTERSECTION_AREA} [intersection_area="element_edge_area"] - Intersecting with either `"element_center_line"`, `"element_edge_area"` or `"display_edge_area"`. Defaults to `"element_edge_area"`.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`contains()`</md-block>
            </td>
            <td>
<md-block>

Filters for an element containing another element.

**Example:**
```typescript 
--------------------
|     outerEl      |
|  --------------  |
|  |  innerEl   |  |
|  --------------  |
|                  |
--------------------

// Returns outerEl because outerEl contains innerEl
...outerEl().contains().innerEl()
//  Returns no element because innerEl contains no outerEl
...innerEl().contains().outerEl()
```
![](/img/gif/contains.gif)  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`in()`</md-block>
            </td>
            <td>
<md-block>

Filters for an element inside another element.

**Examples:** 
```typescript 
--------------------
|     outerEl      |
|  --------------  |
|  |  innerEl   |  |
|  --------------  |
|                  |
--------------------

// Returns innerEl because innerEl is inside outerEl
...innerEl().in().outerEl()
// Returns nothing because innerEl is not inside outerEl
...outerEl().in().innerEl()
```
![](/img/gif/in.gif)  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`leftOf()`</md-block>
            </td>
            <td>
<md-block>

Filters for an element left of another element.

Takes an optional parameter `index` to select the nth element (defaults to `0`).

Takes an optional parameter `intersection_area` to specify which elements left of the other element are filtered for based on their vertical position (y-coordinates of bounding box):
- `"element_center_line"` - considered left of the other element if element's bounding box intersects with a horizontal line passing through the center of the other element
- `"element_edge_area"` - considered left of the other element if element's bounding box intersects with an area between the top and the bottom edge of the other element
- `"display_edge_area"` - considered left of the other element no matter where it is placed vertically on the screen (y-axis)

**Examples:**
```typescript 
---------                   --------- ----------
| text3 |                   | text0 | | button |
---------         --------- --------- ----------
        --------- | text1 |
        | text2 | ---------
        ---------

// General explanation for element_center_line
// This will find text0 and text3
...text().leftOf(..., 'element_center_line').button()

// General explanation for element_edge_area
// This will find text0, text1 and text3
...text().leftOf(..., 'element_edge_area').button()

// General explanation and display_edge_area
// This will find text0, text1, text2 and text3
...text().leftOf(..., 'display_edge_area').button()

// More examples:
// Returns text0 because it is the first element leftOf button
...text().leftOf().button()
...text().leftOf(0).button()
...text().leftOf(0, 'element_edge_area').button()

// Returns text3 because it is the second text touched by the
// horizontal line from the center of button
// Notice: text1 is not touched!
...text().leftOf(1, 'element_center_line').button()

// Returns text3 because it is the third text touched by the
// vertical area leftOf the y-axis of button
// Notice: text2 is not touched!
...text().leftOf(2, 'element_edge_area').button()

// Returns text2 because it is the third element leftOf button
...text().leftOf(2, 'display_edge_area').button()

// Returns no element because button is rightOf the texts
...button().leftOf().text()
```
![](/img/gif/leftOf.gif)  

</md-block>
<md-block>

    * @param \{number} [index=0] - Index of element to filter for going into the direction specified. Defaults to `0` which is the first element (zero-indexed) found in that direction.
    * @param \{INTERSECTION_AREA} [intersection_area="element_edge_area"] - Intersecting with either `"element_center_line"`, `"element_edge_area"` or `"display_edge_area"`. Defaults to `"element_edge_area"`.

</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`nearestTo()`</md-block>
            </td>
            <td>
<md-block>

Filters for an element nearest to another element.

**Examples:**
```typescript 
--------------
|  button 1  |
--------------
--------------
|   text     |
--------------
              
              
              
--------------
|  button 2  |
--------------

// Returns button 1 because button 1 is nearer to the text than button 2
...button().nearestTo().text()
```
![](/img/gif/nearestTo.gif)  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`or()`</md-block>
            </td>
            <td>
<md-block>

Logic or operator

**Examples:**
```text 
scene 1
--------------  ---------------
|  button    |  |  icon       |
--------------  ---------------

scene 2
--------------  ---------------
|  button    |  |  text       |
--------------  ---------------

```
In case, that your reference element can have multiple values, in the following example, the element right of the button can be either icon or text.
You can use **the `or()` relation**, so your instruction is valid for both scenes
```typescript 
const button = await aui.get().button().rightOf().icon().or().text().exec();
console.log(button);
```
Returns the same button for both cases
```text 
 console output: [
  DetectedElement {
     name: 'BUTTON',
     text: 'button',
     bndbox: BoundingBox {
        xmin: 900,
        ymin: 910,
        xmax: 920,
        ymax: 930
     }
  }
 ]
```  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`rightOf()`</md-block>
            </td>
            <td>
<md-block>

Filters for an element right of another element.

Takes an optional parameter `index` to select the nth element (defaults to `0`).

Takes an optional parameter `intersection_area` to specify which elements right of the other element are filtered for based on their vertical position (y-coordinates of bounding box):
- `"element_center_line"` - considered right of the other element if element's bounding box intersects with a horizontal line passing through the center of the other element
- `"element_edge_area"` - considered right of the other element if element's bounding box intersects with an area between the top and the bottom edge of the other element
- `"display_edge_area"` - considered right of the other element no matter where it is placed vertically on the screen (y-axis)

**Examples:**
```typescript 
---------- ---------                     ---------
| button | | text0 |                     | text3 |
---------- --------- ---------           ---------
                     | text1 | ---------
                     --------- | text2 |
                               ---------

// General explanation for element_center_line
// This will find text0 and text3
...text().rightOf(..., 'element_center_line').button()

// General explanation for element_edge_area
// This will find text0, text1 and text3
...text().rightOf(..., 'element_edge_area').button()

// General explanation and display_edge_area
// This will find text0, text1, text2 and text3
...text().rightOf(..., 'display_edge_area').button()

// More examples:
// Returns text0 because it is the first element rightOf button
...text().rightOf().button()
...text().rightOf(0).button()
...text().rightOf(0, 'element_edge_area').button()

// Returns text3 because it is the second text touched by the
// horizontal line from the center of button
// Notice: text1 is not touched!
...text().rightOf(1, 'element_center_line').button()

// Returns text3 because it is the third text touched by the
// vertical area rightOf the y-axis of button
// Notice: text2 is not touched!
...text().rightOf(2, 'element_edge_area').button()

// Returns text2 because it is the third element rightOf button
...text().rightOf(2, 'display_edge_area').button()

// Returns no element because button is rightOf the texts
...button().rightOf().text()
```
![](/img/gif/rightOf.gif)  

</md-block>
<md-block>

    * @param \{number} [index=0] - Index of element to filter for going into the direction specified. Defaults to `0` which is the first element (zero-indexed) found in that direction.
    * @param \{INTERSECTION_AREA} [intersection_area="element_edge_area"] - Intersecting with either `"element_center_line"`, `"element_edge_area"` or `"display_edge_area"`. Defaults to `"element_edge_area"`.

</md-block>
            </td>
        </tr>
    </tbody>
</table>

## Checks

<table style={{display: 'table'}}>
    <thead>
        <tr>
            <th style={{width: '10%', textAlign: "left"}}>Name</th>
            <th style={{width: '90%', textAlign: "left"}}>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <md-block>`exists()`</md-block>
            </td>
            <td>
<md-block>

Expects that filtered element exists.

Always use together with `expect()`.

**Note** Throws an error and stops the execution when the element is not found. You can catch the error and decide what to do as in the examples below.

**Examples:**
```typescript
// Stops execution at this point when the element does not exist.
await aui.expect().text('Login').exists().exec()

// This will catch the error and log a message
// But the execution will continue afterwards
try {
    await aui.expect().text('Login').exists().exec()
} catch (error) {
    console.log('Too bad we could not find the element!');
}
```  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`notExists()`</md-block>
            </td>
            <td>
<md-block>

Expects that filtered element not exists.

Always use together with `expect()`.

**Note** Throws an error and stops the execution when the element is found. You can catch the error and decide what to do as in the examples below.

**Examples:**
```typescript
// Stops execution at this point when the element does exist.
await aui.expect().text('Login').notExists().exec()

// This will catch the error and log a message
// But the execution will continue afterwards
try {
    await aui.expect().text('Login').notExists().exec()
} catch (error) {
    console.log('Too bad we could find the element!');
}
```  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
    </tbody>
</table>

## Getters

<table style={{display: 'table'}}>
    <thead>
        <tr>
            <th style={{width: '10%', textAlign: "left"}}>Name</th>
            <th style={{width: '90%', textAlign: "left"}}>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <md-block>`get()`</md-block>
            </td>
            <td>
<md-block>

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
  },
  ... 10 more items
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

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
        <tr>
            <td>
                <md-block>`getAll()`</md-block>
            </td>
            <td>
<md-block>

Returns an array with all detected elements.
A detected element has the following properties:
- `name` of the element
- `text` content of element
- `bndbox`: location of element described with coordinates of a bounding box

**Examples:**
```typescript 
const detectedElements = await aui.getAll().exec();
console.log(detectedElements);
```
```text 
 console output: [
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
     name: 'ICON',
     text: 'search',
     bndbox: BoundingBox {
        xmin: 250.8204241071428,
        ymin: 300.21332310267857,
        xmax: 450.6304241071428,
        ymax: 950.47812834821428
     },
   },
  ... 381 more items
 ]
```  

</md-block>
<md-block>


</md-block>
            </td>
        </tr>
    </tbody>
</table>

