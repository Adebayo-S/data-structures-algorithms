// sum the values in the tree

//BFS tree sum
const treeSum = (root) => {
    if (!root) return 0;
    let total = 0;
    const queue = [ root ];

    while (queue.length > 0) {
        const current = queue.shift();
        total += current.val;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return total;
}

// DFS recursion tree sum
const treeSumRec = (root) => {
    if (!root) return 0;
    return root.val + treeSumRec(root.left) + treeSumRec(root.right);
}

