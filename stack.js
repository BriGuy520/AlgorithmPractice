// setting object methods using the prototype

const Stack = () => {
    this.data = [];
}

Stack.prototype.push = (item) => {
    this.data.push();
}

Stack.prototype.pop = () => {
    return this.data.pop();
}

Stack.prototype.peek = () => {
    return this.data[this.data.length - 1];
}

const s1 = new Stack();
s1.push(1);
s1.push(2);
s1;
s1.pop();
s1;
s1.push(4);
s1.push('hello');
s1;
s1.peek()


// using class to set methods

class Stacking {
    constructor(){
        this.data = [];
    }

    push(item){
        this.data.push(item);
    }

    pop(){
        return this.data.pop();
    }

    peek(){
        return this.data[this.data.length - 1];
    }
}

const s2 = new Stacking();
s2.push(8);
s2.push(11);
s2.push('I love you');
s2;
s2.pop();
s2;
s2.peek();