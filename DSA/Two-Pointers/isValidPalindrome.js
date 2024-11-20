// reverse string method

function isValidP(str) {
  let s = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  return s === s.split("").reverse().join("");
}

// 2 pointer solution with time o(n) and space O(1)

class Solution {
  isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
      while (l < r && !this.alphaNum(s[l])) {
        l++;
      }
      while (l < r && !this.alphaNum(s[r])) {
        r--;
      }
      if (s[l].toLowerCase() !== s[r].toLowerCase()) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }

  alphaNum(c) {
    // return /^[a-zA-Z0-9]$/.test(c); - using RegEx
    return (
      (c >= "A" && c <= "Z") || (c >= "a" && c <= "c") || (c >= "0" && c <= "9")
    );
  }
}
