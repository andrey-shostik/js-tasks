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

var generator = sequence(10, 3);
console.log(generator());
console.log(generator());
