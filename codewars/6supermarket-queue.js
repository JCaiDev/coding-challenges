function queueTime(customers, n) {
    let w = new Array(n).fill(0)
    // w = [0, 0]
    for (let t of customers) {
        let idx = w.indexOf(Math.min(...w))
        w[idx] += t
    } // w[10, 6]

    return Math.max(...w)
}