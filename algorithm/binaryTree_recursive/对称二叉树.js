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
var isSymmetric = function(root) {
    if(!root) return true;
    let queue1 = [],
        queue2 = [];
    queue1.push(root.left?root.left.val:root.left);
    queue2.push(root.right?root.right.val:root.left);
    function _(node,queue,isReverse){
        if(node){
        if(!isReverse){
            queue.push(node.left?node.left.val:node.left);
            queue.push(node.right?node.right.val:node.right);
            if(node.left)
            arguments.callee(node.left,queue,false);
            if(node.right)
            arguments.callee(node.right,queue,false);
        }else{
            queue.push(node.right?node.right.val:node.right);
            queue.push(node.left?node.left.val:node.left);
            if(node.right)
            arguments.callee(node.right,queue,true);
            if(node.left)
            arguments.callee(node.left,queue,true);
        }
    }else return;
      
    //    _(root.right)
    }
    _(root.left,queue1,true)
    _(root.right,queue2,false)
    return queue1.every((e,index)=>{
        return e == queue2[index]
    })
    // return [queue1,queue2]

    
};