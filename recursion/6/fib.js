function fib(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var num = fib(--n);
    num.push(num[num.length - 2] + num[num.length - 1]);
    return num;
  }
}

console.log(fib(9));
