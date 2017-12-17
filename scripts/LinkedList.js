import Node from './Node';

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  //add to the front of the list
  unshift(data) {
    
    var node = new Node(data);
    this.length += 1;
    this.next = ;
  }

  shift() {

  }

  push() {

  }

  pop() {
   
  }
}
