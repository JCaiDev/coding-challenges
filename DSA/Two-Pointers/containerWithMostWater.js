class Solution {
  maxArea(heights) {
    let maxArea = 0;
    let l = 0;
    let r = heights.length - 1;

    while (l < r) {
      const area = Math.min(heights[l], heights[r]) * (r - l);
      maxArea = Math.max(maxArea, area);

      if (heights[l] <= heights[r]) {
        const currentHeight = heights[l];
        while (l < r && heights[l] <= currentHeight) {
          l++;
        }
      } else {
        const currentHeight = heights[r];
        while (l < r && heights[r] <= currentHeight) {
          r--;
        }
      }
    }
    return maxArea;
  }
}
