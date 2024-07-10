function isAnagram(stringA, stringB) {
    function createCharMap(text) {
        let charMap = {}

        text = text.toLowerCase().replace(/[^a-z\d]/g, "")

        for (let char of text) {
            if (charMap[char] in charMap){
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }
        return charMap
    }

    stringA = stringA.toLowerCase().replace(/[^a-z0-9]/g, '')
    stringB = stringB.toLowerCase().replace(/[^a-z0-9]/g, '')

    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)

        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false
            }
        }
        return true
    } else {
        return false
    }

    
}



function validAnagram(strA, strB) {
    
    if (strA.length !== strB.length) return false
    
    const lookup = {}

    for (let i = 0; i < strA.length; i++) {
        let charA = strA[i]

        lookup[charA] ? lookup[charA] +=1 : lookup[charA] = 1
    }

    for (let i = 0; i < strB.length; i++) {
        let letter = strB[i]

        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }
    return true

}