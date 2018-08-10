let number = prompt("Укажите число", '');
let exponent = prompt("Укажите степень", '');

function pow(number, exponent) {
  let result = number;

  for (let i = 1; i < exponent; i++) {
    result *= number;
  }

  return result;
}

if (exponent <= 1) {
alert(`Степень ${exponent} не поддерживается, введите целую степень, большую 1`);
}
else {
  alert(pow(number, exponent));
}
