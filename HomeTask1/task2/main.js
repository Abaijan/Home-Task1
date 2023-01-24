const oneNumber=prompt('Введите первое число:');
const twoNumber=prompt('Введите второе число:');
alert('Вы ввели числа: ' + oneNumber + ' и ' + twoNumber);

if (oneNumber > twoNumber){
  alert('Первое число больше второго');
}

if (oneNumber < twoNumber){
  alert('Второе число больше первого');
}

if(oneNumber === twoNumber){
  alert('числа равны');
}