'use strict';
let n = +prompt("Укажите число:", '');

function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

alert(fibonacci(n));