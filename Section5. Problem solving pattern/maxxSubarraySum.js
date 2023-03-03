
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = 0;
  let temp = 0;
  for (let i=0; i<num; i++) {
    max += arr[i];
    // 주어진 숫자를 미리 더해서 가지고 있는다.
  }
  temp = max;
  for (let i=num; i<arr.length; i++) {
    temp = temp - arr[i-num] + arr[i];
    // max에서 주어진 자리 첫째자리에 더한 값을 빼고,
    // 마지막에서 그 다음값을 더한다;
    max = Math.max(max,temp);
  }
  console.log(max);
  return max;
}


maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([1, 2, 2, 8, 5], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null