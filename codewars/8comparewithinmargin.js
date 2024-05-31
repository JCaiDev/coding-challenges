function compare(a, b, m) {
    return Math.abs(a-b) <= m ? 0 : Math.sign(a-b)
}