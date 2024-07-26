// define a function that loop over the longer str
// loop over the shorter string
// if characters dont match, break out of the inner loop
// if the characters do match, keep going
// if the inner loop completes and find a match, increment the count
// return the count
function naiveSearch(long: string, short: string): number {
  let count: number = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length) count++;
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol");
