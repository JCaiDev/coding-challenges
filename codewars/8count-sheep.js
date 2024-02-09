const countSheep = num => {
    let str = ''

    for (let i = 1; i<= num; i++) {
        str += `${i} sheep...`
    }
    return str
}