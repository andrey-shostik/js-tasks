class MyMap {
  constructor() {
    this.size = 0;
  }

  set(name, value) {
    this.size++;
    this[name] = value;
    return this;
  }

  get(name) {
    return this[name];
  }

  delete(name) {
    delete this[name];
  }

  clear() {
    for (var property in this) {
      if (this.hasOwnProperty(property)) {
        delete this[property];
      }
    }
  }
}

const names = new MyMap();

names.set(Array, "the array constructor")
names.set(Math, "the math object")
console.log(names.get(Array))
console.log(names.size)
names.delete(Array)
console.log(names.get(Array))
names.clear()
console.log(names.get(Math))
