export class Board {
    constructor(boardData) {
        this.data = boardData;
    }

    changeCell(pos, newVal) {
        var i = pos[0] - 1;
        var rowNameReassign = "row" + pos[1];

        var reassign = this.data[rowNameReassign];
        reassign[i] = newVal;

        this.data[rowNameReassign] = reassign;
    }
}