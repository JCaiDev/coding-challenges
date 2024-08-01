function swapES(arr: any[], idx1: number, idx2: number): void {
  let temp: number = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const swap = (arr: any[], idx1: number, idx2: number): void => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function bubbleSort(arr: number[]) {
  let noSwaps: boolean;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //Swap
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    console.log("one pass complete");
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 7, 9, 10, 18, 17]);
// i = 0, j = 0 [37, 45, 29, 8]
// j = 1        [37, 29, 45, 8]
// j = 2        [37, 29, 8, 45]

// i = 1, j = 0 [29, 37, 8, 45]
// i = 1, j = 1 [29, 8, 37, 45]
// i = 1, j = 2 [29, 8, 37, 45]
// i = 1, j = 3 [29, 8, 37, 45]
