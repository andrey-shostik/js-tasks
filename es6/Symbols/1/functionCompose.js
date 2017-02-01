// Your code here
let compose = Symbol('compose');

Function.prototype[compose] = function (callback) {
  var that = this;
  return function (a) {
    return that.call(undefined, callback(a));
  };
};

let roundedAbs = Math.round[compose](Math.abs)
console.log(roundedAbs(-5.5))
  // → 6
