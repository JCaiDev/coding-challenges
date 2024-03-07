function explode(s) {
    return [...s].map(e=> e.repeat(+e)).join('')
}