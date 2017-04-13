 function map(fn, array) {
  var newArray = [];
   for (var i = 0; i < array.length; i++) {
     newArray[i] = square(array[i]);
   }

   return newArray;
 }

 function square(x) {
   return x * x;
 } // возведение в квадрат
 console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
 console.log(map(square, [])); // []
