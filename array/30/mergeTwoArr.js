function merge_array(fArray, sArray) {
  var newArray = fArray.concat(sArray),
    arr = [];

  for (var i = 0; i < newArray.length; i++) {
    if (arr.indexOf(newArray[i]) === -1) {
      arr.push(newArray[i]);
    }
  }

  return arr;
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
