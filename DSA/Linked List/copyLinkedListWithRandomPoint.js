const copyRandomList2Pass = (head) => {
  if (!head) return null;
  const oldToCopy = new Map();
  oldToCopy.set(null, null);

  let cur = head;
  while (cur) {
    const copy = new Node(cur.val);
    oldToCopy.set(cur, copy);
    cur = cur.next;
  }

  cur = head;
  while (cur) {
    const copy = oldToCopy.get(cur);
    copy.next = oldToCopy.get(cur.next) || null;
    copy.random = oldToCopy.get(cur.random) | null;
    cur = cur.next;
  }

  return oldToCopy.get(head);
};

const copyLinkedList = (head) => {
  if (!head) return null;
  let cur = head;
  while (cur) {
    let copy = new Node(cur.val);
    copy.next = cur.next;
    cur.next = copy;
    cur = copy.next;
  }
  cur = head;
  while (cur) {
    if (cur.random) {
      cur.next.random = cur.random.next;
    }
    cur = cur.next.next;
  }

  let dummy = new Node(0);
  let copyList = dummy;
  cur = head;
  while (cur) {
    copyList.next = cur.next;
    cur.next = cur.next.next;
    cur = cur.next;
    copyList = copyList.next;
  }

  return dummy.next;
};
