function expNum(num, exp) {
  if (exp === 1) {
    return num;
  } else {
    return num * expNum(num, --exp);
  }
}

console.log(expNum(2, 5));
