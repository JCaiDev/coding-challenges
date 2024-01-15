function minValue(values){
    let arr = Array.from(new Set(values))
    return +arr.sort().join('')
}