// kruskal's algo
let parent = [];
let rank = [];
function makeSet(n) {
  for (let i = 1; i < n; i++) {
    parent[i] = i;
    rank[i] = 0;
  }
}

function find(x) {
  if (parent[x] != x) {
    parent[x] = find(parent[x]); // Path compression
  }
  return parent[x];
}

function Union(x, y) {
  let xRoot = find(x);
  let yRoot = find(y);

  if (xRoot == yRoot) {
    return;
  }

  // Union by rank
  if (rank[xRoot] < rank[yRoot]) {
    parent[xRoot] = yRoot;
  } else if (rank[xRoot] > rank[yRoot]) {
    parent[yRoot] = xRoot;
  } else {
    parent[yRoot] = xRoot;
    rank[xRoot]++;
  }
}

makeSet(4);
// Union(1, 4);
// Union(2, 6);
// Union(7, 8);
// Union(3, 5);
// Union(2, 4);
// Union(4, 8);
Union(2, 3);
Union(1, 3);
// Union(2, 3);
// Union(7, 9);
// Union(2, 4);
// Union(4, 8);
console.log(parent, rank);
