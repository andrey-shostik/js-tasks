function randomItem(array) {
  var randVal = Math.floor(Math.random() * ((array.length - 1) - 0 + 1)) + 0;
  return array[randVal];
}

console.log(randomItem([1, 2, 3, 4]));
