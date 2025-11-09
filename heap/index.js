// what is heap?

// heap is a Complete Binary Tree that comes with a heap order property

//Binary Tree
//Binary Tree is a non linear Data Structure where each node can have atmost 2 children

//Complete Binary Tree
// A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible
//in other words, every level is completely filled except last level
//nodes always added from the left (node always lean forwards the left)

//heap order priority
//at every node the children node will be allways greater than parent
// min-heap property

//at evrey node the children node will be allways lesser than parent
// max-heap property

//heap important properties

//ex of max-heap tree
//       70
//      /  \
//     60   50
//    / \
//   40  30
//
let heapArr = new Array(6);
heapArr[1] = 70;
heapArr[2] = 60;
heapArr[3] = 50;
heapArr[4] = 40;
heapArr[5] = 30;
// console.log(heapArr);
//we will keep element from 1st position
// heapArr=[ <1 empty item>, 70, 60, 50, 40, 30 ]
// indexes                    1   2   3   4   5
// find left child of any node formula - 2*i
// find right child of any node formula - 2*i+1
// find parent node formula - (i/2)
// i refers to index of node

class Heap {
  constructor() {
    this.heap = new Array(100);
    this.size = 0;
  }

  //algo

  // insert at last index just like push at end of array
  // compare it value with its parent
  // if parent is small swap
  // repeat propcess until parent value is not bigger
  // else exit looop
  //
  insertAtHeap(value) {
    let index = ++this.size;
    this.heap[index] = value;

    let parent = Math.floor(index / 2);

    while (parent > 0 && this.heap[parent] < this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];
      index = parent;
      parent = Math.floor(parent / 2);
    }
  }

  //delete from heap means
  //delete the highest priority element from heap which is root

  //algo to delete from heap
  // copy the last element to root
  // delete the last element
  // propogate root element to its correct position
  deletefromHeap() {
    if (this.size == 0) {
      console.log("nothing to delete");
      return;
    }

    this.heap[1] = this.heap[this.size];
    delete this.heap[this.size];
    this.size--;

    let index = 1;
    console.log(this.size);
    while (index < this.size) {
      let leftIndex = 2 * index;
      let rightIndex = 2 * index + 1;

      if (
        (leftIndex <= this.size &&
          this.heap[index] < this.heap[leftIndex] &&
          !this.heap[rightIndex]) ||
        this.heap[leftIndex] > this.heap[rightIndex]
      ) {
        [this.heap[index], this.heap[leftIndex]] = [
          this.heap[leftIndex],
          this.heap[index],
        ];
        index = leftIndex;
      } else if (
        rightIndex <= this.size &&
        this.heap[index] < this.heap[rightIndex] &&
        this.heap[rightIndex] > this.heap[leftIndex]
      ) {
        [this.heap[index], this.heap[rightIndex]] = [
          this.heap[rightIndex],
          this.heap[index],
        ];
        index = rightIndex;
      } else {
        return;
      }
    }
  }

  //Time complexity for insertion and deletion at heap
  // O(log N)

  //heapify Algorithm
  // you have been give an array
  // convert it into the array which follows heapify property
  // ex the parent node value must be greater than child

  //    50(1 index)
  //    / \
  //   51  55 (3rd index)
  //  / \
  // 52  56 (5 index)

  //heap Arr  = [<empty item>,50,51,55,52,56]
  //     index =    0          1  2  3  4  5
  // if you carefully observe
  // when coming from last index of from right to left
  // the leaf node(which doesnot have any children) are already follow
  // the heapify property
  // because they dont have any children node so they are already
  // heapified

  // we need to only make its correct position of non-leaf nodes
  // formula to get leaf node (n/2+1) to n
  // ex size of array is 5  (5/2)+1 to 5
  //                   i.e   3 to 5 are leaf nodes
  // so to make non leaf node we can go from n to 1

  // algo
  // run a loop from n/2 to 0
  // check it value with its childeren
  // if children contain greater value
  // swap them
  // repeat until its correct postion
  // when correct position found exit the process
  // 1  2   3  4  5
  // 50 56 52 55 51
  //6/2-1 =2
  // my way of coding
  // heapify(arr, size) {
  //   for (let i = Math.floor(size / 2) - 1; i > 0; i--) {
  //     let index = i;

  //     while (index < size) {
  //       let leftiindex = 2 * index;
  //       let rightIndex = 2 * index + 1;
  //       if (
  //         leftiindex < size &&
  //         arr[index] < arr[leftiindex] &&
  //         (!arr[rightIndex] || arr[leftiindex] > arr[rightIndex])
  //       ) {
  //         [arr[index], arr[leftiindex]] = [arr[leftiindex], arr[index]];
  //         index = leftiindex;
  //       } else if (
  //         rightIndex < size &&
  //         arr[index] < arr[rightIndex] &&
  //         arr[rightIndex] > arr[leftiindex]
  //       ) {
  //         [arr[index], arr[rightIndex]] = [arr[rightIndex], arr[index]];
  //         index = rightIndex;
  //       } else {
  //         break;
  //       }
  //     }
  //   }
  //   return arr;
  // }

  //TC - O(N)
  heapify(arr, size, i) {
    let largest = i;
    let left = 2 * i;
    let right = 2 * i + 1;

    if (left <= size && arr[largest] < arr[left]) {
      largest = left;
    }
    if (right <= size && arr[largest] < arr[right]) {
      largest = right;
    }
    if (largest != i) {
      [arr[largest], arr[i]] = [arr[i], arr[largest]];
      this.heapify(arr, size, largest);
    }
  }

  main(arr) {
    let size = arr.length - 1;
    for (let i = Math.floor(size / 2); i > 0; i--) {
      console.log(i);
      this.heapify(arr, size, i);
    }
    return arr;
  }

  //priority queue
  // it is a special type of data structure
  // from whoch you can make max heap or min heap
  // in cpp you have stl
  //in js you have to implement
}

let heap = new Heap();
// heap.insertAtHeap(50);
// heap.insertAtHeap(53);
// heap.insertAtHeap(54);
// heap.insertAtHeap(50);
// heap.insertAtHeap(75);
// heap.insertAtHeap(99);
// heap.deletefromHeap();
// heap.deletefromHeap();
// heap.deletefromHeap();
// heap.deletefromHeap();
// heap.deletefromHeap();

// heap.deletefromHeap();
// heap.deletefromHeap();
// heap.deletefromHeap();
// let arr = new Array(6);
// arr[1] = 50;
// arr[2] = 51;
// arr[3] = 55;
// arr[4] = 52;
// arr[5] = 56;
// let ans = heap.main(arr)
// console.log(ans);
