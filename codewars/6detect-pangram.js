/**
 * @description: A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 * @param {string}
 * @return {boolean}
 * @example 
 * "This is not a pangram." return false
 * "The quick brown fox jumps over the lazy dog." return true
 * @pseudocode
 *  
 */

function isPangram(string){
    // make str all lowercase to compare
    let str = string.toLowerCase()
    // test if each alphabet letter is in the string, return true if all of the indexOf(x) returns positive numbers.
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function(x) { return str.indexOf(x) !== -1} )
  }