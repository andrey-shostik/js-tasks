function rangeBetwee(begin, end) {
  var array = [];


  for (var i = begin; i <= end; i++) {
    array.push(i);
  }

  return array;

}
console.log(rangeBetwee(4, 7));
// [4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
