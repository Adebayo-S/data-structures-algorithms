
// check if the tree includes the targed value


// breadth first search
const treeIncludes = (root, target) => {
    if (!root) return false;

    const queue = [ root ];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val == target) return true;

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return false;
};


// recursive depth first search
const treeIncludesRec = (root, target) => {
    if (!root) return false;
    if (root.val == target) return true;
    return treeIncludesRec(root.left, target) || treeIncludesRec(root.right, target);
}
