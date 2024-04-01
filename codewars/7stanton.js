function stantonMeasure(array){
    const count = n => array.filter(x=> x===n).length

    return count(count(1))    
}