class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
  }
  hash(key) {
    let total = 0;
    for (let char of key) total += char.charCodeAt(0);
    return total % this.table.length;
  }
  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) this.table[index] = [];
    const bucket = this.table[index];
    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let [k, v] of bucket) {
        if (k === key) return v;
      }
    }
    return undefined;
  }
  delete(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
}

const hashTable = new HashTable();
hashTable.set("name", "Nika");
console.log("Hash get name:", hashTable.get("name")); 
hashTable.delete("name");
console.log("Hash get after delete:", hashTable.get("name"));