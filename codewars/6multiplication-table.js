multiplicationTable = function(size) {
    let results = []

    for (let i = 0; i < size; i++ ) {
        results[i] = []
        for (let j = 0; j<size; i++) {
            results[i][j] = (i+1) * (j+1)
        }
    }

    return results
}