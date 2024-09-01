class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   *
   * Edge cases empty arrays [], negatives, different types, [1, "1"]
   */
  hasDuplicates(nums) {
    const numSet = new Set();

    for (const num of nums) {
      if (numSet.has(num)) return true;
      numSet.add(num);
    }

    return false;
  }
}
