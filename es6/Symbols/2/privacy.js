const content = Symbol('content');

class Queue {
  constructor() {
    this[content] = [];
  }
  put(elt) {
    return this[content].push(elt);
  }
  take() {
    return this[content].shift();
  }
}

let q = new Queue();
q.put(1);
q.put(2);
console.log(q.take());
console.log(q.take());
