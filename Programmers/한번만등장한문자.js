function solution(str) {

  const obj = {};
  for(let value of str) {
    value in obj ? obj[value]++ : obj[value] = 1;
  }
  let item = Object.keys(obj).filter(key => obj[key] === 1);
  
  return item.sort().join("");
}

console.log(solution("abcabcadc"));
console.log(solution("gabdc"));
console.log(solution("hello"));