function stockList(listOfArt, listOfCat) {
    var qs = {};
    if (!listOfArt.length) return '';
  
    listOfArt.forEach(function(art) {
      var cat = art[0];
      qs[cat] = (qs[cat] | 0) + +art.split(' ')[1];
    });
  
    return listOfCat.map(function(c) {
      return '(' + c + ' : ' + (qs[c] | 0) + ')';  
    }).join(' - ');  
  }