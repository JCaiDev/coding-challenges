function reverse(str: string) {
  let arr: string[] = str.split(" ");

  for (let i = 1; i < arr.length; i += 2) {
    arr[i] = arr[i].split("").reverse().join("");
  }

  return arr.join(" ").trim();
}
