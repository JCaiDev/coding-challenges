function falsyBouncer(array) {
    let result = []
    for (value of array) {
        value && result.push(value)
    }

    return result
}