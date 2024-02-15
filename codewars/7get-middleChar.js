function getMiddle(s) {
    return s.substr(Math.ceil(s.length/2), s.length % 2 === 0 ? 2, 1)
}