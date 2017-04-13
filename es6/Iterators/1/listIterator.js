class List {
  constructor(head, tail) {
    this.head = head
    this.tail = tail
  }

  map(f) {
    return new List(f(this.head), this.tail && this.tail.map(f))
  }
}

let list = new List("x", new List("y", new List("z", null)))

list[Symbol.iterator] = function () {
  var index = 0;
  var value = [this.head, this.tail.head, this.tail.tail.head]

  return {
    next: function () {

      return {
        value: value[index],
        done: index++ >= 3
      }
    }
  }
}

for (let elt of list) console.log(elt)
