


function sumDigPow(a, b) {
    var arr = [];
    for (var i = a; i <= b; i++) {
      var sum = 0;
      for (var j = 0; j <= String(i).length; j++) {
        sum += Math.pow(parseInt(String(i)[j]), j+1);  
        if (sum == i) arr.push(i);
      }
    }
    return arr;
  }