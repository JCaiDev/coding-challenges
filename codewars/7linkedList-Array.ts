interface ListNode {
  value: any;
  next: ListNode | null;
}

function listToArray(list: ListNode | null): any[] {
  let array: any[] = [];
  for (let node = list; node; node = node.next) {
    array.push(node.value);
  }

  return array;
}
