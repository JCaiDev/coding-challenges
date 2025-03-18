const removeNthfromEndBruteForce = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  if (!head) return null;
  let cur: ListNode | null = head;
  const nodes: ListNode[] = [];
  while (cur) {
    nodes.push(cur);
    cur = cur.next;
  }

  const removeIndex = nodes.length - n;
  if (removeIndex === 0) {
    return head.next;
  }

  nodes[removeIndex - 1].next = nodes[removeIndex].next;
  return head;
};

const removeNthFromEnd = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  if (!head) return null;
  let dummy: ListNode = new ListNode(0, head);
  let left: ListNode = dummy;
  let right: ListNode | null = head;
  for (let i = 0; i < n; i++) {
    if (right) right = right.next;
  }

  while (right !== null) {
    left = left.next!;
    right = right.next;
  }

  left.next = left.next?.next || null;
  return dummy.next;
};
