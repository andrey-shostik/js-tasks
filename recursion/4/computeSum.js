function compute_sum(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    return arr.pop() + compute_sum(arr);
  }
}

console.log(compute_sum([1, 2, 3, 4, 5, 6]));
// Expected Output: 21
