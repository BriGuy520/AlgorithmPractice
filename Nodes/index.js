class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        let currentNode = new Node(data, this.head);
       	this.head = currentNode;
    }

    size(){
        let count = 0;
        let node = this.head;
        while(node !== null){
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return null;
        }

        let node = this.head;
        while(node !== null){
           if(node.next === null){
             return node;
           } else {
             node = node.next;
           }
        }
    } 

    clear(){
    	this.head = null;
    }

    removeFirst(){
        if(!this.head){
            return null;
        }
      
      	this.head = this.head.next;
    }

    removeLast(){

        let currentNode = this.head;
        let nextNode = this.head.next;
          
        if(!this.head){
            return;
        }
      
      	if(currentNode.next === null){
              currentNode = null;
          }
      
      	while(currentNode !== null){
        	if(nextNode.next === null){
            currentNode.next = null;
            return currentNode;
          } else {
            currentNode = currentNode.next;
            nextNode = nextNode.next;
          }
        }
    }

    // Better Solution. Most Optimal.

    insertLast(data){
        let addNode = new Node(data);
        let lastNode = this.getLast();
      
      	lastNode.next = addNode;
    }    

    // Alternate Solution.

    // insertLast(data){
    //     let addNode = new Node(data);
    //     let existList = this.head;

    //     if(!this.head){
    //         return;
    //     }

    //     while(existList !== null){
    //         if(existList.next === null){
    //           	existList.next = addNode;
    //             return existList;
    //         } else {
    //             existList = existList.next;
    //         }
    //     }
    // }    

}

let list = new LinkedList();
list.insertFirst("Hello");
list.insertFirst(456);
list.insertFirst("Hey John");
list.getLast();
list.removeFirst();
list.size();
list;
list.removeLast();
list;
list.insertLast(1200);
list;