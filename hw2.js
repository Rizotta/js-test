"use strict";

/*   1. Дан код. Почему код даёт именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3

Ответ:
1) В первом случае у нас префиксная форма инкремента, поэтому сначала прибавляется единица, а затем возвращается значение. В итоге a === 2
2) Во втором случае постфиксная форма, поэтому сначала возвращается значение b === 1, а только потом прибавляется единица. В итоге b === 2
3) При переходе на третью строку у нас уже а === 2 (с 1 пункта), дальше происходит префиксный инкремент, затем 2 + 3. В итоге a === 3
4) На четвёртой строке у нас уже b === 2 (cо 2 пункта), дальше с постфиксным ингрементом сначала возвращаем значение 2 + 2, а после увеличиваем b на 1. В итоге b === 3
5) C п. 3 и п.4 имеем в итоге a === 3 и b === 3
*/

/*   2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);

Ответ: 5, т.к. x = 1 + (2 * 2) = 5
*/

// Далее идут задания 3 - 8
let task = +prompt('Введите номер задания, которое хотите выполнить. \n3 - выражение над a и b \n4 - вывод от а до 15' +
    '\n5 - выполнение арифметических операций \n8 - возвести число в степень');
let result;

switch (task) {
    case 3:
        dependOfSign();
        break;

    case 4:
        outputFromNumberToFinish();
        break;

    case 5:
        let operation = prompt('Введите символ нужной операции (+, -, *, /)');
        if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
            alert('Вы не указали операцию. Выход');
            break;
        }

        let arg1 = prompt('Введите первое число');
        if (arg1 === '') {
            alert('Вы не указали первое число. Выход.');
            break;
        }

        let arg2 = prompt('Введите второе число');
        if (arg2 === '') {
            alert('Вы не указали второе число. Выход.');
            break;
        }

        result = mathOperation(+arg1, +arg2, operation);
        alert(`${arg1} ${operation} ${arg2} = ${result}`);
        break;

    case 8:
        let val = +prompt('Введите число');
        let pow = +prompt('Введите степень');
        result = power(val, pow);
        if (result) {
            alert(`${val} в степени ${pow} = ${result}`);
        }
        break;

    default:
        alert('Вы не выбрали задание. Выход');
}

/*   3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность;
- если а и b отрицательные, вывести их произведение;
- если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
 */
function dependOfSign() {
    let a = +prompt('Введите целое число a = ');
    let b = +prompt('Введите целое число b = ');
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return alert('Необходимо было ввести целые числа. Выход.');
    }
    if (a >= 0 && b >= 0) {
        return alert(`Оба числа положительные, выводим их разность. ${a} - ${b} = ${a - b}`);
    } else if (a < 0 && b < 0) {
        return alert(`Оба числа отрицательные, выводим их произведение. ${a} * ${b} = ${a * b}`);
    } else {
        return alert(`Числа разных знаков, выводим их сумму. ${a} + ${b} = ${a + b}`);
    }
}

/*   4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15 */
function outputFromNumberToFinish() {
    let a = +prompt('Ввведите число от 0 до 15. После этого будет вывод чисел от введённого числа до 15');
    switch (a) {
        case 0:
            alert(a++);
        case 1:
            alert(a++);
        case 2:
            alert(a++);
        case 3:
            alert(a++);
        case 4:
            alert(a++);
        case 5:
            alert(a++);
        case 6:
            alert(a++);
        case 7:
            alert(a++);
        case 8:
            alert(a++);
        case 9:
            alert(a++);
        case 10:
            alert(a++);
        case 11:
            alert(a++);
        case 12:
            alert(a++);
        case 13:
            alert(a++);
        case 14:
            alert(a++);
        case 15:
            alert(a);
            break;
        default:
            alert('Вы не ввели подходящее число. Выход.');
            break;
    }
}

/* 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. */

function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

/*  6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/
function mathOperation(arg1, arg2, operation) {
    let result;
    switch (operation) {
        case '+':
            result = sum(arg1, arg2);
            break;
        case '-':
            result = minus(arg1, arg2);
            break;
        case '*':
            result = multiplication(arg1, arg2);
            break;
        case '/':
            result = division(arg1, arg2);
            break;
        default:
            return alert('Вы не указали операцию. Выход');
    }
    return result;
}

/*   7*. Сравнить Null и 0. Попробуйте объяснить результат.
null - это отсутствие значения, а 0 - это наличие определённого значения равного нулю.

Ответ.
Обратимся к спецификации ECMA.
1) Сравнение на > или < возвращает false.
В случае сравнения на > или < операторы проходят через "абстрактный алгоритм сравнения для отношений" ToPrimitive().
Для Null и обычного числа 0 операция ToPrimitive() первых шагах не производит никаких преобразований, но дальше
происходит преобразование левой и правой части выражения к типу Number, т.е. Null преобразуется к +0.
В итоге происходит сравнение 0 и 0, они равны друг другу, поэтому сравнение на > или < выдаёт false.

2) Сравнение на == возвращает false.
Оператор == использует "абстрактный алгоритм сравнения для равенств".
В нём мы смотрим, что тип Null отличается от типа значения 0 (Number) и false дальше возвращается как значение по умолчанию.

3) Сравнение на >= или <= возвращает true.
Как работает оператор >=: если null < 0 (см. п.1) принимает значение false, то null >= 0 принимает значение true.
Аналогично с <=: если null > 0 (см. п.1) принимает значение false, то null <= 0 принимает значение true.
Предположительно так сделано для оптимизации вычислений. Понять и простить.

4) Сравнение на === возвращает false.
Здесь идёт сравнение с учётом типов, типы Null и Number не равны.

5) Сравнение !=  возвращает true.
Противоположность п.2, смотрим типы значений.

6) Сравнение на !== возвращает true.
Противоположность п.4., сравнение с учётом типа.

подсмотрено на https://habr.com/ru/company/ruvds/blog/337732/
*/

/*   8*. С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень. */
function power(val, pow) {
    if (pow < 0 || !Number.isInteger(pow)) {
        return alert('Необходимо было указать целую не отрицательную степень. Выход.');
    }
    if (pow === 0) {
        return 1;
    }
    if (pow === 1) {
        return val;
    }
    return val * power(val, --pow);
}