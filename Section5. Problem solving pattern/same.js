function same(arr1, arr2) {
  if (arr1.length !== arr2. length) {
    return false;
  }
  for (let number of arr1) {
    let corretIndex = arr2.indexOf(number ** 2)
    if (corretIndex === -1) {
      return false;
    }
    arr2.splice(corretIndex);
  }
  return true;
}
