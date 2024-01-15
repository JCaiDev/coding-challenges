function evenNumbers(array, number) {
    return array.filter(a => a % 2 == 0).slice(-number)

}