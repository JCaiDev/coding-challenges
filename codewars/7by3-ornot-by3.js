function divisibleByThree(str){
    return [...str].reduce((acc, c)=> acc+ +c,0) % 3 === 0
}