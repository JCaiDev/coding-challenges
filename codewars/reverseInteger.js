function reverseString(text) {

    return [...text].reduce((acc, char) => char + acc, '') 

}

function reversedInteger(num) {
    let reversedString = reverseString(num.toString())
    
    let reversedNum = parseInt(reversedString)
    
    return (reversedNum * Math.sign(num))
}