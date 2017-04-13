class List {
  constructor(head, tail) {
    this.head = head
    this.tail = tail
  }

  map(f) {
    return new List(f(this.head), this.tail && this.tail.map(f))
  }

  static from(arr) {
    var list;
    var value;

    arr[Symbol.iterator] = function () {
      var index = this[0];
      console.log(index);
      return {
        next: function () {
          return {
            value: index--,
            done: index < arr[arr.length - 1] - 1
          }
        }
      }
    }

    for (value of arr) {
      if (list) {
        if (value == 1) {
          list.tail.tail = new List(value);
        } else {
          list.tail = new List(value);
        }
      } else {
        list = new List(value);
      }
    }
    return list;
  }
}

console.log(List.from([3, 2, 1]))
// → List{head: 3, tail: List{head: 2, tail: List{head: 1, tail: null}}}
