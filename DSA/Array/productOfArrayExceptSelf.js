// bruteforce

class Solution {
  productArrayXself(nums) {
    let results = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
      let prod = 1;
      for (let j = 0; j < nums.length; j++) {
        if (i !== j) {
          prod *= nums[j];
        }
      }
      results.push(prod);
    }
    return results;
  }
}

// prefix & suffix optimized
class Solution {
  productExceptSelf(nums) {
    let n = nums.length;

    // [-1, 0, 1, 2, 3]
    let results = new Array(n).fill(1);
    // [1, -1, 0, 0, 0]
    let postfix = 1;
    for (let i = 1; i < n; i++) {
      results[i] = results[i - 1] * nums[i - 1];
    }

    // postfix = 0
    for (let i = n - 1; i >= 0; i--) {
      results[i] *= postfix;
      postfix *= nums[i];
    }
    //[0, -6, 0, 0, 0]
    return result;
  }
}
