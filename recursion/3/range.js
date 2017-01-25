function range(a, b) {
  if (b - a === 2) {
    return [a + 1];
  } else {
    var array = range(a, b - 1);
    array.push(b - 1);
    return array;
  }
}

console.log(range(2, 6));
