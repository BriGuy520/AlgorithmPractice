function Node(value, next = null){

  this.value = value;
  this.next = next;

}


let linkOne = new Node(Math.max(29, 28));
let linkTwo = new Node(Math.max(50, 29));
linkOne.next = linkTwo;



while(linkOne.next){

  linkOne = linkOne.next;
}

console.log(linkOne);

linkOne.next = new Node(Math.max(32));

console.log(linkOne);


