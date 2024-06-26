---
displayed_sidebar: apiSidebar
---
# leftOf
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for an element left of another element.

Takes an optional parameter `index` to select the nth element (defaults to `0`).

Takes an optional parameter `intersection_area` to specify which elements left of the other element are filtered for based on their vertical position (y-coordinates of bounding box):
- `"element_center_line"` - considered left of the other element if element's bounding box intersects with a horizontal line passing through the center of the other element
- `"element_edge_area"` - considered left of the other element if element's bounding box intersects with an area between the top and the bottom edge of the other element
- `"display_edge_area"` - considered left of the other element no matter where it is placed vertically on the screen (y-axis)

**Examples:**
```typescript 
--------------  --------------  --------------
|  leftEl1   |  |  leftEl0   |  |  rightEl   |
--------------  --------------  --------------

// Returns leftEl0 because leftEl0 is the first element left of rightEl
...leftEl().leftOf().rightEl()
...leftEl().leftOf(0).rightEl()
// Returns leftEl1 because leftEl1 is the second element left of rightEl
...leftEl().leftOf(1).rightEl()
// Returns no element because rightEl is left of leftEl
...rightEl().leftOf().leftEl()
```
![](/img/gif/leftOf.gif)

   * @param {number} [index=0] - Index of element to filter for going into the direction specified. Defaults to `0` which is the first element (zero-indexed) found in that direction.
   * @param {INTERSECTION_AREA} [intersection_area="element_edge_area"] - Intersecting with either `"element_center_line"`, `"element_edge_area"` or `"display_edge_area"`. Defaults to `"element_edge_area"`.
