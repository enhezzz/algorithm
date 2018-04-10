class Node {
    constructor(val, lNode, rNode) {
        this.val = val;
        this.lNode = lNode;
        this.rNode = rNode;
        this.lLength = 0;
        this.rLength = 0;
    }
}
nMaxLen = 0;
function findMaxLength(node) {
    if (node == null)
        return 0;
    if (node.lNode == null)
        node.lLength = 0;
    if (node.rNode == null) {
        node.rLength = 0;
    }
    if (node.lNode != null) {
        findMaxLength(node.lNode);

    }
    if (node.rNode != null) {
        findMaxLength(node.rNode);
    }
    if (node.lNode != null) {
        if (node.lNode.lLength > node.lNode.rLength) {
            node.lLength = node.lNode.lLength + 1;
        } else {
            node.lLength = node.lNode.rLength + 1;
        }
    }
    if (node.rNode != null) {
        if (node.rNode.lLength > node.lNode.rLength) {
            node.rLength = node.rNode.lLength + 1;
        } else {
            node.rLength = node.rNode.rLength + 1;
        }
    }
    if (node.lLength + node.rLength > nMaxLen) {
        nMaxLen = node.lLength + node.rLength;
    }

    // return lLength+rLength;
}
let a = new Node('a', null, null)
let b = new Node('b', null, null)
let node = new Node('node', a, b)
console.log(node)
findMaxLength(node)
console.log(node, nMaxLen)