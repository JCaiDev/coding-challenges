// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

//brute force method

// function bruteForceTopElements(nums, k) {
//   let count = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (count[nums[i]]) {
//       count[nums[i]] += 1;
//     } else {
//       count[nums[i]] = 1;
//     }
//   }
//   let sortedArray = Object.entries(map)
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k);

//   return sortedArray.map((item) => item[0]);
// }

class Solution {
  topKFrequent(nums, k) {
    const count = {};
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    for (const n of nums) {
      count[n] = (count[n] || 0) + 1;
    }

    for (const n in count) {
      freq[count[n]].push(n);
    }

    let res = [];
    for (let i = freq.length - 1; i >= 0 && res.length < k; i--) {
      if (freq[i].length > 0) {
        res.push(...freq[i]);
      }
    }

    return res;
  }
}
