/** 
 * 
 * straight forward / imperative approach
 * 
 * 
function rangeSum(arr, L, R) {
    let sum = 0
    for (let i = L; i <= R; i++) {
        sum += arr[i]
    }

    return sum
}

**/


function createPrefixSum(arr) {
    let prefixSum = new Array(arr.length)
    prefixSum[0] = arr[0]
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i-1] + arr[i]
    }
    return prefixSum
}

function rangeSum(prefixSum, L, R) {
    
    return L > 0 ? prefixSum[R] - prefixSum[L-1] : prefixSum[R]
    
}