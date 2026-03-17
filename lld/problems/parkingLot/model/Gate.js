// JavaScript doesn’t have true abstract classes, so we enforce it manually.

class Gate {
  constructor(id) {
    if (new.target === Gate) {
      throw new Error('Cannot instantiate abstract class Gate');
    }
    this.id = id;
  }

  getType() {
    throw new Error("Method 'getType()' must be implemented");
  }
}

module.exports = Gate;
