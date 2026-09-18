function diameterOfBinaryTree(root) {
  let d = 0;
  function dfs(node) {
    if (!node) return 0;

    const leftHeight = dfs(node.left);
    const rightHeight = dfs(node.right);

    d = Math.max(d, leftHeight + rightHeight);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  dfs(root);
  return d;
}
