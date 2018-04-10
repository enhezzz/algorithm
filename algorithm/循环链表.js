function Node(ele){
    this.ele = ele;
    this.next = null;
}
function List(){
    this.head = new Node('head');
    this.tail = this.head;
    
    this.append = function(ele){
        let newNode = new Node(ele);
        this.tail.next = newNode;
        this.tail = newNode;
        newNode.next = this.head;
    }
    this.display = function () {
        let currentNode = this.head;
        while(currentNode&&currentNode.next.ele != "head"){
            console.log(currentNode.next.ele)
            currentNode = currentNode.next;
            
            
        }
      }
}
let list = new List();
list.append('i\'m');
list.append('comming');
list.display()