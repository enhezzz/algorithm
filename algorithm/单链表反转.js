// function Node(ele){
//     this.ele = ele;
//     this.next = null;
// }
// function List(){
//     this.header = new Node('head');
//     this.tailNode = this.header;
//     this.display = function(){
//         let currentNode = this.header;
//         while(currentNode){
//             console.log(currentNode.ele);
//             currentNode = currentNode.next;
//         }
//     }
//     this.reverseList = function(){
//         let node = this.header;
//         let nexter = node.next;
//         let nnexter = nexter.next;
//         let q = nexter;
  
//         if(!nnexter)
//         return;
//         node.next = nnexter;
//         nexter.next = nnexter.next;
//         nnexter.next = nexter;
//         while(nnexter){
//             node.next = nnexter;
          
//             nnexter.next = nexter;
         
        
//         if(!q.next)
//             break;
            
//             nnexter = q.next;
//             q.next = nnexter.next;
//             nexter = node.next;
          
//         }
//     }
//     this.append = function(ele){
//         let newNode = new Node(ele);
//         this.tailNode.next = newNode;
//         this.tailNode = newNode;
//     }
// }
// let list = new List();
// list.append('today');
// list.append('is');
// list.append('nice');
// list.append('nice');
// list.display();
// list.reverseList();
// list.display()



function Node(ele){
    this.ele = ele;
    this.next = null;
}
function List(){
    this.header = new Node('head');
    this.tailNode = this.header;
    this.arr = [];
    this.display = function(){
        let currentNode = this.header;
        while(currentNode){
            console.log(currentNode.ele);
            currentNode = currentNode.next;
        }
    }
  
    this.append = function(ele){
        let node = new Node(ele);
        this.arr.push(node);
        let newNode = this.arr[this.arr.length-1];
        this.tailNode.next = newNode;
        this.tailNode = newNode;
    }
    this.reverseList = function(){
        this.arr.reverse();
        
        let currentNode = this.header;
        let length = this.arr.length;
        this.arr[length-1].next = null;
        for(let i = 0;i<length;i++){
            // console.log(i)
            currentNode.next = this.arr[i];
            currentNode = currentNode.next;
        }
    }
}
let list = new List();
list.append('today');
list.append('is');
list.append('nice');
list.append('nice');
list.display();
list.reverseList();
list.display()

