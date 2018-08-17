/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let stack = [];
    // let tree = new TreeNode();
    if(!root) return root;
    stack.push(root);
    while(stack.length){
        let node = stack.pop();
        let temp = null;
        if(node.left){
            stack.push(node.left);
        }
        if(node.right){
            stack.push(node.right);
        }
        temp = node.right;
        node.right = node.left;
        node.left = temp;
        
    }
    // (function _(node){
    //     if(node){
    //         stack.push(node);
    //     }else return;
    //     arguments.callee(node.left);
    //     arguments.callee(node.right);
    // })(root);
    return root;
};