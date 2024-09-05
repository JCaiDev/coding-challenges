class Ghost {
  color: string;

  constructor() {
    const color: string[] = ["white", "yellow", "purple", "red"];
    const colorIndex: number = Math.floor(Math.random() * color.length);
    this.color = color[colorIndex];
  }
}
