function filterHomogenous(array: any[]): any[] {
  return array.filter(
    (subArr: any[]) =>
      subArr.length > 0 &&
      subArr.every((e: any) => typeof e === typeof subArr[0])
  );
}
