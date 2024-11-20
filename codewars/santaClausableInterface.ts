interface SantaClausable {
  sayHoHoHo: () => void;
  distributeGifts: () => void;
  goDownTheChimney: () => void;
}

function isSantaClausable(obj: any): boolean {
  const functions: string[] = [
    "sayHoHoHo",
    "distributeGifts",
    "goDownTheChimney",
  ];
  return functions.every((methodName) => typeof obj[methodName] === "function");
}
