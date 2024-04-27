function isAllPossibilities(arr) {
    return arr.length > 0 && arr.every((x, i) => arr.includes(i))
}