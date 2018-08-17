/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function nodeWithLevel(node,level){
    this.node = node;
    this.level = level;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
   
    var res = [];
    var queue = [];
    
    if(root === null) return res;
    queue.push(new  nodeWithLevel(root,0));
    while(queue.length>0){
        let node = queue.shift();
        if(!res[node.level]) res[node.level] = [];
        
        res[node.level].push(node.node.val);
        if(node.node.left)
        queue.push(new nodeWithLevel(node.node.left,node.level+1));
        if(node.node.right)
        queue.push(new nodeWithLevel(node.node.right,node.level+1));
        
    }
    return res;
};