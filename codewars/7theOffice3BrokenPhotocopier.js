function broken(x) {
    return x.replace(/\d/g, x => x ^ 1)
}