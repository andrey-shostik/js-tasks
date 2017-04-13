function calc_factorial(x) {
  if (x != 1) {
    return x *= calc_factorial(x - 1);
  } else {
    return x;
  }
}

console.log(calc_factorial(5));
