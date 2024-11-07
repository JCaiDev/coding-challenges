class Person {
  name: string;
  constructor(myName: string) {
    this.name = myName;
  }
  greet(yourName: string): string {
    return `Hello ${yourName}, my name is ${this.name}`;
  }
}
