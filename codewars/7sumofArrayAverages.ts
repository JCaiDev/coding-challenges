function sumAverage(arr: Array<number>[]): number {
  return Math.floor(arr.map((a) => a.reduce(sum) / a.length).reduce(sum));
}

const sum = (a: number, b: number): number => a + b;
