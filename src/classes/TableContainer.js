/* eslint-disable import/prefer-default-export */
import { Container } from '../internal';
import DynamicTable from '../components/DynamicTable.vue';

export class TableContainer extends Container {
    constructor() {
        super();
        this.component = DynamicTable;
        this.static = true;
        this.rows = 2;
        this.columns = 2;
    }
}
