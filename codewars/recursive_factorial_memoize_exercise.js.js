function joinElements(array, joinString) {
    let resultSoFar = ''

    for (let i = 0; i< array.length -1; i++) {
        resultSoFar += array[i] + joinString
    }
    return resultSoFar + array[array.length-1]
}

joinElements(['s', 'cr', 't cod', ' :) :)'], 'e')

// resultSoFar ='secret code' + ' :) :)'

// task 1: without peeking, write your own recursive factorial method



// task 2: use your memo function from the previous execise to memoize your factorial method

const memoize = (fn) => {
    let cache = {}
    return (...args) => { // Changed 'arg' to 'args' to correctly use spread syntax
        let n = args[0]   // This correctly references the first argument passed to the function
        if (n in cache) {
            return cache[n]
        } else {
            let result = fn(n)  // Calls the original function with the current argument
            cache[n] = result
            return result
        }
    }
}

const factorial = memoize(
    (x) => {
        if (x === 0) {
            return 1
        }
        return x * factorial(x - 1) // Correctly recursive, as 'factorial' now references the memoized version
    }
);