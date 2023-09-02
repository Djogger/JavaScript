/* Function Expression. */

/*
let sayHi = function() {
	alert('Привет!');
};

sayHi();


// Функция - это значение:

function sayBye() {
	alert('Пока :)');
}

alert(sayBye); // выведет код функции.

let funct = sayBye; // копируем функцию 'sayBye' в 'funct'.

funct(); // Пока :)
sayBye(); // Пока :)

*/

// Функции - "Колбэки":

function ask(question, yes, no) {
	if (confirm(question)) {
		yes();
	} else {
		no();
	}
}

/*
function showOk() {
	alert("Вы согласились.");
}

function showCancle() {
	alert("Вы отменили выполнение.");
}

// Использование: функции: showOk(), showCancle() передаются в качестве аргументов ask:
ask("Вы тут?", showOk, showCancle);
*/

//То же самое, но с Function Expression:

ask(
	"Вы тут?", 
	function() { alert("Вы согласились."); }, 
	function() { alert("Вы отменили выполнение."); }
);


/* Function Expression в сравнении с Function Declaration:

// 1) Function Declaration
function sum(a, b) {
  return a + b;
}

// 2) Function Expression
let sum = function(a, b) {
  return a + b;
};

*/


// Сделаем так, чтобы можно было увидеть функцию, объявленную внутри '{}':

let age = prompt("Сколько Вам лет?", 19);

/*
let welcome;

if (age > 18) {
	welcome = function() {
		alert("Здравствуйте!");
	};
} else {
	welcome = function() {
		alert("Привет!");
	};
}
*/

// Можно упростить, используя условный оператор '?':

let welcome = (age < 18) ?
	function() { alert("Привет!"); } :
	function() { alert("Здравствуйте!"); };

welcome();










