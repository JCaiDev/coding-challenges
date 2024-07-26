function convertHashtoAnArray(hash: { [key: string]: any }): [string, any][] {
  return Object.entries(hash);
}
