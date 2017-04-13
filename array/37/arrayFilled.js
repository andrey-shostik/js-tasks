function array_filled(count, value) {
  var array = [];

  for (var i = 0; i < count; i++) {
    array.push(value);
  }

  return array;
}
console.log(array_filled(3, 'default value'));
// ["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));
// ["password", "password", "password", "password"]
