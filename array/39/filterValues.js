function filter_array_values(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]
