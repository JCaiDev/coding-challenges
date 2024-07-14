// function countUniqueValue(arr){
//     let uniqueArray = []
    
//     let i = 0;

//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             uniqueArray.push(arr[i])
//             i = j
//         } 
//     }
    
//     return uniqueArray.length + 1
// }

countUniqueValue([1, 1, 2, 3, 3, 4, 5, 6, 6, 7])


function countUniqueValue(arr){
    if (arr.length === 0) return 0
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        console.log(i, j) 
    }
    
    return i + 1
}