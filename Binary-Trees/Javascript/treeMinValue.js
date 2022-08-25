// get the minimum value in a tree

// DFS O(n)
const treeMinValue = (root) => {
    let smallest = Infinity;
    const stack = [ root ];
    while (stack.length > 0) {
        const current = stack.pop();
        if (current.val < smallest) smallest = current.val;

        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }

    return smallest;
}

//BFS O(n^2) because the shift operation in JS is O(n)
const treeMinVal = (root) => {
    let smallest = Infinity;
    const queue = [ root ];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val < smallest) smallest = current.val;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return smallest;
}

//recursive solution
const treeMinValR = (root) => {
    if (!root) return Infinity;
    const leftMin = treeMinValR(root.left);
    const rightMin = treeMinValR(root.right);
    return Math.min(root.val, leftMin, rightMin);
};
