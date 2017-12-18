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
      count += 1;
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
    let removed = this.head;
    this.length -= 1;
    this.head = this.head.next;
    return removed;
  }

  //  add node to the end of the linked list.
  push(data) {
    let node = new Node(data, null);
    let current = this.head;

    if (this.length === 0) {
      this.head = node;
      this.length += 1;
      return;
    }

    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    this.length += 1;
    return node;
  }

  // remove node from the end of the linked list.
  pop() {
    let current = this.head;
    let previous

    if (!this.head) {
      return null;
    }

    if (this.length === 1) {
      let last = this.head;
      this.head = null;
      this.next = null;
      this.length -= 1;
      return last;
    }

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.length -= 1;
    return current;
  }


  find(data) {
    let foundNode = null;
    let currNode = this.head;

    while (currNode) {
      if (currNode.data === data) {
        foundNode = currNode;
        break;
      } else {
        currNode = currNode.next;
      }
    }
    return foundNode;
  }

  delete(data) {
    
    let currNode = this.head
    let previous;
    
    if (this.head.data === data) {
      this.length -= 1;
      this.head = this.head.next;
      return;
    }

    while (currNode) {
      if (currNode.data !== data) {
        previous = currNode;
        currNode = currNode.next;
      } else {
        this.length -= 1;
        previous.next = currNode.next;
        currNode = null;
      }
    }
  }

  toArray() {
    let output = [];
    let current = this.head;

    while (current !== null) {
      output.push(current.data);
      current = current.next
    }
    return output;
  }
}

