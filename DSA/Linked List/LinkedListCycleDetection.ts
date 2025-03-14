function hasCycleHashSet(head: ListNode | null): boolean {
  let seen = new Set<ListNode>();
  let cur = head;
  while (cur) {
    if (seen.has(cur)) {
      return true;
    }
    seen.add(cur);
    cur = cur.next;
  }
  return false;
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
