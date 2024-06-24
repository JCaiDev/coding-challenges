function well(x) {
    let match = ("" + x).match(/good/gi) || []
    let goodCount = match.length

    return goodCount > 2 ? "I smell a series!" : goodCount > 0 ? "Publish!" : 'Failed!'


}