function rowWeights(array){
    var arr = [0, 0];
    for (var i = 0; i < array.length; i++) {
      i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
}


// or

function rowWeights(array){
    let team1 = array.filter((x, i) => i % 2 == 0).reduce((a, b) => a+b, 0)
    let team2 = array.filter((x, i) => i % 2 != 0).reduce((a, b) => a+b, 0)
    
    return [team1, team2] 
}