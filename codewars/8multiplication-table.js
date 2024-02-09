function multiplicationTable(number) {
    let str = ''
    for (let i = 0; i<10; i++) {
        str += `${i} * ${number} = ${i*number}${ i<10 ? '\n' : ''}`
    }
}