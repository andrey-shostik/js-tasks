function array_range(start, times) {
  var array = [];

  for (var i = 0; i < times; i++) {
    array.push(start + i);
  }

  return array;
}
console.log(array_range(1, 4));
// [1, 2, 3, 4]
console.log(array_range(-6, 4));
// [-6, -5, -4, -3]
