function longest_common_starting_substring(arr) {
  var array = [];
  for (var i = 0; i < arr[0].length; i++) {
    if (arr[0].charAt(i) === arr[1].charAt(i)) {
      array[i] = arr[0][i];
    }
  }

  return array.join('');
}

console.log(longest_common_starting_substring(['go', 'google']));
