function all(promises) {
  return new Promise(function (success, fail) {
    if (promises.length === 0) return success([]);
    var remaining = promises.length;

    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        var then = val.then;
        if (typeof then === 'function') {
          var p = new Promise(then.bind(val));
          p.then(function (val) {
            res(i, val);
          }, fail);
          return;
        }
      }
      promises[i] = val;
      if (--remaining === 0) {
        success(promises);
      }

    }
    for (var i = 0; i < promises.length; i++) {
      res(i, promises[i]);
    }
  });
}


// Test code.
all([]).then(function (array) {
  console.log("This should be []:", array);
});

function soon(val) {
  return new Promise(function (success) {
    setTimeout(function () {
        success(val);
      },
      Math.random() * 500);
  });
}
all([soon(1), soon(2), soon(3)]).then(function (array) {
  console.log("This should be [1, 2, 3]:", array);
});

function fail() {
  return new Promise(function (success, fail) {
    fail(new Error("boom"));
  });
}
all([soon(1), fail(), soon(3)]).then(function (array) {
  console.log("We should not get here");
}, function (error) {
  if (error.message != "boom")
    console.log("Unexpected failure:", error);
});
