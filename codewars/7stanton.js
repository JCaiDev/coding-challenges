function stantonMeasure(arr) {
    const count = n => arr.filter(x=> x ===n).length
    
    return count(count(1))
  }