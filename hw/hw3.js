"use strict";


askTask();

// Общая функция с выбором задания
function askTask() {
    let task;
    do {
        task = +prompt('Введите номер задания для отображения в консоли \n1 - простые числа от 0 до 100 ' +
            '\n2 - массив корзины товаров и общая сумма \n3 - числа от 0 до 9 \n4 - пирамида \n0 - выход');
        console.clear();
        switch (task) {
            case 1:
                showSimpleNumbers(100);
                break;
            case 2:
                showBasket();
                break;
            case 3:
                showAllNumber(9);
                break;
            case 4:
                showPyramid(20);
                break;
            default:
                alert('Выход');
                task = 0;
        }
    } while (task !== 0)
}

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
function showSimpleNumbers(maxNum) {
    let num = 0;
    while (num <= maxNum) {
        if (isSimpleNumber(num)) {
            console.log(num);
        }
        num++;
    }
}

function isSimpleNumber(mainNum) {
    let helpNum = mainNum - 1;
    if (mainNum < 2) {
        return false;
    } else {
        while (helpNum > 1) {
            if (mainNum % helpNum === 0) {
                return false;
            }
            helpNum--;
        }
    }
    return true;
}

// 2. С этого урока начинаем работать с функционалом интернет-магазина.
// Предположим, есть сущность корзины. Необходимо реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

function showBasket() {
    let items = [
        ['телефон', 2, 10],
        ['компьютер', 3, 100],
        ['наушники', 5, 20],
    ];
    console.log(items);
    console.log('Общая цена: ' + countBasketPrice(items)); // sum = 20 + 300 + 100 = 420
}

function countBasketPrice(arr) {
    let price = 0;
    arr.forEach(function (item) {
        price = price + item[1] * item[2];
    });
    return price;
}

// 3.* Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так: // for(…){// здесь пусто}

function showAllNumber(maxNum) {
    for (let i = 0; i <= maxNum; console.log(i++)) {
    }
}

// 4.* Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов:
// x
// xx
// xxx

function showPyramid(maxNum) {
    let col;
    for (let row = 1; row <= maxNum; row++) {
        let str = '';
        col = row;
        while (col > 0) {
            str += '*'
            col--;
        }
        console.log(str);
    }
}