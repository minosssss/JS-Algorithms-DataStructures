function charCount(str) {
  str.replace(/ /g, "");
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      const lower = char.toLowerCase();
      obj[lower] = ++obj[lower] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric [0-9]
    !(code > 64 && code < 91) && // numeric [A-Z]
    !(code > 96 && code < 123)
  ) {
    // numeric [a-z]
    return false;
  }
  return true;
}
console.log(charCount("hello My name is Minho!"))