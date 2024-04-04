function alternate(n, fv, sv) {
    let array = []
    for (let i = 0; i < n; i++) {
        array.push( i % 2 === 0 ? fv : sv)
    }
    return array
}