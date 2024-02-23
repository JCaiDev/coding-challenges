function partlist(arr) {
    let returnArr = []

    for (let i = 1; i<arr.length; i++) {
        let newArr = []
        newArr.push(arr.slice(0, 1).join(' '))
        newArr.push(arr.slice(i).join(' '))
        returnArr.push(newArr)
    }
    return returnArr
}