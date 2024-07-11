function divCon(arr) {
    return arr.reduce((acc, cur) => typeof cur === 'number' ? acc + cur : acc - +cur, 0)
}