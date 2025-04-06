const findDuplicate = (nums: number[]): number => {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      break;
    }
  }

  let slow2 = 0;

  while (true) {
    slow2 = nums[slow2];
    slow = nums[slow];
    if (slow === slow2) {
      return slow;
    }
  }
};
