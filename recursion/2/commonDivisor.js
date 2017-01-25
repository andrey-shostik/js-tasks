function commonDivisior(num1, num2) {
  if (!num2) {
    return num1;
  }

  return commonDivisior(num2, num1 % num2);
}

console.log(commonDivisior(8, 3));
