/**
 * @description: The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
 * @param: {string}
 * @return: {hash table}
 * @example: {'a': 2, 'b': 1}
 * @pseudocode:
 */


function count(string) {
    // setup hash table
    let count = {}
    //split string into character
    //for each char add a count else count[s] = 1
    string.split('').forEach(s => count[s] ? count[s]++ : count[s] = 1)
    return count;
  }

