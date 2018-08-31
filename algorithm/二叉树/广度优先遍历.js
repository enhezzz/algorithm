function nodeWithLevel(TreeNode,level){
    this.treeNode = TreeNode;
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
    
    queue.push(new nodeWithLevel(root,0))
    
    while(queue.length>0){
        var frond = queue[0];
        var level = frond.level;
        
        if(level===res.length){
            res[level] = []
        }
        
        res[level].push(frond.treeNode.val);
        
        if(frond.treeNode.left){
            queue.push(new nodeWithLevel(frond.treeNode.left,level+1))
        }
        if(frond.treeNode.right){
            queue.push(new nodeWithLevel(frond.treeNode.right,level+1))
        }
        
        queue.shift();
    }
    
    return res;
      
};
console.log(levelOrder([3,9,20,null,null,15,7]))