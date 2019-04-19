// Directions

// 1) Create a node class. The constructor 
// should accept an argument that gets assigned
// to the data property and initialize an 
// empty array for storing children. The node 
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.

class Node {
  constructor(data){
    this.data = data;
    this.children = [];
  }

  add(data){
    let node = new Node(data);
    this.children.push(node);
  }

  remove(data){
      this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  traverseBF(func){
    if(!this.root) return;
    let arr = [];
    arr.push(this.root);
    while(arr.length !== 0){
     const node = arr.shift();
     arr.push(...node.children);
     func(node);
    }
 }

 traverseDF(func){
   let arr = [this.root];

   while(arr.length !== 0){
     const node = arr.shift();
     arr.unshift(...node.children);
     func(node);
   }
 }
}

//  Level Width
// Given the root node of a tree, return an
// array where each element is the width
// of the tree at each level.

// Example

// Given 
//        0
//      / | \
//      1 2 3
//      |   |
//      4   5

// Answer: [1,3,2]

function levelWidth(root){
  
}

let node = new Node("CEO");
let tree = new Tree();
tree.root = node;

