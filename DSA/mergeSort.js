//create an empty array, take a look at the smallest values in each input array
//while there are still values we havent looked at
// if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
// once we exhaust one array, push in all remaining values from the other array

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

merge([1, 10, 50], [2, 14, 99, 100]);

console.log(test1); // [1, 2, 10, 14, 50, 99, 100];
