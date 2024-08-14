const doubleEveryOther = (a: number[]): number[] =>
  a.map((c, i) => (i % 2 === 0 ? c : c * 2));
