//task: implement mergesort
function mergeSort (arr) {
    if (arr.length === 1) {
        //protip: return once we hit an array with a single item. That is a sorted array of size 1!
        return arr
    }


    const middle = Math.floor(arr.length / 2) // get middle item of the array and rounded down
    
    const left = arr.slice(0, middle) //items on the left
    const right = arr.slice(middle) //items on the right
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    //protip: split the array into halves and merge them recursively
    return merge( sortedLeft, sortedRight)
}

function merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
    
    //protip: compare the arrays item by item and return the concatenated result
    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}






