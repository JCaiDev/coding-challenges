function smallEnough(array: number[], limit: number): boolean {
  return array.every((element) => element <= limit);
}
