"use strict";

/*
1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
 */

const chess = {
    containerElement: document.querySelector('#chessTable'),
    rowCount: 8,
    colCount: 8,
    colNames: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    rowNames: ['1', '2', '3', '4', '5', '6', '7', '8'],

    renderTable() {
        for (let row = 0; row < this.rowCount + 2; row++) {
            const tr = document.createElement('tr');
            this.containerElement.appendChild(tr);

            for (let col = 0; col < this.colCount + 2; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);
                if (this.isText(row, col)) {
                    td.innerText = this.getText(row, col) ?? '';
                }
                if (this.isBlack(row, col)) {
                    td.classList.add('black');
                }
            }
        }
    },
    isBlack(row, col) {
        const isText = this.isText(row, col);
        if (!isText && ((col % 2 && !(row % 2)) || (!(col % 2) && row % 2))) {
            return true;
        }
    },
    isText(row, col) {
        if (row === 0 || col === 0 || row === this.rowCount + 1 || col === this.colCount + 1) {
            return true;
        }
    },
    getText(row, col) {
        if (col === 0 || col === this.colCount + 1) {
            return this.rowNames[this.rowCount - row];
        } else {
            return this.colNames[col - 1];
        }
    }
}

// Не до конца поняла, почему не работает через addEventListener. Иначе определяет this
// const chessElement = document.querySelector('#renderChessTable');
// chessElement.addEventListener('click', chess.renderTable);
chess.renderTable();