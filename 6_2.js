let userName = prompt('Кто пришёл?', '');

if (userName == 'Админ') {
  let password = prompt('Укажите пароль', '');
  if (password == 'Пароль123') {
    alert('Аутентификация пройдена');
  }
  else if (password == null){
    alert('Вход отменён');
  }
  else {
    alert('Пароль указан неверно');
  }
} else if (userName == null){
  alert('Вход отменён');
} else {
  alert('У вас нет прав доступа');
}