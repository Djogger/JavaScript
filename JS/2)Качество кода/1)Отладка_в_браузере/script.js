
// Breakpoints:

function phrase(word = "Hello") {
	alert(`**	${word}	  **`)
}

phrase();

alert("World");


// Команда 'debugger':
// (эта команда приостанавливает выполнение кода)

function hello(name = "Djogger") {
	let phrase = `Hello, ${name}`;

	alert(phrase);

	debugger; // <----- тут отладчик остановится.

	alert(phrase);
	end();
}

hello();

function end() {
	alert("That's all.");
}


// Логирование:
// (Чтобы вывести что-то на консоль из нашего кода, существует функция console.log)

for (let i = 0; i <= 5; i++) {
	console.log("value: ", i);
}


/* Советы по стилю кода. */

// Длина строки:

let str = `
	Колёса диктуют вагонные, что хочешь услышится нам,
	Мои номера телефонные разбросаны по городам,
	Заботится сердце, сердце волнуется,
	Почтовый пакуется груз,
	Мой адрес не дом и не улица,
	Мой адрес - Советский Союз,
	Мой адрес не дом и не улица,
	Мой адрес - Советский Союз.
`;
// обратные кавычки `` позволяют разделять строку на части.

// Для 'if':
/*
if (
	id === 123 &&
	moonPhase === 'Waning Gibbous' &&
	zodiaSign === 'Libra'
) {
	letTheSorceryBegin();
}
*/

/*Задание*/

function pow(x, n) {
	let result = 1;

	for (let i = 0; i < n; i++) result *= x;

	return result;
}

let x = prompt("x?",'');
let n = prompt("n?",'');

if (n <= 0) {
	alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
	alert( pow(x, n) );
}

/*Выполнено*/