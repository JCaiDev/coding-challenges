//brute force
function twoSumbruteforce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
}

//hashmap solution

function twoSumHashMap(numbers, target) {
  let hash = new Map();
  // {1:1, 3:2, 4: 3, } target = 9
  // [1,3,4,5,7,11]
  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];
    if (hash.has(diff)) {
      return [hash.get(diff) + 1, i + 1];
    } else {
      hash.set(numbers[i], i);
    }
  }
  return [];
}

// 2 pointer solution

class Solution {
  twoSum(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
      let currentSum = numbers[l] + numbers[r];
      if (currentSum > target) {
        r--;
      } else if (currentSum < target) {
        l++;
      } else {
        return [l + 1, r + 1];
      }
    }
    return [];
  }
}
