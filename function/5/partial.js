function partial(fn) {
  var params = Array.prototype.slice.call(arguments, 1);

  return function () {
    return fn.apply(this, params.concat(Array.prototype.slice.call(arguments, 0)));
  };
}

function add() {
  var r = 0;
  for (var i in arguments) {
    r += arguments[i];
  }
  return r;
}

var add5 = partial(add, 5);
console.log(add5(2));
