const removeConsecutiveDuplicates = str => 
    str.split(' ')
    .filter((x, i, arr) => x !== arr[i-1])
    .join(' ')