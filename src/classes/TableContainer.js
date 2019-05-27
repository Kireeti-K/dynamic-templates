/* eslint-disable import/prefer-default-export */
import { Container, TableCellContainer } from '../internal';
import DynamicTable from '../components/DynamicTable.vue';
import DynamicTableComposer from '../components/composer/DynamicTableComposer.vue';

export class TableContainer extends Container {
    constructor() {
        super();
        this.component = DynamicTable;
        this.composer = DynamicTableComposer;
        this.static = true;
        this.rows = [];
        this.rowSize = 3;
        this.columnSize = 2;
        for (let j = 0; j < this.rowSize; j += 1) {
            const trow = [];
            for (let i = 0; i < this.columnSize; i += 1) {
                const tcell = new TableCellContainer();
                trow.push(tcell);
                this.addChild(tcell);
            }
            this.rows.push(trow);
        }
    }

    recomputeChildren() {
        this.recomputeChildren.splice(0);
        for (let j = 0; j < this.rowSize; j += 1) {
            for (let i = 0; i < this.columnSize; i += 1) {
                this.addChild(this.rows[i][j]);
            }
        }
    }

    addNewRow() {
        const newRow = [];
        for (let i = 0; i < this.columnsize; i += 1) {
            const tcell = new TableCellContainer();
            newRow.push(tcell);
            this.addChild(tcell);
        }
        this.rows.push(newRow);
        this.rowsize += 1;
    }

    addNewColumn() {
        for (let i = 0; i < this.rowSize; i += 1) {
            const tcell = new TableCellContainer();
            this.rows[i].push(tcell);
            this.addChild(tcell);
        }
        this.columnsize += 1;
    }

    deleteRow(n) {
        this.rows.splice(n, 1);
        this.rowsize -= 1;
        this.recomputeChildren();
    }

    deleteColumn(n) {
        for (let i = 0; i < this.rowsize; i += 1) {
            this.rows[i].splice(n, 1);
        }
        this.columnSize -= 1;
        this.recomputeChildren();
    }
}
