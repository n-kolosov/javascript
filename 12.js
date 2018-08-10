let firstNumber = prompt("Укажите первое число", '');
let secondNumber = prompt("Укажите второе число", '');

function minNumber(firstNumber, secondNumber) {
  return (firstNumber > secondNumber ? `меньшее число ${secondNumber}` : `меньшее число ${firstNumber}`)
}

alert(minNumber(firstNumber, secondNumber));