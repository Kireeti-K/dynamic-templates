/* eslint-disable import/prefer-default-export */
import { Container, TableCellContainer } from '../internal';
import DynamicTable from '../components/DynamicTable.vue';

export class TableContainer extends Container {
    constructor() {
        super();
        this.component = DynamicTable;
        this.static = true;
        this.rows = [];
        this.rowsize = 3;
        this.columnsize = 2;
        for (let j = 0; j < this.rowsize; j += 1) {
            const trow = [];
            for (let i = 0; i < this.columnsize; i += 1) {
                trow.push(new TableCellContainer());
            }
            this.rows.push(trow);
        }
    }
}
