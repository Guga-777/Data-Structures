class DoublyNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  delete(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current.prev) current.prev.next = current.next;
        else this.head = current.next;
        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev;
        break;
      }
      current = current.next;
    }
  }
  print() {
    let current = this.head;
    let output = "Doubly List: ";
    while (current) {
      output += current.value + " ";
      current = current.next;
    }
    console.log(output.trim());
  }
}

const doublyList = new DoublyLinkedList();
doublyList.append(5);
doublyList.append(10);
doublyList.append(15);
doublyList.print();      
doublyList.delete(10);
doublyList.print();       
