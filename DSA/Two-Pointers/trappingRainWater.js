class Solution {
  trap(height) {
    if (!height || height.length === 0) return 0;

    let totalArea = 0;

    let l = 0;
    let r = height.length - 1;
    // l = 4, r = 6
    // left = 3, right = 3
    // totalArea =  2 + 2 +
    let leftMax = 0;
    let rightMax = 0;
    while (l < r) {
      if (height[l] < height[r]) {
        leftMax = Math.max(leftMax, height[l]);
        totalArea += leftMax - height[l];
        l++;
      } else {
        rightMax = Math.max(rightMax, height[r]);
        totalArea += rightMax - height[r];
        r--;
      }
    }
    return totalArea;
  }
}
