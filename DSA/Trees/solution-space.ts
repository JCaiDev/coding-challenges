function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];

  const map: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const results: string[] = [];
  const path: string[] = [];

  const dfs = (i: number): void => {
    if (i === digits.length) {
      results.push(path.join(""));
      return;
    }

    for (const letter of map[digits[i]]) {
      path.push(letter);
      dfs(i + 1);
      path.pop();
    }
  };
  dfs(0);
  return results;
}
