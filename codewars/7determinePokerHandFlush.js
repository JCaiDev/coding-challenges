function isFlush(cards) {
    return cards.every(x=> cards[0].slice(-1) === x.slice(-1))
}