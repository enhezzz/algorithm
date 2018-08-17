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
// var minDepth = function(root) {
//     if(!root) return 0;
//     let res = [];
//     let queue = [];
    
//     queue.push(new nodeWithLevel(root,1));
//     while(queue.length){
//         let node = queue.shift();
//         res.push(node);
//         if(node.node.left){
//             queue.push(new nodeWithLevel(node.node.left,node.level+1))
//         }
//         if(node.node.right){
//             queue.push(new nodeWithLevel(node.node.right,node.level+1))
//         }
//     }
//     res = res.filter(function(e){
//         return !e.node.left && !e.node.right 
//     })
//     let minDepth = res[0].level;
//     res.forEach(e=>{
//         if(e.level<minDepth) minDepth = e.level;
//     })

//     return minDepth;
// };

var minDepth = function(root) {

   if(!root) return 0;

   let leftMinDepth = minDepth(root.left);
   let rightMinDepth = minDepth(root.right);
   if(rightMinDepth == 0 || leftMinDepth == 0) return leftMinDepth+rightMinDepth+1;
   return Math.min(leftMinDepth,rightMinDepth)+1;

};