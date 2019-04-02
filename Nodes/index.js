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
}

let list = new LinkedList();
list.insertFirst("Hello");
list.insertFirst(456);
list.insertFirst("Hey John");
list.getLast();
list.clear();
list.size();