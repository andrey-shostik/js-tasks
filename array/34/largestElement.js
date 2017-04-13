function nthlargest(arr, n) {
  var k = 0;
  var top = [];
  while (k < n) {
    top[k] = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > top[k] && top.indexOf(arr[i]) == -1) {
        top[k] = arr[i];
      }
    }
    k++;
  }
  return top[n - 1];
}

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89
