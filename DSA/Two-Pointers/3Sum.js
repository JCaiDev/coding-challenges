function threeSumbruteforce(nums) {
  const result = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.add(JSON.stringify([nums[i], nums[j], nums[k]]));
        }
      }
    }
  }

  return result;
}

// Hashmap Method
function threeSumHashmap(nums) {
  nums.sort((a, b) => a - b);
  const count = new Map();

  for (let num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    count.set(nums[i], count.get(nums[i]) - 1);
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length; j++) {
      count.set(nums[j], nums[j] - 1);
      if (j > 0 && nums[j] === nums[j - 1]) continue;

      const target = -(nums[i] + nums[j]);
      if (count.has(diff) > 0) {
        result.push([nums[i], nums[j], target]);
      }
    }

    for (let j = i + 1; j < nums.length; j++) {
      count.set(nums[j], count.get(nums[j]) + 1);
    }
  }
  return result;
}

// 2 pointers
class Solution {
  threeSum(nums) {
    let results = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      if (nums[0] > 0) break;
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let l = i + 1;
      let r = nums.length - 1;
      while (l < r) {
        const sum = nums[i] + nums[l] + nums[r];
        if (sum > 0) {
          r--;
        } else if (sum < 0) {
          l++;
        } else {
          results.push([nums[i], nums[l], nums[r]]);
          l++;
          r--;
          while (l < r && nums[l] === nums[l - 1]) {
            l++;
          }
        }
      }
    }
    return results;
  }
}
