function pattern(n) {
    let res = [], i
    for(let i = 0; i <= n; i++) {
        res.push(Array(i+1).join(i))
    }
    return res.join('\n')
}