function arrayFilter(arr, func) {
    for (let elem of arr) {
        if (func(elem)) {
            return elem
        }
    }
    return undefined
}