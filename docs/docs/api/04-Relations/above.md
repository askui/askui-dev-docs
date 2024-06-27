---
displayed_sidebar: apiSidebar
---
# above
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

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

   * @param \{number} [index=0] - Index of element to filter for going into the direction specified. Defaults to `0` which is the first element (zero-indexed) found in that direction.
   * @param \{INTERSECTION_AREA} [intersection_area="element_edge_area"] - Intersecting with either `"element_center_line"`, `"element_edge_area"` or `"display_edge_area"`. Defaults to `"element_edge_area"`.
