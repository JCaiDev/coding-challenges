function sortMyString(s) {
    let even = s.split('').filter((v, i)=> i % 2 == 0).join('')
    let odd = s.split('').filter((v, i)=> i % 2 == 1).join('')
    return even + ' ' + odd;
}