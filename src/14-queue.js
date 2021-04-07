const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.list = [];
  }

  get size() {
    if (this.head == null) return 0;
    let length = 0;
    let curr = this.head;
    while (curr !== null) {
      length++;
      curr = curr.next;
    }
    return length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.list.push(element);
  }

  dequeue() {
    if (this.head == null) return null;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return this.list.shift();
  }
}

module.exports = Queue;
