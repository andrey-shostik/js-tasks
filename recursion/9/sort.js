var count = 0;

function mergeSort(array) {
  var k,
    left = [],
    right = [];

  k = Math.floor(array.length / 2);
  if (k < 1) {
    return;
  }
  while (array.length > k) {
    left.push(array.shift());
  }
  while (array.length > 0) {
    right.push(array.shift());
  }
  mergeSort(left);
  mergeSort(right);
  while ((left.length > 0) && (right.length > 0)) {
    count = count + 1;
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  while (left.length > 0) {
    array.push(left.shift());
  }
  while (right.length > 0) {
    array.push(right.shift());
  }
  return array;
}
console.log(mergeSort([34, 7, 23, 32, 5, 62]));
// Sample output : [5, 7, 23, 32, 34, 62]
