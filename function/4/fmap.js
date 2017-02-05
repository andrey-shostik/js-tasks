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

function a1(x) {
  return x * x;
}

function fmap(a, gen) {
  return function () {
    return a(gen());
  };
}

var squareGen = fmap(a1, sequence(1, 3));

console.log(squareGen());
console.log(squareGen());
console.log(squareGen());
