---
displayed_sidebar: apiSidebar
---
# below
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for an element below another element.

Takes an optional parameter `index` to select the nth element (defaults to `0`).

Takes an optional parameter `intersection_area` to specify which elements below of the other element are filtered for based on their horizontal position (y-coordinates of bounding box):
- `"element_center_line"` - considered below of the other element if element's bounding box intersects with a vertical line passing through the center of the other element
- `"element_edge_area"` - considered below of the other element if element's bounding box intersects with an area between the left and the right edge of the other element
- `"display_edge_area"` - considered below of the other element no matter where it is placed horizontally on the screen (y-axis)

**Examples:**
```typescript 
--------------
|    text    |
--------------
--------------
|   button0  |
--------------
--------------
|   button1  |
--------------

// Returns button0 because button0 is the first button below text
...button().below().text()
...button().below(0).text()
// Returns button1 because button1  is the second button below text
...button().below(1).text()
// Returns no element because text is above button
...text().below().button()
```
![](/img/gif/below.gif)

   * @param {number} [index=0] - Index of element to filter for going into the direction specified. Defaults to `0` which is the first element (zero-indexed) found in that direction.
   * @param {INTERSECTION_AREA} [intersection_area="element_edge_area"] - Intersecting with either `"element_center_line"`, `"element_edge_area"` or `"display_edge_area"`. Defaults to `"element_edge_area"`.
