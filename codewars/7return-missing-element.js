function getMissingElement(array){
    return array.reduce((sum, value)=> sum - value, 45)
}