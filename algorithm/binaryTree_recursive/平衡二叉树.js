/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function height(treeNode){
    if(!tree) return 0;
    return Math.max(height(treeNode.left),height(treeNode.right))+1;
}
var isBalanced = function(root) {
    if(!root) return true;
    let heightGap = Math.abs(height(root.left) - height(root.right));
    return heightGap <= 1;
};