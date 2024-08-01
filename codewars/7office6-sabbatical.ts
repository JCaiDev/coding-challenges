function sabb(s: string, val: number, happiness: number): string {
  return (s.match(/[sabbatical]/gi) || []).length + val + happiness > 22
    ? "Sabbatical! Boom!"
    : "Back to your desk, boy.";
}
