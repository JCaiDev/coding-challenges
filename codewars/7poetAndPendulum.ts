function pendulum(values: number[]): number[] {
  let sortArr: number[] = values.slice().sort((a, b) => a - b);

  let part: { left: number[]; right: number[] } = { left: [], right: [] };

  for (let i = 0; i < sortArr.length; i++) {
    if (i % 2 === 0) {
      part.left.push(sortArr[i]);
    } else {
      part.right.push(sortArr[i]);
    }
  }
  return [...part.left.reverse(), ...part.right];
}
