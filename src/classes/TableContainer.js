import Container from './Container';
import DynamicTable from '../components/DynamicTable.vue'

export default class TableContainer extends Container {
    constructor() {
        super();
        this.component = DynamicTable;
        this.static = true;
        this.rows = 2;
        this.columns = 2;
    }
}
