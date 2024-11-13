// Brute force
// time complexity: O(n^2) space complexity: O(n)

class Solution {
  longestConsecutiveBruteForce(nums) {
    let result = 0;

    const set = new Set(nums);

    for (let num of nums) {
      let streak = 0;
      let curr = num;
      while (store.has(curr)) {
        streak++;
        curr++;
      }
      result = Math.max(result, streak);
    }
    return result;
  }
}

class Solution {
  longestConsecutive(nums) {
    let results = 0;
    let set = new Set(nums);

    for (let num of set) {
      if (!set.has(num - 1)) {
        let length = 1;
        let nextNum = num + 1;

        while (set.has(nextNum)) {
          length++;
          nextNum++;
        }
        results = Math.max(length, results);
      }
    }
    return results;
  }
}

// [1, 1, 2, 3, 3, 4]
// streak = 4, result = 4, curr = 5, nums[i] = 4,  i = 6.
