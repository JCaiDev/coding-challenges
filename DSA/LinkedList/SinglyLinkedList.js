class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  print() {
    let current = this.head;
    const array = [];
    while (current) {
      array.push(current.val);
      current = current.next;
    }
    return array;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    console.log("new tail:", newTail);

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    console.log("length:", this.length);

    console.log("current:", current);
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = prev.next.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head;

    let prev = null;
    let next = null;

    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    this.tail = this.head;
    this.head = prev;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("A");
list.push("B");
list.push("C");
list.push("D");
list.push("C:");
list.push("UwU");
list.push("Z");
