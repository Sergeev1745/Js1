var firstNum = prompt('Введите число');
var secondNum = prompt('Введите степень');
var result = Math.pow(firstNum, secondNum);
if (isNaN(firstNum) || isNaN(secondNum)) {
	alert('Вы ввели не числовое значение')
} else if (firstNum == '' || secondNum == ''){
	alert('Вы  не ввели значение')
} else {
console.log('число= ', firstNum);
console.log('степень= ', secondNum);
console.log('результат= ', result);
}