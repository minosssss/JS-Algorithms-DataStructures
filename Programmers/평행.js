function solution(dots) {
  var answer = 0;
  let [x1,y1] = dots[0];
  let [x2,y2] = dots[1];
  let [x3,y3] = dots[2];
  let [x4,y4] = dots[3];
  // 01 23
  if ((x2-x1)/(y2-y1) === (x4-x3)/(y4-y3)){
    return 1
  }
  // 31 42
  if ((x3-x1)/(y3-y1) === (x4-x2)/(y4-y2)){
    return 1
  }
  // 41 32
  if ((x4-x1)/(y4-y1) === (x3-x2)/(y3-y2)){
    return 1
  }
  
  return answer;
}
