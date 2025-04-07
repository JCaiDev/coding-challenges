function dailyTemperatures(temperatures: number[]): number[] {
  const res = new Array(temperatures.length).fill(0);
  const stack: [number, number][] = [];

  for (let i = 0; i < temperatures.length; i++) {
    let t: number = temperatures[i];
    while (stack.length > 0 && t > stack[stack.length - 1][0]) {
      const [stackT, stackInd]: [number, number] = stack.pop()!;
      res[stackInd] = i - stackInd;
    }
    stack.push([t, i]);
  }

  return res;
}
