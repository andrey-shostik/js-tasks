function num_string_range(begin, end, num) {
  var data = 'abcdefghijklmnopqrstuvwxyz',
    arr = [];

  for (var i = data.indexOf(begin); i < data.indexOf(end); i++) {
    if ((i % num) === 0) {
      console.log(data[i]);
      arr.push(data[i]);
    }
  }

  return arr;
}
console.log(num_string_range('a', "z", 2));
