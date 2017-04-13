function move(array, moveFrom, moveTo) {
  while (moveFrom < 0) {
    moveFrom += array.length;
  }

  while (moveTo < 0) {
    moveTo += array.length;
  }

  array.splice(moveTo, 0, array.splice(moveFrom, 1)[0]);

  return array;
}
console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]
