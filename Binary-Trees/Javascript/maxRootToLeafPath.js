
const maxPathSum = (root) => {
    if (!root) return -Infinity;
    if (!root.left && !root.right) return root.val;
    const maxChildPathSum = Math.max(
        maxPathSum(root.left),
        maxPathSum(root.right)
    )

    return root.val + maxChildPathSum;
}
