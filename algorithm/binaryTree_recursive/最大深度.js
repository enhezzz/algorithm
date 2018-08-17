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

// function nodeWithLevel(node,level){
//     this.node = node;
//     this.level = level;
// }
// var maxDepth = function(root) {
//     if(!root) return 0;
//     let res = [];
//     let queue = [];
//     queue.push(new nodeWithLevel(root,0));
//     while(queue.length){
//         let node = queue.shift();
//         res[node.level] = "";
//         if(node.node.left){
//             queue.push(new nodeWithLevel(node.node.left,node.level+1))
//         }
//         if(node.node.right){
//             queue.push(new nodeWithLevel(node.node.right,node.level+1))
//         }
//     }
//     return res.length;
// };

var maxDepth = function(root) {
    if(!root) return 0;
    let maxLeftDepth = maxDepth(root.left);
    let maxRightDepth = maxDepth(root.right);
    return Math.max(maxLeftDepth,maxRightDepth)+1;
}