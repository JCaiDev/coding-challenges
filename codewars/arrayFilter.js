function arrayFilter(arr, func) {
    let filteredArr = arr.filter(func)

    return filteredArr[0] ? filteredArr[0] : undefined
}

function arrayFilter2(arr, func) {
    return arr.find(func)
}