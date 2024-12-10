//brute force method

function checkInclusionBF(s1, s2) {
  let s1 = s1.split("").sort().join("");
  /// acd,  s2 = dcda
  for (let i = 0; i < s2.length - s1.length; i++) {
    let subStr = s2
      .slice(i, i + s1.length)
      .split("")
      .sort()
      .join("");
    if (subStr === s1) {
      return true;
    }
  }

  return false;
}

//hash table method

function checkInclusionMap(s1, s2) {
  let count1 = {};
  //count frequency of count1 = {a: 1, b:1, c:1}
  for (let c of s1) {
    count1[c] = (count1[c] || 0) + 1;
  }

  let need = Object.keys(count1).length;

  for (let i = 0; i < s2.length; i++) {
    let count2 = {};
    let cur = 0;
    for (let j = i; j < s2.length; j++) {
      let c = s2[j];

      count2[c] = (count[c] || 0) + 1;
      if ((count1[c] || 0) < count2[c]) {
        break;
      }

      if (count1[c] === count2[c]) {
        cur++;
      }

      if (cur === need) {
        return true;
      }
    }
  }

  return false;
}

// sliding window method

class Solution {
  checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    let s1count = new Array(26).fill(0);
    let s2count = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
      s1count[s1.charCodeAt(i) - 97]++;
      s2count[s2.charCodeAt(i) - 97]++;
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) {
      if (s1count[i] === s2count[i]) {
        matches++;
      }
    }
    // aa [2, 0, 0, 0, 0 ... 0, 0, 0]
    // c d a b a a [2, 0, 0, 0, 0 ... 0, 0, 0]
    // l = 0, r = 2, index = 0 -> 'a', matches = 26
    let l = 0;
    for (let r = s1.length; r < s2.length; r++) {
      if (matches === 26) {
        return true;
      }

      let index = s2.charCodeAt(r) - 97;
      s2count[index]++;
      if (s1count[index] === s2count[index]) {
        matches++;
      } else if (s1count[index] + 1 === s2count[index]) {
        matches--;
      }

      index = s2.charCodeAt(l) - 97;
      s2count[index]--;
      if (s1count[index] === s2count[index]) {
        matches++;
      } else if (s1count[index] - 1 === s2count[index]) {
        matches--;
      }
      l++;
    }
    return matches === 26;
  }
}

// chatGPT Solution

function checkPerm(s1, s2) {}
