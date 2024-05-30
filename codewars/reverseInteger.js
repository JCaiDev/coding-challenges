function reverseInteger(num) {
    const reversedString = Math.abs(num).toString().split('').reverse().join('')
    const reversedNum = parseInt(reversedString)

    return num < 0 ? -reversedNum : reversedNum
}