function solve(s){
    let lowerC = 0
    let upperC = 0
    for (let i = 0; i<s.length; i++) {
        if (s[i] === s[i].toUppercase()) {
            upperC++
        } else {
            lowerC++
        }
    }
    return lowerC >= upperC ? s.toLowerCAse() : s.toUpperCase()
}


function solve(s) {
    let upper = s.split('').filter(x=> x === x.toUpperCase()).length
    let lower = s.length - upper

    return upper > lower ? s.toUpperCase() : s.toLowerCase()
}