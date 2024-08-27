// radix sort helpers
// helper function 1: getDigit(num, place) - returns the digit in num at the given place value

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// helper function 2: digitCount(num) - returns the number of digits in num

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num) + 1));
}

// help function 3: mostDigits(nums) - given an array of numbers, returns the number of digits in the largest numbers in the list

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Define a function that accepts list of numbers
// Figure out how many digits the largest number has
// Loop from k = 0 up to the largest number of digits
// For each literation of the loop:
// create buckets for each digit (0-9)
// place each number in the corresponding bucket based on its kth digit
// Replace our existing array with values in our buckets, starting with 0 and going up to 9
// Return list at the end!

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  console.log(maxDigitCount);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums, k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
