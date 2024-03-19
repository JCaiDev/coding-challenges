function switcher(x) {
    let alpha = ' zyxwvutsrqponmlkjihgfedcba!? '

    return x.map(item => alpha[item]).join('')
}