function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let second: ListNode | null = slow?.next ?? null;
  if (slow) slow.next = null;
  let prev: ListNode | null = null;

  while (second !== null) {
    const tmp: ListNode | null = second.next;
    second.next = prev;
    prev = second;
    second = tmp;
  }

  let first: ListNode | null = head;
  second = prev;

  while (second !== null && first !== null) {
    const tmp1: ListNode | null = first.next;
    const tmp2: ListNode | null = second.next;
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
}
