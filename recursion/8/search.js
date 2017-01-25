l = [1, 2, 3, 4, 5, 6];

var i = 0;
Array.prototype.search = function (num) {
  if (this[i] == num) {
    return this[i];
  } else if (true) {
    i++;
    return this.search(num);
  }
};

console.log(l.search(6));
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'
