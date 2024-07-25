// let left equal index at 0
// let right equal length of array - 1

// find the midpoint by taking (left + right) /2
// is the target greater or less than the middle number
// if it is less than make right = mid - 1
// if target greater than mid, make left = mid + 1
// find new mid point - repeat until mid point = target
// if cannot find value return -1
// return mid, which should be the index of the target

function binarySearchTS(arr: number[], elem: number): number {
  let start: number = 0;
  let end: number = arr.length - 1;
  let mid: number = Math.floor((start + end) / 2);
  while (start <= end) {
    if (elem < arr[mid]) end = mid - 1;
    else start = mid + 1;
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === elem ? mid : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));
