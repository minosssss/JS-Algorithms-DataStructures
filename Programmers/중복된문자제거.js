function solution(my_string) {
  return ''.concat(...new Set(my_string));
}