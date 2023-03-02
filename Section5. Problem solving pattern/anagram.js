function validAnagram(first, second) {
  // add whatever parameters you deem necessary - good luck!
  if (first.length !== second.length) {
    return false;
  }
  const obj = {};
  for (let char of first) {
    obj[char] ? (obj[char] += 1) : (obj[char] = 1);
  }
  for (let char of second) {
    if (!obj[char]) {
      return false;
    } else {
      obj[char] -= 1;
    }
  }
  console.log(obj);
  return true;
}

validAnagram("", ""); // true
validAnagram("aaa", "zzz");
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car");
validAnagram("awesome", "awesom");
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwistext"); // true
