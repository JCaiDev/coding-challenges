class Vector {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(vector: Vector): Vector {
    return new Vector(vector.x + this.x, vector.y + this.y);
  }
}
