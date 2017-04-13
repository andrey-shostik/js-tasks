function remove_array_element(array, value) {
  if (array.indexOf(value) !== -1) {
    delete array[array.indexOf(value)];
  }

  return array;
}

console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]
