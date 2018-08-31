/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let arr = [];
    function _(head){
        if(head) arr.push(head);
        else return null;
        arguments.callee(head.next)
    }
    _(head);
    if(n==1){
        if(arr[arr.length-1-1]){
            arr[arr.length-1-1].next = null;
            return arr[0];
        }else{
            return null;
        }
    }
    if(n == arr.length){
        if(arr[1]){
            return arr[1];
        }else{
            return null;
        }
    }
    arr[arr.length-1-n].next = arr[arr.length-1-n+1].next;
    return arr[0];
};