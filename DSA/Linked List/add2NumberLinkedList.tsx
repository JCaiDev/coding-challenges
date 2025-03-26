function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
  let dummy: ListNode = new ListNode();
  let cur: ListNode = dummy;

  let carry: number = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    const v1: number = l1 !== null ? l1.val : 0;
    const v2: number = l2 !== null ? l2.val : 0;

    let sum: number = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    cur.next = new ListNode(sum);

    cur = cur.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next!;
}
