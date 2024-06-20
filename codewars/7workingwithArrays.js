function withoutLast(arr) {
    //fix arr.pop() return arr
    return arr.slice(0, -1)
}