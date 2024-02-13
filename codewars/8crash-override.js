

const initialCap = str => str[0].toUpperCase()
const isValidName = name => /^[a-z]/i.test(name)

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

const = aliasGen(fName, lName) => {
    return (isValidName(fName) && isValidName(lName))
    ? `${firstName[initialCap(fName)]} ${surname[initialCap(lName)]}`
    : 'Your name must start with a letter from A - Z.' 
}
