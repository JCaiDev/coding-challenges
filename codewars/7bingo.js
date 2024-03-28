function bingo(arr) {
    return [2, 7, 9, 14, 15].every(e=> arr.includes(e)) ? "Bingo" : "Try again"
}