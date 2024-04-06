function save(sizes, hd) {
    let results = 0
    sizes.reduce((acc, c) => {
        if ((acc += c) <= hd) results +1;
        return acc
    }, 0)
    return results
}