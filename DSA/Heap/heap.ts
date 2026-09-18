class PriorityQueue {
  values: number[];
  constructor() {
    this.values = [];
  }
  enqueue(value: number, priority: number) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      // Removed console.log for cleaner production code.
      // console.log(parentIndex);
      let parent = this.values[parentIndex];
      if (element.priority <= parent.priority) break;

      // Use array destructuring for a more concise swap
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];

      // Move the pointer up to the new home
      index = parentIndex;
    }
  }
  dequeue(): number | undefined {
    // Explicitly declare return type
    if (this.values.length === 0) {
      return undefined; // Handle empty heap gracefully
    }

    const max = this.values[0];

    // If there's only one element, just remove it and return
    if (this.values.length === 1) {
      this.values.pop();
      return max;
    }

    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end!;
      this.sinkDown();
    }

    return max; // Always return the extracted max value
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swapIndex: number | null = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          // If right child is greater than the current element, AND
          // (either no left child was chosen for swap, OR right child is greater than the left child)
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        // No child is larger than the current element, so it's in its correct place
        break;
      }

      // Perform the swap using array destructuring
      [this.values[index], this.values[swapIndex]] = [
        this.values[swapIndex],
        this.values[index],
      ];
      index = swapIndex; // Move down to the swapped position
    }
  }
}

class Node {
  constructor(value: number, priority: number) {
    this.value = value;
    this.priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
ER.enqueue("chest pain", 1);
ER.enqueue("headache", 5);

console.log(ER.dequeue());
