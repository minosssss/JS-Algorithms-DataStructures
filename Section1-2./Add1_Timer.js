
function addUpTo(n) {
  let total = 0;
  for (let i=1; i <= n; i++) {
    total += 1;
  }
  return total;
}

let start = performance.now();
addUpTo(1000000000);
let end = performance.now();

console.log(`Time ${(end-start)/1000} seconds;`)