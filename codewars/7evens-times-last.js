function evenLast(numbers) {
    return numbers.reduce((acc, c, i) => i % 2 ? acc : acc + c, 0) * numbers[numbers.length-1] || 0
}