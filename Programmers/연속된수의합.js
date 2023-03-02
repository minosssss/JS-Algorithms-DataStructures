function solution(num, total) {
  // num 개를 더한 값이 total 이 될 때,
  // 정수 배열을 오름차순으로 담아 return

  // 3	12	[3, 4, 5]
  // 5	15	[1, 2, 3, 4, 5]
  // 4	14	[2, 3, 4, 5]
  // 5	5	[-1, 0, 1, 2, 3]
  let answer = [];

  let nSum = (num * (1 + num)) / 2; //6
  let start = (total - nSum) / num;

  for (let i = 1; i < num + 1; i++) {
    answer.push(i + start);
  }

  return answer;
}

console.log(solution(3, 5));
console.log(solution(5, 15));
console.log(solution(3, 12));
console.log(solution(5, 5));

/** 
a. num = 5, total = 5
b. nSum = 5 * (1 + 5) / 2 ## nSum은 15
c. start = (5 - 15) / 5 ## start는 0;
d. for문 돌며 1 ~ 5까지 반복하면서 answer배열에 추가.
e. answer 배열에 3,4,5가 저장.
 */