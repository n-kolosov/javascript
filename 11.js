let age = prompt("Укажите ваш возраст:", '');

function checkAge(age) {
  return (age > 18 ? "Добро пожаловать!" : "Родители разрешили?");
}

alert(checkAge(age));