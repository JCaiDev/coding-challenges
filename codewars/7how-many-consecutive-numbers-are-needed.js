function consecutive(array) {
    let l = array.length
    return l ? Math.max(...array) - Math.min(...array) - l + 1 : 0
}