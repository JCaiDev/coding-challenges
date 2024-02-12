function defineSuit(card) {
    const s = {
        "♣": "clubs",
        "♠": "spades",
        "♦": "diamonds",
        "♥": "hearts"
    }

    return s[card.charAt(card.length-1)]
}