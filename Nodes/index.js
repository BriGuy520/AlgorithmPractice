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
      let existList = this.head;
      
      if(idx === 0){
        this.head = node;
        this.head.next = existList;
        return node;
      }
      
      if(this.getAt(idx).next == null){
      	this.getAt(idx).next = node;
        return node;
      }
      
      if(this.getAt(idx)){
        node.next = this.getAt(idx);
        this.getAt(idx - 1).next = node;
        return node;
   		}
    }
}

function midpoint(list){
	let slow = list.head;
  let fast = list.head;
  
  while(fast.next && fast.next.next){
		slow = slow.next;
    fast = fast.next.next;  
  }
	slow.next = undefined;
  return slow;
}

function circular(list){
    let slow = list.head;
    let fast = list.head;
    
    while(fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
      
      if(slow === fast){
      	return true;  
      }
    }
  	
	return false
  }

  function fromLast(list, n){
    // let count = 0;

    // while(count < n){
    //   list.removeLast();
    //   count++;
    // }
    
    // return list.getLast();

    let fast = list.getAt(n);
    let slow = list.getFirst();

    while(fast.next !== null){
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
  }

let list4 = new LinkedList();
list4.insertFirst(22);
list4.insertLast('a');
list4.insertLast('b');
list4.insertLast('c');
list4.insertLast('d');  
fromLast(list4, 2).data; 

let list2 = new LinkedList();
list2.insertFirst(200);
list2.insertFirst(300);
list2.insertLast(400);
list2.insertLast(500);
list2.insertLast(600);
list2.insertLast(700);
midpoint(list2);

let list3 = new LinkedList();
let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
list3.head = a;
a.next = b;
b.next = c;
list3;
circular(list3);

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
list.insertAt("Hello", 4);
list;