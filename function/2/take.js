function sequence(start, step) {
  var i = 0;

  return function () {
    if (i === 0) {
      i++;
      return start;
    }
    return start += step;
  };
}

function take(gen, x) {
  var array = [];

  for (var i = 0; i < x; i++) {
    array.push(gen());
  }

  return array;
}

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
