function integers() {
  let i = 0
  return {next() { return {value: i++} },
          [Symbol.iterator]() { return this }}
}

function take(n, iter) {
  return {
    next() {
      return {
        value: ++n - 4,
        done: iter.next().value >= 3
      }
    },
    [Symbol.iterator]() { return this }
  }
}

for (let elt of take(3, integers()))
  console.log(elt)
// → 0
//   1
//   2
