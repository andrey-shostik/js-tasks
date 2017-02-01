class SortedArray {
  constructor(compare) {
    this.compare = compare;
    this.content = [];
  }

  findPos(elt) {
    for (var i = 0; i < this.content.length; i++) {
      if (this.compare(elt, this.content[i]) < 0) break
    }
    return i
  }

  insert(elt) {
    this.content.splice(this.findPos(elt), 0, elt);
  }
}

var sorted = new SortedArray(function (a, b) {
  return a - b
})

sorted.insert(5)
sorted.insert(1)
sorted.insert(2)
sorted.insert(4)
sorted.insert(3)
console.log("array:", sorted.content)
