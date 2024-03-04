function removeRotten(arr){
    return arr ? arr.map(x=>x.replace('rotten', '').toLowerCase()) : [] ;
}