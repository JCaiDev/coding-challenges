function threeSumbruteforce(nums) {
  const result = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k]) {
          result.add(JSON.stringify([nums[i], nums[j], nums[k]]));
        }
      }
    }
  }

  return result;
}

function threeSumHashmap(nums) {}
