function sortOdd(arr) {
    const odd = arr.filter(x=> x%2).sort((a, b)=> a-b)

    return arr.map(x=> x%2 ? odd.shift() : x)   
}