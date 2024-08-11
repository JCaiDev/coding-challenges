function getLargerNumbers(a: number[], b: number[]): number[] {
  if (a.length !== b.length) {
    throw new Error("Arrays must be same length");
  }
  let result: number[] = [];
  for (let i: number = 0; i < a.length; i++) {
    result.push(Math.max(a[i], b[i]));
  }
  return result;
}
