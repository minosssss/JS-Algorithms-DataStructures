
function addUpTo(n) {
  return n * (n + 1) / 2;
}

let start = performance.now();
addUpTo(1000000000);
let end = performance.now();

console.log(`Time ${(end-start)/1000} seconds;`)