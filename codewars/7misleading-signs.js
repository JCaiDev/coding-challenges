function gaslighting(shirtWord, yourWord, friendsLetters) {
    return [...shirtWord].some((c, i)=> yourWord[i] !==c && (friendsLetters.includes(c) || friendsLetters.includes(yourWord[i])))
}