'use strict';
// let i = 0;
//
// while (i < 3) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 3);

// for (var i = 0; i < 3; i++) {
// // for (var i = 0, b = 10; i < 3 && b > 3; i++, b--) {
//     console.log(i, b);
// }

// while (true) {
//     // some code
// }
//
// do {
//     // some code
// } while (true);
//
// for (;;) {
//     // some code
// }

// for (let i = 0;; i++) {
//     if (i > 10) break; // Выход из цикла
//     if (i % 2 === 1) continue; // завершение итерации
//     console.log(i);
// }

// outerLoop: for (let a = 0; a < 3; a++) {
//         console.log('Upper cycle is running');
//         for (let b = 0; b < 3; b++) {
//             console.log('Inner cycle is running');
//             if (b >= 1) {
//                 console.log('Breaking inner cycle');
//                 break outerLoop;
//             }
//         }
//     }

// let arr = new Array(4, 6, 7);
// let arr = [4, 6, 7];
// // console.log(arr[1]);
// // console.log(arr[119]);
// console.log(arr, arr.length);
// arr.length = 100;
// arr[50] = 50;
// console.log(arr, arr.length);
// console.log(arr[97]);

// let arr = [
//     [1, 5, 'hi', false],          // 0
//     [55, true, 1, 100],           // 1
//     [true, 'string', NaN, 32],    // 2
// ];

// console.log(arr[2][1]);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const index in arr) {
//     console.log(arr[index]);
// }

// for (const value of arr) {
//     console.log(value);
// }

// arr.forEach(function (item, index, array) {
//     // console.log(item, index, array);
//     console.log(item);
// });

/** find/findIndex */ /*
Метод «arr.find(callback[, thisArg])» возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции, иначе undefined.
Метод «arr.find(callback[, thisArg])»  возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции, иначе -1.
let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];
let user = users.find(item => item.id == 1);
console.log(user.name); // Вася
console.log(users.findIndex(item => item.id == 2)); // 1
*/

/** indexOf/lastIndexOf и includes */ /*
Методы arr.indexOf, arr.lastIndexOf и arr.includes имеют одинаковый синтаксис и делают по сути то же самое,
что и их строковые аналоги, но работают с элементами вместо символов (используется строгое сравнение ===).
    arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, иначе -1.
    arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
    arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
let arr = [1, 0, false];
console.log( arr.indexOf(0) ); // 1
console.log( arr.includes(0) ); // true
*/

/** filter */ /* Метод «arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию.
var arr = [1, -1, 2, -2, 3];
var positiveArr = arr.filter(function(number) {
    return number > 0;
});
alert( positiveArr ); // 1,2,3
*/

/** map */ /* Метод «arr.map(callback[, thisArg])» используется для трансформации массива.
var names = ['HTML', 'CSS', 'JavaScript'];
var nameLengths = names.map(function(name) {
  return name.length;
});
alert( nameLengths ); // 4,3,10
*/

/** some/every */ /*
Метод «arr.some(callback[, thisArg])» возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.
Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback вернёт true для каждого элемента arr.

var arr = [1, -1, 2, -2, 3];
function isPositive(number) {
  return number > 0;
}
alert( arr.some(isPositive) ); // true, есть хоть одно положительное
alert( arr.every(isPositive) ); // false, не все положительные
*/

/** reduce/reduceRight */ /*
Метод «arr.reduce(callback[, initialValue])» используется для последовательной обработки каждого элемента массива
с сохранением промежуточного результата.
Аргументы функции callback(previousValue, currentItem, index, arr):
Пр. 1 (на первой итерации sum = 0, т.к. стоит вторым аргументом reduce):
var arr = [1, 2, 3, 4, 5];
var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);
console.log( result ); // 15

Пр. 2 (т.к. нет второго аргумента reduce, то итерации начинается с первого элемента массива):
var arr = [1, 2, 3, 4, 5];
var result = arr.reduce(function(sum, current) {
  return sum + current
});
console.log( result ); // 15
*/


// let arr = [1, 5, 'hi', false];

// arr[2] = 2;
// arr[arr.length] = 2;
// arr[2] = null;
// delete arr[2];

// console.log(arr);

// let arr = [1, 5, 'hi', false];

// console.log(arr.push('end'), arr);           // 5            [ 1, 5, "hi", false, "end" ]
// console.log(arr.unshift('begin'), arr);      // 6            [ "begin", 1, 5, "hi", false, "end" ]
//
// console.log(arr.pop(), arr);                 // end          [ "begin", 1, 5, "hi", false ]
// console.log(arr.shift(), arr);               // begin        [ 1, 5, "hi", false ]

// console.log(arr.splice(1, 2), arr);          // [ 5, "hi" ]  [ 1, false ]
// console.log(arr.splice(1, 1, 'qwe1'), arr);   // [ false ]   [ 1, "qwe1" ]
// console.log(arr.splice(1, 0, 'qwe2'), arr);   // []          [ 1, "qwe2", "qwe1" ]

// let arr = [1, 5, 'hi', false];
// // let arr2 = arr;
// let arr2 = Array.from(arr);
// arr2.pop();
//
// console.log(arr === arr2);
// console.log(arr, arr2);
