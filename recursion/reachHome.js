function reachHome(src, dest) {
  if (src == dest) {
    console.log("Reached Home");
    return;
  }

  reachHome(src + 1, dest);
}

let source = 1;
let destination = 10;

reachHome(source, destination);
