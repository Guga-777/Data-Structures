class Queue {
  constructor() { this.items = []; }
  enqueue(item) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
  peek() { return this.items[0]; }
  isEmpty() { return this.items.length === 0; }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log("Queue dequeue:", queue.dequeue());