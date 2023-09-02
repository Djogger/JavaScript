/* Логические операторы. */

// 1) || (или):

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

if (1 || 0) { // работает как if( true || false )
	alert( 'truthy!' );
}

let hour = 9;

if (hour < 10 || hour > 18) {
	alert( 'Офис закрыт.' );
}

hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'Офис закрыт.' ); // это выходной
}

// ИЛИ "||" находит первое истинное значение или возвращает последнее ложное.

alert( 1 || 0 ); // 1
alert( true || 'no matter what' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

// Сокращённое вычисление:

let x;

true || (x = 1);

alert(x); // undefined, потому что (x = 1) не вычисляется.

//--------------------------------------------------------

let y;

false || (y = 1);

alert(y); // 1.

// 2) && (и):

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
	alert( `The time is ${hour}:${minute}` );
}

// Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

alert( 1 && 2 && null && 3 ); // null

alert( 1 && 2 && 3 ); // 3

// 3) ! (не):

alert( !true ); // false
alert( !0 ); // true

// В частности, двойное НЕ !! используют для преобразования значений к логическому типу:

alert( !!"non-empty string" ); // true
alert( !!null ); // false

/*Задание*/

// 1) Первое:

let age = prompt('Age:', '');

if (age == 14 || 14 < age && age < 90 || age == 90) { // 14 <= age && age <= 90
	alert('Находится в диапозоне.');
} else {
	alert('Не находится в диапозоне.');
}

// 2) Второе:

let answer1 = prompt('Классификация:', '');

if (answer1 == '') {
	alert('Отменено.');
} else if (answer1 == 'Админ') {
	let answer2 = prompt('Введите Пароль:', '');

	(answer2 == 'Я главный') ? alert('Здравствуйте!') : (answer2 == null) ? alert('Отменено') : alert('Неверный пароль.')
} else {
	alert('Я Вас не знаю.');
}


/* Операторы нулевого слияния: '??', '??=' */

// Oператор '??' возвращает первый аргумент, если он не null/undefined, иначе второй.

// Представление '??' с помощью знакомых операторов:

let a;
let b = "I DON'T UNDERSTAND! :(";

let result = (a !== null && a !== undefined) ? a : b;

alert(result); // undefined.

// Теперь работа самого '??':

result = a ?? b;

alert(result);


let user;

alert(user ?? "Аноним"); // Аноним (user не существует)

//-----------------------------------------------------

let user1 = "Иван";

alert(user1 ?? "Аноним"); // Иван (user существует)


let firstName = null;
let lastName = undefined;
let nickName = "Суперкодер";

// показывает первое значение, которое определено:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер

// Сравнение с ||:

// также показывает первое истинное значение:
alert(firstName || lastName || nickName || "Аноним"); // Суперкодер

// Нужно учесть, что '??' лучше использовать, чем '||':

// || возвращает первое истинное значение.
// ?? возвращает первое определённое значение.


let height = 0;

alert(height || 100); // 100.
alert(height ?? 100); // 0.


// Приоритет:

let height1 = null;
let width = null;

// Важно использовать круглые скобки:
let area = (height1 ?? 100) * (width ?? 50);

alert(area); // 5000.


// Использование ?? вместе с && или ||:

// let x = 1 && 2 ?? 3; <----- Синтаксическая ошибка.

let z = (1 && 2) ?? 3; // Работает без ошибок.

alert(z); // 2.


// Оператор нулевого присваивания (??=):

// Громоздкий метод:

let userAge = null;

if (userAge === null || userAge === undefined) {
	userAge = 18;
}

alert(userAge); // 18.

// Удобный метод:

// Синтаксис:
// x ??= y

let userAge1 = null;

userAge1 ??= 19;

alert(userAge1); // 19.


let userAge2 = 19;

userAge2 ??= alert("не сработает");
userAge2 ??= 21;
userAge2 ??= null;

alert(userAge2) // По-прежнему 19.