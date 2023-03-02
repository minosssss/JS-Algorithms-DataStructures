function solution(message) {
  // 생신 축하 편지
  // 보기 편하게 글자 한 자 한 자를 2cm 크기
  // 편지를 가로로 적을 때, 축하문구 message 적기 위해 필요한 ㅊ최소 가로길이 return
  
  // 공백도 문자열 취급
  // 1 ~ 50자
  // 여백 X
  // 영문 알파벳 대소문자, '!','~'
  
  return message.length * 2;
}

solution("happy birthday!");
solution("I love you~");