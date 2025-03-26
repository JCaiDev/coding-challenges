class ListNode {
  val: number;
  next: ListNode | null = null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current) {
    let temp: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
}
