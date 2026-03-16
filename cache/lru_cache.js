class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.tail.prev = this.head;
    this.head.next = this.tail;
  }

  #add(node) {
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  #remove(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }

  get(key) {
    // if not present
    if (!this.cache.get(key)) return -1;

    // if present
    // means its not MRU
    // so remove from its postion and insert at start of DLL

    // remove first from any position
    let getNode = this.cache.get(key);
    this.#remove(getNode);

    // move it to front MRU
    this.#add(getNode);

    // return value
    return getNode.value;
  }

  put(key, value) {
    // if exist delete
    if (this.cache.get(key)) {
      this.#remove(this.cache.get(key));
    }
    // create node and update cache and DLL
    let node = new Node(key, value);
    // update cache
    this.cache.set(key, node);
    // update DLL
    this.#add(node);

    // then check capacity
    if (this.cache.size > this.capacity) {
      let lru = this.tail.prev;
      this.#remove(lru);
      this.cache.delete(lru.key);
    }
  }
}

let lruCache = new LRUCache(3);
console.log(lruCache.get(1));
lruCache.put(1, 20);
lruCache.put(2, 1000);
lruCache.get(1);
lruCache.put(100, 32323);
lruCache.get(2);
lruCache.put(4, 400);
console.log(lruCache);

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.tail.prev = this.head;
    this.head.next = this.tail;
    this.cache = new Map();
  }
  #add(node) {
    node.next = this.head.next;
    this.head.next.prev = node;
    node.prev = this.head;
    this.head.next = node;
  }

  #remove(node) {
    // remove from list
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  get(key) {
    if (!this.cache.get(key)) return -1;

    let node = this.cache.get(key);
    this.#remove(node);
    this.#add(node);

    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // remove prev valye from list if same key already exist
      this.#remove(this.cache.get(key));
    }
    let node = new Node(key, value);
    this.cache.set(key, node);
    this.#add(node);

    if (this.cache.size > this.capacity) {
      const removeNode = this.tail.prev;
      this.#remove(removeNode);
      this.cache.delete(removeNode.key);
    }
  }
}

let ans = new LRUCache(3);
console.log(ans.get(1));
ans.put(1, 200);
ans.put(2, 1000);
console.log(ans.get(1));
ans.put(3, 108700);
ans.put(2, 'ten');
ans.put(5000, 'ej');
console.log(ans);
