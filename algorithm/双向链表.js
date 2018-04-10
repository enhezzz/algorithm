function Node(ele) {
    this.ele = ele;
    this.prev = null;
    this.next = null;
}
function List() {
    this.headNode = new Node('node');
    this.tailNode = this.headNode;
    this.append = function (ele) {
        let node = new Node(ele)
        node.prev = this.tailNode;
        this.tailNode.next = node;
        this.tailNode = node;
    }
    // this.findLast = function () {

    // }
    this.reverseDisplay = function(){
        let currentNode = this.tailNode;
        while(currentNode){
            console.log(currentNode.ele);
            currentNode = currentNode.prev;
        }
    }
    this.display = function(){
        let currentNode = this.headNode;
        while(currentNode){
            console.log(currentNode.ele);
            currentNode = currentNode.next;
        }
    }
}
let list = new List();
list.append('hello');
list.append('world');
list.display()
list.reverseDisplay()