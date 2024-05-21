function encode(string){
    return string.replace(/[1-5]/gi, x=> '_aeiou'.CharAt(x))
}