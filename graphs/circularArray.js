class Graph {
  constructor() {
    this.list = new Map();
  }

  createAdjacency(nums) {
    for (let i = 0; i < nums.length; i++) {
      let sum = i + nums[i];
      if (sum < 0) {
        sum = nums.length + sum;
      } else if (sum >= nums.length) {
        sum = sum - nums.length;
      }
      this.list.set(i, new Set([sum]));
    }
    return this.list;
  }

  circularArrayLoop(nums) {
    let visited = new Map();
    let dfsCall = new Map();
    for (let node of this.list.keys()) {
      visited.set(node, false);
      dfsCall.set(node, false);
    }
    for (let node of this.list.keys()) {
      if (!visited.get(node) && this.hasCycle(node, visited, dfsCall, nums)) {
        return true;
      }
    }
    return false;
  }
  hasCycle(startNode, visited, dfsCall, nums) {
    visited.set(startNode, true);
    dfsCall.set(startNode, true);
    for (let neighbour of this.list.get(startNode)) {
      if (dfsCall.get(neighbour)) {
        let c = 0;
        for (let [key, value] of dfsCall) {
          if (dfsCall.get(key)) {
            c++;
          }
        }
        if (c < 2) {
          return false;
        } else {
          let temp = [],
            isAllVsisted = true;
          for (let [key, value] of dfsCall) {
            if (dfsCall.get(key)) {
              temp.push(nums[key]);
            }
            if (!visited.get(key)) {
              isAllVsisted = false;
            }
          }

          if (
            isAllVsisted &&
            (temp.every((data) => data > 0) || temp.every((data) => data > 0))
          ) {
            return true;
          } else if (
            temp.every((data) => data > 0) ||
            temp.every((data) => data > 0)
          ) {
            return true;
          } else {
            return;
          }
        }
      } else if (
        !visited.get(neighbour) &&
        this.hasCycle(neighbour, visited, dfsCall, nums)
      ) {
        return true;
      }
    }
    dfsCall.set(startNode, false);
    return false;
  }
}

// let garph1 = new Graph();
// console.log(garph1.createAdjacency([2, -1, 1, 2, 2]));
// console.log(garph1.circularArrayLoop([2, -1, 1, 2, 2]));
// let garph2 = new Graph();
// console.log(garph2.createAdjacency([-1, -2, -3, -4, -5, 6]));
// console.log(garph2.circularArrayLoop([-1, -2, -3, -4, -5, 6]));
let garph3 = new Graph();
console.log(garph3.createAdjacency([1, -1, 5, 1, 4]));
console.log(garph3.circularArrayLoop([1, -1, 5, 1, 4]));
let graph4 = new Graph();
// graph4.createAdjacency([-1, -2, -3, -4, -5]);
// console.log(graph4.circularArrayLoop([-1, -2, -3, -4, -5]));
