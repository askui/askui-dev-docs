---
sidebar_position: 2
title: Scrolling
---

# Scrolling
When you use AskUI you can only interact with elements that you can see on your screen. Therefore you have to scroll down/sideways to interact with currently invisible elements.

### Scrolling With Mouse Wheel
If you want to scroll with your mouse wheel you can use the `scroll()` action:

```javascript
// Scroll 10 down in y direction<>
await aui.scroll(0, -10).exec()
```

### Scrolling With Key Press
If you want to scroll with a key press you could use your arrow keys (`up`, `down`, `left`, `right` ) or the `pagedown`-key.

```javascript
// Press down arrow key
await aui.pressKey('down').exec()

// Press up arrow key
await aui.pressKey('up').exec()

// Scroll down a page
await aui.pressKey('pagedown').exec()

// Scroll up a page
await aui.pressKey('pageup').exec()
```

### Scrolling on Touch Displays
On touch displays you have to recreate the swipe gesture:

```javascript
// Touch the display with your finger, move finger to the left, release
await aui.mouseToggleDown().exec()
await aui.moveMouseRelatively(-1500, 0).exec()
await aui.mouseToggleUp().exec()
```
