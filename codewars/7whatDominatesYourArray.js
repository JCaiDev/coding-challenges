function dominator(arr) {
    let count = {}
    let threshold = arr.length/2
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i]  
      count[num] = count[num] +1 || 1
        if (count[num] > threshold) {
            return num
        } 
    } 
    return -1

}