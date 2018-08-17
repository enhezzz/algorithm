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
// var inorderTraversal = function(root) {
//     let res = [];
//     (function _(node){
//         if(!node) return;
//         if(node.left)
//         arguments.callee(node.left);
//         res.push(node.val);
//         if(node.right)
//         arguments.callee(node.right);
       
        
//     })(root)
//     return res;
// };
var inorderTraversal = function(root) {
    let res = [],
        stack = [];
        if(!root) return res;
    function _(root){
        while(root){
            stack.push(root);
            if(root.left){
                root = root.left;
            }else root = null;
        }
    }
    _(root)
    while(stack.length>0){
        let node = stack.pop();
        res.push(node.val);
        if(node.right){
            _(node.right)
        }
    }
    
    return res;
};