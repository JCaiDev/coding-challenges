function lengthOfLongestSubstringBruteForce(s) {
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    let charSet = new Set();
    for (let j = i; j < s.length; j++) {
      if (charSet.has(s[j])) {
        break;
      }
      charSet.add(s[j]);
    }
    longest = Math.max(longest, charSet.size);
  }
  return longest;
}

//sliding window

class Solution {
  lengthOfLongestSubstring(s) {
    let l = 0;
    let longest = 0;
    let charMap = {};

    for (let r = 0; r < s.length; r++) {
      if (s[r] in charMap) {
        l = Math.max(l, charMap[s[r]] + 1);
      }
      charMap[s[r]] = r;
      longest = Math.max(longest, r - l + 1);
    }
    return longest;
  }
}
