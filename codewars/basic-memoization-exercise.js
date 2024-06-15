// task 1: write a function, times10, that takes an argument that multiples n 10 times
// a simple multiplication fn

const times10 = (n) => {
    return n*10
}

console.log('~~~TASK 1 ~~~~')
console.log('times10 returns:', times10(9))

// task 2: use an object to cache the result of your times10 function 
// protip 1: create a fn that checks if the value for n has been calculated
// protip 2: if the value of n has not been calculated, calculate and then save the result in the cache object

const cache = {}

const memoTimes10 = (n) => {
    if (n in cache) {
        return cache[n]
    } else {
        const result = times10(n)
        cache[n] = result // cache = {9:90}
        return result
    }
}

console.log('~~~~~TASK 2~~~~~')
console.log('Task 2 calcualted value: ', memoTimes10(9)) // calculated
console.log('Task 2 cache value: ', memoTimes10(9)) // cached


// Task 3: clean up your global scope by moving your cache inside your function
// protip: use a closure to return a function that you can call later

const memoizedClosureTimes10 = (n) => {
    let cache = {}
    return (n) => {
        if (n in cache) {
            return cache[n]
        } else {
            let result = n*10
            cache[n] = result
            return result
        }
    }

}

const closureTimes10 = memoizedClosureTimes10()

