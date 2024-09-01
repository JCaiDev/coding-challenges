function add(n: number): (x: number) => number {
  return function (x: number): number {
    return n + x;
  };
}
