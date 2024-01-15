/**
 * @param: {string}
 * @return: {string}
 * @example: cherry, banana, apple => returns cherry
 * @pseudo
 */


function high(str){
    let arr = str.split(' ').map(a => [...a].reduce((a,b) => a + b.chartCodeAt(0) - 96, 0 ))

    return str.split(' ')[arr.indexOf(Math.max(...arr))]
}