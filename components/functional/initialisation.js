import { Board } from './board';

export class Initialisation {
    constructor(data) {
        this.data = data;
    }

    generateBoard() {
        if (!this.data.boardState) {
            this.data.boardState = {};

            var rowName;
            for (i = 1; i <= 100; i++) {
                rowName = "row" + i;
                this.data.boardState[rowName] = new Array(100).fill(0);
            }
        }
        return new Board(this.data.boardState);
    }
}