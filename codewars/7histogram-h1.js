function histogram(results) {
    let histogram = ""

    for (let i = 6; i > 0; i--) {
        histogram += i + '|' + (results[i] ? '#'.repeat(results[i]) + ' ' + results[i] : "") + '\n'
    }

    return histogram
}