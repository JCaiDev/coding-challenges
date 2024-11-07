class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   * @example ['jeffrey', 'is','a', 'software','engineer']
   */

  encode(strs) {
    let results = "";
    for (let s of strs) {
      results += `${s.length}#${s}`;
    }
    return results;
    // ['7#jeffrey2#is1#a8#software8#engineer']
  }

  /**
   * @param {string} str
   * @returns {string[]}
   * @example ['7#jeffrey2#is1#a8#software8#engineer']
   */
  decode(str) {
    let result = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j), 10); //7
      i = j + 1; // i = 1+1 = 2
      j = i + length; // j = 2+7 = 9
      result.push(str.substring(i, j)); // 'substring(2,9)' = 'jeffrey'
      i = j; // i = 9
    }
    return result;
  }
}

// simple solution
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    if (!strs.length) return "";
    return strs.join("-encodeStr");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    if (str === "") return [];
    return str.split("-encodeStr");
  }
}
