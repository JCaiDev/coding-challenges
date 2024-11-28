class Solution {
  characterReplacement(s, k) {
    let longest = 0;
    let left = 0;
    let right = 0;
    let maxFrequence = 0;
    let map = {};
    // AABABBAC k = 2, left = 4, right = 8, maxF = 3, longest = 7 c: 1
    while (right < s.length) {
      map[s[right]] = map[s[right]] + 1 || 1;
      maxFrequence = Math.max(maxFrequence, map[s[right]]);
      while (right - left + 1 - maxFrequence > k) {
        map[s[left]]--;
        left++;
      }

      longest = Math.max(longest, right - left + 1);
      right++;
    }
    return longest;
  }
}
