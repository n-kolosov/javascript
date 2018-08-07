let number = prompt('Введите число', '');

if (number > 0) {
  alert('Число больше нуля');
} else if (number == 0) {
  alert('Число равно нулю');
} else if (number < 0) {
  alert('Число меньше нуля');
} else {
  alert('Вы указали не число')
}