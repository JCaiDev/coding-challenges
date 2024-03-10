function containAllRots(str, arr) {
    for (let i = 0; i<str.length; i++) {
        if (arr.indexOf(str.slice(i) + str.slice(0,i)) === -1) {
            return false
        }
    }
    return true
}

//str = abcdef
// i = 0  >> abcdef + []
// i = 1 >> bcef + a
