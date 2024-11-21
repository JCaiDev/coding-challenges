// add a newMethod to the String class

interface String {
  capitalizeAll(): string;
}

String.prototype.capitalizeAll = function (): string {
  return this.toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
