function stringMerge(str1, str2, letter) {
    return str1.slice(0, str1.indexOf(letter)) + str2.slice(str2.indexOf(letter))
}