function maxDepthIterativeDFS(root) {
  const stack = [[root, 1]];
  let res = 0;

  while (stack > 0) {
    //[[2, 2], [4,3]]
    const current = stack.pop();
    const node = current[0]; // [root, 1]
    const depth = current[1];

    if (node !== null) {
      res = Math.max(res, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }
  return res;
}
