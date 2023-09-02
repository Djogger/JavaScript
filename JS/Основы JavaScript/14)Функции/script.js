/* Функции. */

// Объявление функции:

function showMessage() {
	alert('Astalavista, Baby');
}

showMessage();
showMessage();


// Локальные переменные:

/* Переменные, объявленные внутри функции, видны только внутри этой функции.
function showMessage() {
	let message = "Привет, я JavaScript!"; // локальная переменная.

	alert( message );
}

showMessage(); // Привет, я JavaScript!

alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции.
*/


// Внешние переменные:

// У функции есть доступ к внешним переменным.

let userName = 'Джегр';

function showMessage1() {
	let message = 'Здарова, ' + userName;

	alert(`Пришло сообщение: ${message}.`);
}

showMessage1();


// Функция обладает полным доступом к внешним переменным и может изменять их значение.

let userName1 = 'Вася';

function showMessage2() {
	userName1 = "Петя"; // (1) изменяем значение внешней переменной.

	let message = 'Привет, ' + userName1;
	alert(message);
}

alert( userName1 ); // Вася перед вызовом функции.

showMessage2();

alert( userName1 ); // Петя, значение внешней переменной было изменено функцией.


// Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю. Например, 
// в коде ниже функция использует локальную переменную userName. Внешняя будет проигнорирована:

// let userName = 'Вася';

function showMessage3() {
	let userName = "Петя"; // объявляем локальную переменную.

	let message = 'Привет, ' + userName; // Петя.
	alert(message);
}

// функция создаст и будет использовать свою собственную локальную переменную userName.
showMessage3();

alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную.


// Параметры:

// Используя параметры можно передать любую информацию во внутрь функции:

function showMessag4(from, text) {
	alert(from + ': ' + text);
}

showMessag4('Джегр', 'Привет!');
showMessag4('Маша', 'Как дела?)');


// Если передать значение, которое было объявлено снаружи функции, то при передачи этого 
// значения в функцию оно копируется, но не заменяется на новое:

function showMessage5(from, text) {

	from = '*' + from + '*'; // изменю "from".

	alert( from + ': ' + text );
}

let from1 = "Аня";

showMessage5(from1, "Привет"); // *Аня*: Привет.

// значение "from" осталось прежним, функция изменила значение локальной переменной.
alert( from1 ); // Аня.


// Значения по умолчанию:

// (Если при вызове функции аргумент не был указан, то его значением становится undefined.)

showMessage5('Аня'); // Аня: undefined.


// Можно сделать так, чтобы, если не указан аргумент для функции, то тогда этот аргумент вычислялся из другой функции,
// если же аргумент был передан в функцию, то тогда именно этот аргумент будет использоваться:

function showMessage6(form, text = anotherFunction()) {
	alert(form + '::' + text);
}

function anotherFunction() {
	let x = 'Похоже не был указан "text"';

	showMessage6('Эхх', x);
}

//showMessage6(':)', ':3');
showMessage6();


// Альтернативные параметры по умолчанию:

function showCount(count) {
	// если count равен undefined или null, показать "неизвестно"
	alert(count ?? "неизвестно");
}

showCount(0); // 0
showCount(null); // неизвестно
showCount(); // неизвестно


// Возврат значения:

function showMessage7(form, text = anotherFunction1()) {
	alert(form + '::' + text);
}

function anotherFunction1() {
	let x = 'Похоже не был указан "text"';

	return x;
}

showMessage7('Djoger');


function sum(a, b) {
	return a + b;
}

let result = sum(14, 5);

alert(result);

//---------------------------------------------------------------------------------------------------------------------------------------------\\

function checkAge(age) {
	if (age >= 18) {
		return true;
	} else {
		return confirm('А родители разрешили?');
	}
}

let age = prompt('Сколько вам лет?', 18);

if ( checkAge(age) ) {
	alert( 'Доступ получен' );
} else {
	alert( 'Доступ закрыт' );
}


// Пустой 'return' возвращает тип 'undefined', как если бы было пустое тело функции без 'return':

function doNothing() { / пусто / }

alert( doNothing() === undefined ); // true.


function returnNothing() {
	// что-то делается.
	return
}

alert( returnNothing() === undefined ); // true.


/*Задачи*/


// Задание 1:
// Перепишите функцию, используя оператор '?' или '||':

let start = prompt("Сколько лет? :O");

function checkAge1(age) {
	return (age >= 18) ? true : confirm('Родители разрешили?');
}

alert( checkAge1(start) );


function checkAge2(age) {
	return (age >= 18) || confirm('Родители разрешили?')
}

alert( checkAge2(start) );


// Задание 2:
// Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b:

function min(a, b) {
	if (a > b) {
		return b;
	} else {
		return a;
	}
}

alert( min(2, 5) ); // 2.
alert( min(3, -1) ); // -1.
alert( min(1, 1) ); // 1.


// Задание 3:
// Напишите функцию pow(x, n), которая возводит x в степень n и возвращает результат:

function pow(a, b) {
	if (a > 0) {
		let result = 1;

		while (b > 0) {
			--b;
			result *= a;
		}

		return result;
	}

	return 'Это ненатуральное число.';
}

alert( pow(3, 2) ); // 9.
alert( pow(3, 3) ); // 27.
alert( pow(1, 100) ); // 1.

alert( pow(0, 5) ); // Это ненатуральное число.
alert( pow(-5, 5) ); // Это ненатуральное число.


/*Выполнено*/