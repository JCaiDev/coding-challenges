const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const alSwap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) console.log(i, lowest);
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
    // swap(arr, arr[lowest], arr[i]);
  }
  return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);
