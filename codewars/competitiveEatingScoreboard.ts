function scoreboard(
  whoAteWhat: {
    name: string;
    chickenwings: number;
    burgers: number;
    hotdogs: number;
  }[]
): { name: string; score: number }[] {
  return whoAteWhat
    .map((obj) => ({
      name: obj.name,
      score: obj.chickenwings * 5 + obj.burgers * 3 + obj.hotdogs * 2,
    }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}
