function minMinMax(array: number[]): [number, number, number] {
  let min: number = Math.min(...array);
  let max: number = Math.max(...array);

  for (let i: number = min + 1; i < max; i++) {
    if (!array.includes(i)) {
      return [min, i, max];
    }
  }
  return [min, min, max];
}
