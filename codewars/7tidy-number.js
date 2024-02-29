const tidyNumber = n => {
    let s = n.toString();
    for (let i = 0; i < s.length-1; i++) {
      if (s[i] > s[i+1]) return false;
    }
    return true;
}