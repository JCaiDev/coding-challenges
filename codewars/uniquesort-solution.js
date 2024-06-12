const uniqSort = function(arr) {
    const cache = {}
    const results = []

    for (let i = 0; i<arr.length; i++) {
        if (!cache[arr[i]]) {
            results.push(arr[i]);
            cache[arr[i]] = true
        }
    }
    return results.sort((a, b)=> a - b)
}

uniqSort([4, 2, 2, 2, 3, 2, 2, 4])

console.log(uniqSort([4, 2, 2, 2, 3, 2, 2, 4]))