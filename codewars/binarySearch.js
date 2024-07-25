function binarySearch(array, val) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currentElement = array[mid];

    if (array[mid] < val) {
      left = mid + 1;
    } else if (array[mid] > val) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

binarySearch([1, 2, 3, 5, 6, 8, 9, 12, 16, 29, 45, 47, 100], 47);

//
