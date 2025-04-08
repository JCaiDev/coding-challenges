// in order to implement quick sort, it's useful to first implement a function responsibile arranging elements in an array on either side of a pivot
// given an array, this helper function should resignate an element as the pivot
// it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot and all greater than moved to the right
// the order of elements on either side of the pivot doesn't matter
// the helper should do this in place, that is, it should not create a new array
// when complete, the helper should return the index of the pivot

// **** Picking a pivot ****
// the runtime of quick sort depends in part on how one selects the pivot
// ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
// For simplicity, we will always choose the pivot to be the first element (we will talk about consequences of this later)

/** pivot Pseudocode */

// accept 3 arguments: an array, a start index, an end index (can default to 0 or arr.length-1)
// grab the pivot from the start of the array
// store the current pivot index in a variable (this will keep track of where the pivot should end up)
// loop through the array from the start until the end
// if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// swap the starting element(ie. the pivot) with the pivot index
// return the pivot index

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      console.log(
        `swapIdx = ${swapIdx} swap numbers: ${arr[swapIdx]} & ${arr[i]}`
      );
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

// quickSort Pseudo
// call the pivot helper on the array
// When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left and to the right of that index
// Base case occurs when a subarray with less than 2 elements

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

// [4, 6, 9, 1, 2, 5, 3] swapIdx = 3
// [3, 1, 2, 4, 9, 5, 6]
//           4
// 3, 2, 1
// 1, 2, 3 si = 2
// 1        si = 0
//    2 si = 1
