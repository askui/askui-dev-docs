---
displayed_sidebar: apiSidebar
---
# rightOf
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

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

   * @param \{number} [index=0] - Index of element to filter for going into the direction specified. Defaults to `0` which is the first element (zero-indexed) found in that direction.
   * @param \{INTERSECTION_AREA} [intersection_area="element_edge_area"] - Intersecting with either `"element_center_line"`, `"element_edge_area"` or `"display_edge_area"`. Defaults to `"element_edge_area"`.
