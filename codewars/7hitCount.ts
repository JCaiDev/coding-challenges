function counterEffect(hitCount: string): number[][] {
  let output: number[][] = [];
  for (let i = 0; i < hitCount.length; i++) {
    let temp: number[] = [];
    for (let j: number = 0; j <= Number(hitCount[i]); j++) {
      temp.push(j);
    }
    output.push(temp);
  }
  return output;
}

function counterEffect2(hitCount: string): number[][] {
  return [...hitCount].map((d) => Array.from({ length: +d + 1 }, (_, i) => i));
}
