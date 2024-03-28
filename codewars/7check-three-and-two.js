function checkThreeAndTwo(array) {
    let counts = array.reduce((result, letter)=> {
        if (result[letter]) {
            results[letter]++
        } else {
            results[letter] = 1
        }

        return result
    }, {})

    const containsThree = Object.values(counts).some(x=> x === 3)
    const containsTwo = Object.values(counts).some(x=> x === 2)

    return containsThree && containsTwo
} 
