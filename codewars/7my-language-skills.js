function myLanguages(results) {
    return Object.keys(results).filter(x=> results[x] > 59).sort((a, b)=> results[b] - results[a])
}