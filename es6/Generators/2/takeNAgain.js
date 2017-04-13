
function* integers() {
  for (let i = 0;; i++) yield i
}

function* take(n, iter) {
  var i = 0;

  while (iter.next().value < 3) {
    yield i++;
  }
}

for (let elt of take(3, integers()))
  console.log(elt)
// → 0
//   1
//   2
