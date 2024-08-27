class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   *
   * Edge cases empty arrays [], negatives, different types, [1, "1"]
   */
  hasDuplicates(nums) {
    const numsSet = new Set();
    for (const num of nums) {
      if (numsSet.has(num)) return true;
    }
    return false;
  }
}
