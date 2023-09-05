/* Циклы while и for. */

// Цикл 'while':

// Синтаксис:

/*
while (condition) {
	// код
	// также называемый "телом цикла".
}
*/

// Пример:

let i = 0;

while (i < 3) {
	alert(i);
	i++;
}

// Цикл 'do...while':

// Синтаксис:

/*
do {
	// тело цикла.
} while (condition);
*/

let i1 = 0;

do {
	alert(i1);
	i1++;
} while (i1 < 3);

// Цикл 'for':

/*
for (начало; условие; шаг) {
  // ... тело цикла ...
}
*/

for (let i2 = 0; i2 < 3; i2++) {
	alert(i2);
}


let a;

for (a = 0; a <= 100; a++) {
	let result = confirm(a);

	if (!result) { // елси result вернёт 'null', то в if '!' преобразует результат в 'true' и прервёт цикл.
		break
	}
}

alert(a);

// Пропуск частей 'for':

let i3 = 0;

for (; i3 < 3; ) {
	alert(i3++);
}


// Прерывание цикла: "break":

let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );


// Переход к следующей итерации: continue:

for (let i = 0; i < 10; i++) {

  // если 'true', пропустить оставшуюся часть тела цикла.
  if (i % 2 == 0) continue;

  alert(i); // 1, а затем 3, 5, 7, 9.
}


// !!!Нельзя использовать break/continue справа от оператора „?“!!!:
// (i > 5) ? alert(i) : continue; // continue здесь приведёт к ошибке


// Метки для break/continue:

outer: for (let y = 0; y < 5; y++) {
	for (let z = 0; z < 5; z++) {
		let input = prompt(`Значение координат: (${y}, ${z})`, '5');

		if (!input) {
			break outer;
		}
	}
}

alert('Готово!');


/*Задание*/

// Задание 1:

for (let start = 0; start <= 10; start++) {
	if (start % 2 == 0 && start != 0) alert(start);
}

// Задание 2:

let start1 = 0;

while (start1 < 3) {
	alert(`Number: ${start1}.`);
	++start1;
}

// Задание 3:

cycle: while (true) {
	let start2 = +prompt('Введите число:', '');

	if (!start2) {
		alert('Введено не число, либо прожата отмена или Esc.');
		break cycle;
	}

	if (start2 <= 100) {
		continue;
	} else {
		alert('Введённое число больше 100. Готово.');
		break cycle;
	}
}

// Задание 4:

let start3 = 0;
let start4 = 15;

for (start3; start3 <= start4; start3++) {
	stop: for (let start5 = 2; start5 <= start3; start5++) {
		if (start3 % start5 == 0) {
			if (start5 != start3 && start3 % start5 == 0) {
				break stop;
			} else if (start5 == start3 && start3 % start5 == 0) {
				alert(start3);
				break stop;
			}
		}
	}
}

/*Выполнено*/