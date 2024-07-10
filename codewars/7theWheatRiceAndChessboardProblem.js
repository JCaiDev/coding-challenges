function squaresNeeded(grains){
    if (grains === 0) return 0

    const n = Math.ceil(Math.log2(grains+1))

    return n
}

