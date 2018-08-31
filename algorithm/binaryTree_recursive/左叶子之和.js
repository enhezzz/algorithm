/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root,isLeft) {
    if(root && !root.left && !root.right) return 0;
    return (function(root,isLeft){
        if(!root) return 0; 
        if(!root.left && !root.right && isLeft) return root.val;
        return arguments.callee(root.left,true)+arguments.callee(root.right,false);
    })(root,true)
   
};