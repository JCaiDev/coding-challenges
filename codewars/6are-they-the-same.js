

function comp(array1, array2){
    if (array1 == null || array2 == null) return false
    array1.sort((a, b)=> a-b)
    array2.sort((a, b)=> a-b)
    return array1.map((a) => a*a).every((x, i)=> x == array2[i])
}

function test() {
    console.log('test 1')
    console.log('test2')
}

