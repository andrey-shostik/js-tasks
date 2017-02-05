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

function square(x) {
  return x * x;
}

function fmap(a, gen) {
  return function (b, c) {
    return a(gen(b, c));
  };
}

function add(a, b) {
  return a + b;
}

var squareGen = fmap(square, sequence(1, 3));

console.log(squareGen());
console.log(squareGen());
console.log(squareGen());

var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
