function difference(fArray, sArray) {
  var array = [],
    diff = [];

  for (var i = 0; i < fArray.length; i++) {
    array[fArray[i]] = true;
  }

  for (var j = 0; j < sArray.length; j++) {
    if (array[sArray[j]]) {
      delete array[sArray[j]];
    } else {
      array[sArray[j]] = true;
    }
  }

  for (var k in array) {
    diff.push(k);
  }

  return diff;
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2],
  [3, [
    [4]
  ]],
  [5, 6]
]));
// ["6"]
