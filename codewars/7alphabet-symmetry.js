function solve(arr) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    return arr.map(x => x.toLowerCase().split('').filter((y, i) => i == alphabet.indexOf(y)).length)
}

