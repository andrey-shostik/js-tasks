function twoSum(array, target) {
  var map = [];
  var indexnum = [];

  for (var x = 0; x < array.length; x++) {
    if (map[array[x]] != null) {
      index = map[array[x]];
      indexnum[0] = index + 1;
      indexnum[1] = x + 1;
      break;
    } else {
      map[target - array[x]] = x;
    }
  }
  return indexnum;
}
console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50));
