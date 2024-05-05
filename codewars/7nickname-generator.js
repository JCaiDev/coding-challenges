const nicknameGenerator = name => {
    if (name.length < 4) return "Error: Name is too short";

    let isVowel = /[aeiou]/i.test(name[2])
    return isVowel ? name.slice(0, 4) : name.slice(0, 3)
}