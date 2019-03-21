// Directions 

// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and
// 'peek'.

// For a reminder on what each method does, look back at 
// the Queue excercise.

// Examples

// const q = new Queue();
// q.add(1);
// q.add(2);
// q.peek();
// q.remove();
// q.remove();

const Stack = require('./stack');

class Queue {
    constructor(){  
        this.inbox = new Stack();
        this.outbox = new Stack();
    }

    add(item){
        this.inbox.data.push(item);
    }

    remove(){
        if(this.outbox.data.length === 0){
            if(this.inbox.data.length !== 0){
                this.outbox.data.push(this.inbox.data.pop());
            }
        }
        return this.outbox.data[this.outbox.data.length - 1];
    }

    peek(){
        return this.inbox.data[this.inbox.data.length - 1];
    }
}

const q1 = new Queue();
q1.add(1);
q1.add(2);
q1.add(3);
q1.add(4);
q1.remove();
q1;
