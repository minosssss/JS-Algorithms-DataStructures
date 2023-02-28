function charCount(str){
  // make object to return to end
  // loop over string, for each character...
    // if the char is a number/letter AND is a key in object, add one to count
    // if the char is a number/letter AND not in object, and it to object and set value to
    // if character is something else (space, period, etc.) don't do anything
  // return object at end
  str.replace(/ /g,"")
  const obj = {};
  for (let char of str) {
    const lower = char.toLowerCase();
    if(/[a-z0-9]/.test(lower))
    obj[lower] = ++obj[lower] || 1;
  }
  return obj;
}
console.log(charCount("hello My name is Minho!"))