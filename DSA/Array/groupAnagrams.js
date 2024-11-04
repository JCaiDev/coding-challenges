// function groupAnagrams(strs) {
//   let cache = {};
//   for (let str of strs) {
//     let sortedKey = str.split("").sort().join("");

//     !cache[sortedKey] ? (cache[sortedKey] = [str]) : cache[sortedKey].push(str);
//   }

//   return Object.values(cache);
// }

function groupAnagrams(strs) {
  let cache = {};

  for (let str of strs) {
    const count = new Array(26).fill(0);

    for (let c of str) {
      count[c.charCodeAt() - "a".charCodeAt()] += 1;
    }
    const key = count.join("");

    if (!cache[key]) {
      cache[key] = [];
    }
    cache[key].push(str);
  }
  return Object.values(cache);
}
