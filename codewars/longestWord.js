function longestWord(text) {
    let textArr = text.split(" ")
    let maxLen = 0
    let result = ""

    for (let i = 0; i<textArr.length; i++) {
        if (textArr[i].length > maxLen) {
            maxLen = textArr[i].length
            result = textArr[i]
        }
    }
    return result
}