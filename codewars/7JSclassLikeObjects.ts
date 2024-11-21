class Animal {
  name: string;
  type: string;
  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }
  toString(): string {
    return `${this.name} is a ${this.type}`;
  }
}
