function scrollingText(text) {
    let res = []
    text = text.toUpperCase()
    for (let i = 0; i<text.length; i++) {
        res.push(text.slice(i) + text.slice(0,i))
    }
    return res
}

function scrollingText2(text) {
    text = text.toUpperCase()

    return [...text].map((_, i) => text.slice(i) + text.slice(0, i))
}