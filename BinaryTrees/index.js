class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();
      if (!current.left) {
        current.left = newNode;
        break;
      } else queue.push(current.left);
      if (!current.right) {
        current.right = newNode;
        break;
      } else queue.push(current.right);
    }
  }
  
}

const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
console.log("Tree in-order:", tree.inOrder().join(" "));  // 2 1 3

