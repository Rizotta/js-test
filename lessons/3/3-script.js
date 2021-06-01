'use strict';
// 4267 => 4289 - быки 2 коровы 0;
// 4267 => 4276 - быки 2 коровы 2;

let generatedNumbers = [];
let attemptsCount = 0;

function resetGame() {
    attemptsCount = 0;
    generatedNumbers = [];

    while (generatedNumbers.length < 4) {
        const part = Math.floor(Math.random() * 10);
        if (!generatedNumbers.includes(part)) generatedNumbers.push(part);
    }

    console.log(generatedNumbers);
}

function startGame() {
    while (true) {
        const guess = prompt('Угадайте 4 разных целых положительных числа, загаданных компьютером. Введите -1 чтобы выйти');

        if (guess === '-1') return alert('Game Over');

        if (!isValidGuess(guess)) continue;

        attemptsCount++;

        const result = getGuessResult(guess);

        if (result[0] !== 4) {
            alert('Быки: ' + result[0] + ' Коровы: ' + result[1]);
            continue;
        }

        alert('Поздравляем! Вы угадали все цифры. Количество попыток - ' + attemptsCount);

        if (!confirm('Хотите сыграть еще раз?')) {
            return alert('До свидания!');
        }

        resetGame();
    }
}

function isValidGuess(guess) {
    if (guess.length !== 4) return false;

    for (let i = 0; i < guess.length; i++) {
        if (isNaN(parseInt(guess[i]))) return false;
    }

    return true;
}

function getGuessResult(guess) {
    const result = [0, 0];

    for (let i = 0; i < guess.length; i++) {
        if (+guess[i] === generatedNumbers[i]) {
            result[0]++;
        } else if (generatedNumbers.includes(+guess[i])) {
            result[1]++;
        }
    }

    return result;
}

resetGame();
startGame();

// [
//     ['item1', 4, 400],
//     ['item2', 1, 1000],
// ]
