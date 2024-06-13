// task 1: write a function, times10, that takes an argument that multiples n 10 times
// a simple multiplication fn

const times10 = (n) => {

}

console.log('~~~TASK 1 ~~~~')
console.log('times10 returns:', times10(9))

// task 2: use an object to cache the result of your times10 function 
// protip 1: create a fn that checks if the value for n has been calculated
// protip 2: if the value of n has not been calculated, calculate and then save the result in the cache object

const cache = {}

const memoTimes10 = (n0) => {

}

console.log('~~~~~TASK 2~~~~~')
console.log('Task 2 calcualted value: ', memoTimes10(9)) // calculated
console.log('Task 2 cache value: ', memoTimes10(9)) // cached