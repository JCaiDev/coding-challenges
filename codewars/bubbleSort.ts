function swapES(arr: any[], idx1: number, idx2: number): void {
  let temp: number = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const swap = (arr: any[], idx1: number, idx2: number): void => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function bubbleSort(arr) {
  return arr;
}
