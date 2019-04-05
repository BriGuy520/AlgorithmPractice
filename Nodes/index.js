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

    insertLast(data){
        let addNode = new Node(data);
        let lastNode = this.getLast();
      
      	lastNode.next = addNode;
    }   
  
  	getAt(idx){
      let node = this.head;
      let count = 0;

      while(count < idx){
        count++;
        node = node.next;
      }

      return node;
    }
  
 		removeAt(idx){
     if(idx === null){
      	return; 
     } 
     
     if(idx === 0){
     	this.head = this.head.next;  
     }
      
     if(this.getAt(idx)){
      return this.getAt(idx - 1).next = this.getAt(idx).next;  
     }
    }
  
  	insertAt(data, idx){
      let node = new Node(data);
      if(!this.head){
        return node;
      }
      
      if(this.getAt(idx)){
        	node.next = this.getAt(idx);
      	 this.getAt(idx - 1).next = node;
        	return node;
      } 
    }
}

let list = new LinkedList();
list.insertFirst("Hello");
list.insertFirst(456);
list.insertFirst("Hey John");
list.insertFirst("HEY");
list.getLast();
list.removeFirst();
list.size();
list;
list.removeLast();
list.insertLast(1200);
list.insertLast(555);
list.getAt(1)
list;
list.removeAt();
list;
list.insertAt("Hello", 2);
list;