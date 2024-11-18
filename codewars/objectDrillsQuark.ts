class Quark {
  readonly baryon_number: number = 1 / 3;

  private static validColors = ["red", "green", "blue"];
  private static validFlavors = [
    "up",
    "down",
    "strange",
    "charm",
    "top",
    "bottom",
  ];
  constructor(public color: string, public flavor: string) {
    if (!Quark.validColors.includes(color)) {
      throw new Error(
        `Invalid color: ${color}. Valid colors are ${Quark.validColors.join(
          ", "
        )}`
      );
    }
    if (!Quark.validFlavors.includes(flavor)) {
      throw new Error(
        `Invalid flavor: ${flavor}. Valid flavors are ${Quark.validFlavors.join(
          ", "
        )}`
      );
    }
  }
  interact(quark: Quark) {
    [this.color, quark.color] = [quark.color, this.color];
  }
}
