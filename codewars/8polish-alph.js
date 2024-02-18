function correctPolishLetter(str) {
    let polishLetter = {
        'ą' : 'a',
        'ć' : 'c',
        'ę' : 'e',
        'ł' : 'l',
        'ń' : 'n',
        'ó' : 'o',
        'ś' : 's',
        'ź' : 'z',
        'ż' : 'z'
    }

    return str.replace(/[ąćęłńńóśźż]/g, match=>polishLetter[match])
}


fdasfdsa

