function minEatingSpeed(piles: number[], h: number): number {
  let left: number = 1;
  let right: number = Math.max(...piles);
  let result = right;
  while (left <= right) {
    let totalTime: number = 0;
    let k: number = Math.floor((left + right) / 2);

    for (let pile of piles) {
      totalTime += Math.ceil(pile / k);
    }
    if (totalTime <= h) {
      result = k;
      right = k - 1;
    } else {
      left = k + 1;
    }
  }
  return result;
}
