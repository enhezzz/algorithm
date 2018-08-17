/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
        let res = [];
    (function _(node){
        if(!node) return;
        if(node.left)
        arguments.callee(node.left);
        if(node.right)
        arguments.callee(node.right);
        res.push(node.val);
        
       
        
    })(root)
    return res;
};