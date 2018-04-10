function Node(ele){
    this.ele = ele;
    this.next = null;
}
function linkedList(){
    this.headNode = new Node('head');
    this.currentNode = this.headNode;
    this.append = function(ele){
        let node = new Node(ele)
        this.currentNode.next = node;
        this.currentNode = node;
    }
    this.find = function(item){
        let node = this.headNode;
        while(node){
            if(node.ele === item)
            return node;
            node = node.next;
        }
        return null;
    }
    this.insert = function(ele,item){
        let prevNode = this.find(item);
        let newNode = new Node(ele);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
    }
    this.findPrevious = function (item) {
        let currentNode = this.find(item);
        let node = this.headNode;
        while(node){
            if(node.next == currentNode)
            return node;
            node = node.next;
            
        }
      }
    this.displayAll = function(){
        let node = this.headNode;
        while(node){
            console.log(node.ele);
            node = node.next;
        }
    }
}
let list = new linkedList();
list.append('hello')
list.append('world')
console.log(list.find('hello'))
list.displayAll()
