function isSameLanguage(list) {
    return list.every((x, i)=> x.language === list[0].language)
}