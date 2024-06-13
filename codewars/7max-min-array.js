function solve(arr) {
    arr.sort((a, b) => a-b)
    
    let minMax = []
    
    for (let i = 0, j = arr.length-1; i <= j; i++, j--) {
        if ( i != j) {
            minMax.push(arr[j], arr[i])
        } else {
            minMax.push(arr[i])
        }
    }
    
    return minMax
}