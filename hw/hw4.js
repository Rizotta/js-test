"use strict";

askTask();

// Общая функция с выбором задания
function askTask() {
    let task;
    do {
        task = +prompt('Введите номер задания для отображения в консоли \n1 - преобразовать число в объект ' +
            '\n2 - корзина \n0 - выход');
        console.clear();
        switch (task) {
            case 1:
                showObject();
                break;
            case 2:
                showBasket();
                break;
            default:
                alert('Выход');
                task = 0;
        }
    } while (task !== 0)
}

/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект:
{'единицы': 5, 'десятки': 4, 'сотни': 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function showObject() {
    let num = prompt('Введите число от 0 до 999');
    console.log(`Вы ввели: ${num}`);
    console.log(numberToObject(+num));
}

function numberToObject(num) {
    if (num < 0 || num > 999 || !Number.isInteger(num)) {
        return {};
    }

    return {
        'единицы': num % 10,
        'десятки': Math.trunc(num / 10) % 10,
        'сотни': Math.trunc(num / 100),
    };
}

/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

function showBasket() {
    let items = {
        itemList: [
            ['телефон', 2, 10],
            ['компьютер', 3, 100],
            ['наушники', 5, 20],
        ],
        countPrice() {
            return this.itemList.reduce(function (totalPrice, currentItem) {
                return totalPrice + currentItem[1] * currentItem[2];
            }, 0);
        }
    }

    console.log(items.itemList);
    console.log(items.countPrice());
}