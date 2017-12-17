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

  // remove node from the front of the linked list.
  shift() {

    if (this.length === 0) {
      return null;
    }
    this.length -= 1;
    return this.head = this.head.next;
  }

  //  add node to the end of the linked list.
  push(data) {
    var node = new Node(data, null);
    var current = this.head;

    if (this.length === 0) {
      this.head = node;
      this.length += 1;
      return;
    }

    while (current.next !==  null) {
      current = current.next;
    }
    current.next = node;
    this.length += 1;
  }

  // remove node from the end of the linked list.
  pop() {
    var current = this.head;

    if (this.length === 0) {
      return null;
    }

    while (current.next !==  null) {
      current = current.next;
    }
    current.next = null;
    this.length -= 1;
  }
}

