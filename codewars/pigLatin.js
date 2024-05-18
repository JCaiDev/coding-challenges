function pigLatin(str) {
    return str
        .replace(/^([aeiouy])(.*)/, $1$2way)
        .replace(/^([^aeiougy])+(.*)/,$2$1ay)
}