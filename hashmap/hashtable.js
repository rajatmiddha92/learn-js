//
// Although JavaScript already has two Hash Table implementations, writing your own Hash Table implementation is one of the most common JavaScript interview questions.

// You can implement a Hash Table in JavaScript in three steps:

// Create a Hastableable class with table and size initial properties
// Add a hash() function to transform keys into indices
// Add the set() and get() methods for adding and retrieving key/value pairs from the table.

class Hastableable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }
  //How to write the hash() method
  // Next, you need to create the hash() method that will accept a key value and transform it into an index.

  // A simple way to create the hash would be to sum the ASCII code of the characters in the key using the charCodeAt() method as follows. Note that the method is named using _ to indicate that it's a private method:

  //_ so you can access it directly
  // but don't want it to use it
  // it is for developer understanding to do not access it
  // outside class if you want it no boby should
  // use it outside the class define with #
  // #hash
  _hash(string) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      // ascii value
      hash += string.charCodeAt(i);
    }

    //But since the Hastableable class only has 127 buckets, this means that the _hash() method must return a number between 0 and 127.

    // To ensure that the hash value doesn't exceed the bucket size, you need to use the modulo operator

    return hash % this.table.length;
  }

  //Now that you have the _hash() method completed, it's time to write the set() and get() methods.

  // normal
  //   set(key, value) {
  //     let index = this._hash(key);
  //     this.table[index] = [key, value];
  //     this.size++;
  //   }

  //How to Handle Index Collision
  // Sometimes, the hash function in a Hash Table may return the same index number. In the test case above, the string "Spain" and "ǻ" both return the same hash value because the number 507 is the sum of both of their ASCII code.

  // The same hash value will cause the index to collide, overwriting the previous entry with the new one.
  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        // Find the key/value pair in the chain
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      // not found, push a new key/value pair
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  //   get(key) {
  //     let index = this._hash(key);
  //     return this.table[index];
  //   }
  get(key) {
    let index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] == key) {
          return this.table[index][i];
        }
      }
    }
    return undefined;
  }

  //   delete(key) {
  //     let index = this._hash(key);
  //     if (this.table[index]) {
  //       delete this.table[index];
  //       this.size--;
  //       return true;
  //     }
  //     return false;
  //   }
  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }
}

let table = new Hastableable();
// console.log(table._hash("Spain"));
// console.log(table._hash("Spain"));
// console.log(table.set("Spain", "some"));
// console.log(table.set("Spain", "jii"));
// console.log(JSON.stringify(table));
table.set("Spain", "middha");
table.set("ǻ", "ajat");
table.set("ǻ", "some");

// console.log(table._hash("Spain"));
// console.log(table._hash("ǻ"));
// console.log(table.get("Spain")); // [ 'ǻ', 192 ]
// console.log(table.get("ǻ")); // [ 'ǻ', 192 ]
// console.log(JSON.stringify(table));
console.log(table.get("ǻ"));
