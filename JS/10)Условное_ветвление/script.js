/* Условное ветвление: if, '?'. */

// Инструкция 'if':

let year = prompt('Год снования Союза Советских Социалистических Республик?', '1917 Год.');

// if (year == '1917 Год.') alert("Верно :3");

// Если мы хотим выполнить более одной инструкции, то нужно заключить блок кода в фигурные скобки:

if (year == '1917 Год.') {
	alert("Верно :3");
	alert("Молодец!");
}

// Блок 'else':

if (year == '1917 Год.') {
	alert('Верно :3');
} else {
	alert('СССР был основан в 1917 году.');
	alert('Ленин - гриб');
}

// Несколько условий: 'else if':

if (year == '1917 Год.') {
	alert('Верно :3');
} else if (year == '1991 Год.') {
	alert('В этом году СССР распался :(');
} else {
	alert('СССР был основан в 1917 году.');
	alert('Ленин - гриб');
}

// Условный оператор '?':

let accessAllowed;
let age1 = prompt('Сколько Вам лет?');

/*
if (age > 18) {
	accessAllowed = true;
} else {
	accessAllowed = false;
}
*/

alert(accessAllowed);

// Синтаксис '?':
// let result = условие ? значение1 : значение2;

accessAllowed = (age1 > 18) ? true : false;

alert(accessAllowed);

// Несколько операторов '?':

let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
	(age < 18) ? 'Привет!' :
	(age < 100) ? 'Здравствуйте!' :
	'Какой необычный возраст!';

alert( message );

// Нетрадиционное использование '?':

let company = prompt('Какая компания создала JavaScript?', 'Netscape');

(company == 'Netscape') ?
	alert('Правильно :)') : alert('Неправильно :(');


/* ЗАДАЧИ */

// Первая задача:

let question = prompt('Какое "официальное" название JavaScript?', 'ECMAScript');

if (question == 'ECMAScript') {
	alert('Верно!');
} else {
	alert('Неа, такое: "ECMAScript".');
}

// Вторая задача:

let question1 = prompt('Впишите число.', '');

if (question1 > 0) {
	alert(1);
} else if (question1 < 0) {
	alert(-1);
} else if (question1 == 0) {
	alert(0);
}

// Третья задача:

let a = 4;
let b = 5;

let result = (a + b < 4) ? "Мало" : "Много";

// Четвёртая задача:

let login = prompt("Классификация", "Директор");

let message5 = (login == "Сотрудник") ? "Привет" : (login == "Директор") ? "Здарова, начальник" : (login == "") ? "Нет Логина" : "";

alert(message5);

/*Выполнено*/