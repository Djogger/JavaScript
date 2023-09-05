/* Конструкция "switch". */

// Синтаксис:

// Конструкция switch заменяет собой сразу несколько if.

/*
switch(x) {
	case 'value1': // if (x === 'value1')
		...
		[break]

	case 'value2': // if (x === 'value1')
		...
		[break]

	default:
		...
		[break]
}
*/

// Пример работы:

let x = 4 + 1;

switch (x) {
	case 4:
		alert(`Маловато: ${x}.`);
		break;

	case 5:
		alert(`В точку: ${x}.`);
		break;

	case 6:
		alert(`Перебор: ${x}.`);
		break;

	default:
		alert('Таких значений не существует.');
		break
}

//---------------------------------------------------------------------------------------------------------------------------------------------\\

let a = "1";
let b = 0;

switch (+a) {
	case b + 1:
		alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
		break;

	default:
		alert("Это не выполнится");
		break;
}


// Группировка "case":

/*
Несколько вариантов case, использующих один код, можно группировать.

Для примера, выполню один и тот же код для case 3 и case 5, сгруппировав их:
*/

let z = 18;

switch (z) {
	case 5:
		alert('5');
		break;

	case 18:
	case 19:
		alert('Либо 18, Либо 19.');
		alert(`${z}`);
		break;

	default:
		alert('Странно, но что-то пошло не так.');
}

// Тип имеет значение:

let argument = prompt("Введите число");

switch (argument) {
	case '0':
	case '1':
		alert( 'Один или ноль.' );
		alert( `${argument}` );
		break;

	case '2':
		alert( 'Два' );
		break;

	case 3:
		alert( 'Никогда не выполнится!' );
		break;

	default:
		alert( 'Неизвестное значение' );
}


/*Задачи*/

// Задание 1:

let start = prompt('Какой браузер Вы используете?', 'Chrome');

if (start === 'Chrome' || start === 'Firefox' || start === 'Safari' || start === 'Opera') {
	alert('We support that browser.');
} else if (start === 'Edge') {
	alert("You've got the Edge!");
} else {
	alert("',8/");
}

// Задание 2:

const number = +prompt('Введите число между 0 и 3:', '');

switch (number) {
	case 0:
	case 1:
	case 2:
	case 3:
		if (number == 0 || number == 1) {
			alert(`Вы ввели ${number}.`);
			break;
		} else {
			alert('Вы ввели число 2, а может и 3.');
			break;
		}
}

/*Выполнено*/