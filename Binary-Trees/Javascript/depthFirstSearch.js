

const depthFirstValues = (root) => {
    if (!root) return [];

    const result = [];
    const stack = [ root ];

    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
    return result;
};

// using recursion
const depthFirstRec = (root) => {
    if (root == null) return [];
    const leftValues = depthFirstRec(root.left); // [b, d, e]
    const rightValues = depthFirstRec(root.right); // [c, f]
    return [ root.val, ...leftValues, ...rightValues ];
}
