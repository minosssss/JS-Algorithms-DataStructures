// function countUniqueValues(arr) {
//   if (!arr.length) return 0;
//   return new Set([...arr]).size;
// }

// function countUniqueValues(arr) {
//   if(!arr.length) return 0;
//   const obj = {};
//   for(let number of arr) {
//     number in obj ? obj[number]++ : obj[number] = 1;
//   }
//   console.log(Object.keys(obj).length)
//   return Object.keys(obj).length;
// }

function countUniqueValues(arr) {
  if(!arr.length) return 0;
  let start = 0;
  let end = 1;
  let count = 0;
  while (end < arr.length) {
    if (arr[start] === arr[end]) {
      end += 1;
    }
    if (arr[start] !== arr[end]) {
      start = end;
      count += 1;
    }
  }
  console.log(count);
  return count;
}

countUniqueValues([1,1,1,1,2]);
countUniqueValues([1,2,3,4,4,4,4,4,7,7,12,12,13]);
countUniqueValues([]);
countUniqueValues([-1,2,-3,0]);