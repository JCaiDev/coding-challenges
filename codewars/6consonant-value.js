function solve(s) {
    let highest = 0
    let sum = 0
    // s = 'snowboarding' turns to 'sn', 'wb', 'rd', 'g'
    for (const char of s) {
        if (isConsonant(char)) {
            sum += getValue(char)

            if ( highest < sum ) {
                highest = sum
            }
        } else {
            sum = 0
        }
    }

    return highest
}


function getValue(char) {
    return char.charCodeAt(0) - 96
}

function isConsonant(char) {
    return !'aeiou'.includes(char)
}