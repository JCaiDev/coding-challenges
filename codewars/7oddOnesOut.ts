function oddOnesOut(nums: number[]): number[] {
  const result: { [key: number]: number } = {};

  nums.forEach((num) => {
    if (result[num] !== undefined) {
      result[num]++;
    } else {
      result[num] = 1;
    }
  });

  return nums.filter((x) => result[x] % 2 === 0);
}
