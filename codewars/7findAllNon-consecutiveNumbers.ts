function allNonConsecutive(arr: number[]): any[] {
  let result: any[] = [];

  arr.forEach((val, index) => {
    if (val !== arr[index - 1] + 1 && index) {
      result.push({ i: index, n: val });
    }
  });

  return result;
}
