/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let list = l;
  while (list.value === k) {
    list = list.next;
  }
  const head = list;
  let curr = head;
  while (curr.next !== null) {
    if (curr.next.value === k) {
      while (curr.next.value === k) {
        curr.next = curr.next.next;
      }
    }
    curr = curr.next;
  }
  return head;
}

module.exports = removeKFromList;
// class node {}
// let a = node
// a.value = 3
// let b = node
// b.value = 4
// a.next = b

// console.log(a)
