/* eslint-disable import/prefer-default-export */
import { Container, TableCellContainer } from '../internal';
import DynamicTable from '../components/DynamicTable.vue';
import DynamicTableComposer from '../components/composer/DynamicTableComposer.vue';

export class TableContainer extends Container {
    constructor() {
        super();
        this.component = DynamicTable;
        this.composer = DynamicTableComposer;
        this.displayName = 'Table';
        this.static = true;
        this.data = { rows: [] };
        for (let j = 0; j < 3; j += 1) {
            const trow = [];
            for (let i = 0; i < 2; i += 1) {
                const tcell = new TableCellContainer();
                trow.push(tcell);
                this.addChild(tcell);
            }
            this.data.rows.push(trow);
        }
    }

    recomputeChildren() {
        this.children.splice(0);
        const columnSize = this.data.rows.length > 0 ? this.data.rows[0].length : 0;
        const rowSize = this.data.rows.length;
        for (let i = 0; i < rowSize; i += 1) {
            for (let j = 0; j < columnSize; j += 1) {
                this.addChild(this.data.rows[i][j]);
            }
        }
    }

    addNewRow() {
        const newRow = [];
        const columnSize = this.data.rows.length > 0 ? this.data.rows[0].length : 0;
        for (let i = 0; i < columnSize; i += 1) {
            const tcell = new TableCellContainer();
            newRow.push(tcell);
            this.addChild(tcell);
        }
        this.data.rows.push(newRow);
    }

    addNewColumn() {
        const rowSize = this.data.rows.length;
        for (let i = 0; i < rowSize; i += 1) {
            const tcell = new TableCellContainer();
            this.data.rows[i].push(tcell);
            this.addChild(tcell);
        }
    }

    deleteRow(n) {
        const rowSize = this.data.rows.length;
        if (rowSize < 2) { return; }
        this.data.rows.splice(n, 1);
        this.recomputeChildren();
    }

    deleteColumn(n) {
        const rowSize = this.data.rows.length;
        const columnSize = this.data.rows.length > 0 ? this.data.rows[0].length : 0;
        if (columnSize < 2) { return; }
        for (let i = 0; i < rowSize; i += 1) {
            this.data.rows[i].splice(n, 1);
        }
        this.recomputeChildren();
    }
}
