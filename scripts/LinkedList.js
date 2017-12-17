import Node from './Node';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  length() {
    var current = this.head;
    var count = 0;

    while (current !== null) {
      count++
      current = current.next;
    }
    return count;
  }

  // add to the front of the list
  unshift(data) {

    var node = new Node(data, this.head);

    this.head = node;
    this.length += 1;
  }

  shift() {

  }

  push() {

  }

  pop() {
   
  }
}

var list = new LinkedList();
