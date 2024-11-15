class Cuboid {
  length: number;
  width: number;
  height: number;
  constructor(length: number, width: number, height: number) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get surfaceArea(): number {
    return (
      (this.length * this.width +
        this.width * this.height +
        this.length * this.height) *
      2
    );
  }
  get volume(): number {
    return this.length * this.width * this.height;
  }
}

class Cube extends Cuboid {
  constructor(length: number) {
    super(length, length, length);
  }
}
