function minEatingSpeed(piles: number[], h: number): number {
  let left: number = 1;
  let right: number = Math.max(...piles);
  let minSpeed = right;

  // helper function
  function calculateTotalTime(speed: number): number {
    let totalTime: number = 0;
    for (let pile of piles) {
      totalTime += Math.ceil(pile / speed);
    }
    return totalTime;
  }

  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);
    let totalTime = calculateTotalTime(mid);

    if (totalTime <= h) {
      minSpeed = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return minSpeed;
}
