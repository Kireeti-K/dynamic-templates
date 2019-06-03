/* eslint-disable import/prefer-default-export */
import { Container, TableCellContainer } from '../internal';
import DynamicTable from '../components/DynamicTable.vue';
import DynamicTableComposer from '../components/composer/DynamicTableComposer.vue';
import { randomString } from '../utils/string';

function Row() {
    this.id = randomString(4);
}
Row.prototype = [];


export class TableContainer extends Container {
    constructor() {
        super();
        this.component = DynamicTable;
        this.composer = DynamicTableComposer;
        this.displayName = 'Table';
        this.static = true;
        this.data = { rows: [] };
        // this.data.rows = [];
        for (let j = 0; j < 3; j += 1) {
            const trow = new Row();
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
        const newRow = new Row();
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

    moveRow(n, dir) {
        const index = n;
        const newIndex = index + dir;
        // alert('moving '+index+'  by '+dir)
        if ((dir < 0 && index < 1) || (dir > 0 && index > this.data.rows.length - 2)) { return; }
        const trow = this.data.rows[n];
        this.data.rows.splice(index, 1);
        this.data.rows.splice(newIndex, 0, trow);
        console.log('row haha');
    }

    moveColumn(n, dir) {
        const index = n;
        const newIndex = index + dir;
        // alert('moving '+index+'  by '+dir)
        if ((dir < 0 && index < 1) || (dir > 0 && index > this.data.rows.length - 2)) { return; }
        for (let i = 0; i < this.data.rows.length; i += 1) {
            const tcolumn = this.data.rows[i][index];
            this.data.rows[i].splice(index, 1);
            this.data.rows[i].splice(newIndex, 0, tcolumn);
        }
        console.log('column hahaha');
    }

    serialized() {
        const result = {};
        result.objectType = 'TableContainer';
        result.data = { rows: [] };
        for (let i = 0; i < this.data.rows.length; i += 1) {
            const trow = [];
            for (let j = 0; j < this.data.rows[0].length; j += 1) {
                trow.push(this.data.rows[i][j].serialized());
            }
            result.data.rows.push(trow);
        }
        result.styles = this.styles.computedStyles;
        return result;
    }

    deserialize(config) {
        this.styles.decompute(config.styles);
        this.data.rows.splice(0);
        this.children.splice(0);
        for (let i = 0; i < config.data.rows.length; i += 1) {
            const trow = [];
            for (let j = 0; j < config.data.rows[0].length; j += 1) {
                const tcell = new TableCellContainer();
                tcell.deserialize(config.data.rows[i][i]);
                trow.push(tcell);
                this.addChild(tcell);
            }
            this.data.rows.push(trow);
        }
    }
}
