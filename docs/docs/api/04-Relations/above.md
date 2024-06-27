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
--------------
|   text1    |
--------------
--------------
|   text0    |
--------------
--------------
|   button   |
--------------

// Returns text0 because text0 is the first element above button
...text().above().button()
...text().above(0).button()
// Returns text1 because text1 is the second element above button
...text().above(1).button()
// Returns no element because button is below text
...button().above().text()
```
![](/img/gif/above.gif)

   * @param \{number} [index=0] - Index of element to filter for going into the direction specified. Defaults to `0` which is the first element (zero-indexed) found in that direction.
   * @param \{INTERSECTION_AREA} [intersection_area="element_edge_area"] - Intersecting with either `"element_center_line"`, `"element_edge_area"` or `"display_edge_area"`. Defaults to `"element_edge_area"`.
