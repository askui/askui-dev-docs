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
--------------  --------------  --------------
|  leftEl    |  |  rightEl0  |  |  rightEl1  |
--------------  --------------  --------------

// Returns rightEl0 because rightEl0 is the first element right of leftEl
...rightEl().rightOf().leftEl()
...rightEl().rightOf(0).leftEl()
// Returns rightEl1 because rightEl1 is the second element right of leftEl
...rightEl().rightOf(1).leftEl()
// Returns no element because leftEl is left of rightEl
...leftEl().rightOf().rightEl()
```
![](/img/gif/rightOf.gif)

   * @param \{number} [index=0] - Index of element to filter for going into the direction specified. Defaults to `0` which is the first element (zero-indexed) found in that direction.
   * @param \{INTERSECTION_AREA} [intersection_area="element_edge_area"] - Intersecting with either `"element_center_line"`, `"element_edge_area"` or `"display_edge_area"`. Defaults to `"element_edge_area"`.
