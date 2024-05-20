function encode(string){
    return string.replace(/[aeiou]/gi, x=> '_aeiou'.indexOf(x))
}

