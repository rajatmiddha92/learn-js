// Disjoint Set

// It is a type of Data Structure
// which we will use to implement in kruskal's Algo

// two sets are called disjoint set when they dont have
// any element in common
//https://www.geeksforgeeks.org/introduction-to-disjoint-set-data-structure-or-union-find-algorithm/?ref=ml_lbp

// There is Graph called G

// A Graph can have multiple disconnected components
// A Graph can have multiple components
// let say
// C1,C2,C3 ans so on

// let say I have two nodes u and v
// If i want to find out the both node belong from same
// component or different component
// so this can be achieved by using disjoint set

// with the help of disjoint set we can find out that two node
// u and v are from same component or different

// there are two important operation in disjoint set
// 1st is findParent() or findSet() or findReoresentative()
// 2nd is Union() or unionSet()

class unionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
  }

  find(i) {
    if (this.parent[i] == i) {
      //if representaive is same as node return

      return i;
    }

    // tracking to its upper nodes until find representaive
    return this.find(this.parent[i]);
  }

  union(i, j) {
    let findRep1 = this.find(i);
    let findRep2 = this.find(j);
    this.parent[findRep1] = findRep2;
  }
}
let uf = new unionFind(5);
uf.union(1, 2);
uf.union(1, 4);
console.log(uf);
//Optimisations (Path Compression and Union by Rank/Size):
// optimization can be done

// let suppose we have 5 disconnected components
// and each node is parent of its own
// refer to image in folder (findParentandUnion.png)
// so if we find parent we got findparent(1) =1
// and union of let say (1,2) we just join two component with
// single component

// this is a very basic implementation we are seeing

// the efficient implementaion that you can do
// is using "Union by Rank & Path compression"

// let suppose we have 7 disconnected components
// https://www.youtube.com/watch?v=KxLtIrCyXwE&list=PLDzeHZWIZsTobi35C3I-tKB3tRDX6YxuA&index=13&ab_channel=CodeHelp-byBabbar
// refer this link
