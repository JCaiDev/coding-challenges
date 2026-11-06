function splitArray(nums: number[], k: number): number {
  function workersNeeded(maxLoad: number): number {
    let workers = 1;
    let current = 0;
    for (const task of nums) {
      if (current + task > maxLoad) {
        workers++;
        current = task;
      } else {
        current += task;
      }
    }
    return workers;
  }
  let left = Math.max(...nums);
  let right = nums.reduce((a, b) => a + b, 0);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (workersNeeded(mid) <= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
