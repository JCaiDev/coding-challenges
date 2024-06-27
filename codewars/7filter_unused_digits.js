function unusedDigits(...args) {
    let digits = args.join('')

    return [0,1,2,3,4,5,6,7,8,9].filter(x=> !digits.includes(x)).join('')

}

function unusedDigits2(...args) {
    return "0123456789".replace(new RegExp('[' + args.join('') + ']', 'g'), '')
}