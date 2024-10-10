class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(val) {
        
    }
}

// const first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

let list = new SinglyLinkedList()
list.push("Hello")
list.push('goodbye!') 