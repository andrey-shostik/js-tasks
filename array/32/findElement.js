function findElem(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
array = [2, 5, 9, 6];
console.log(findElem(array, 5));
