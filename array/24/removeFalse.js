var array = [NaN, 0, 15, false, -22, '', undefined, 47, null],
  newArray = [];

for (var i = 0; i < array.length; i++) {
  if (!array[i]) {
    delete array[i];
  }
}

console.log(array);
