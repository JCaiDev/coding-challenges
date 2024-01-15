//Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications.


function maximumTriplets(numbers){
    return [...new Set(numbers)].slice(0, 3).reduce((acc, value)=> acc += value, 0)
}