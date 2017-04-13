class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //...
  }

  plus(dot) {
    let x = this.x + dot.x;
    let y = this.y + dot.y;

    return {
      x,
      y
    }
  }

}

console.log(new Point(1, 2).plus(new Point(2, 1)));
