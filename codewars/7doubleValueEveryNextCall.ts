class MyClass {
  static number: number = 1;

  static getNumber(): number {
    let results = this.number;
    this.number *= 2;
    return results;
  }
}
