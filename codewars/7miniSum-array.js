function minSum(arr) {
    return arr.sort((a , b) => a - b ).reduce((acc, curr) => acc + curr*arr.pop(),0)
}