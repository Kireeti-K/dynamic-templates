import Container from './Container';
import DynamicTable from '../components/DynamicTable.vue';

console.log('Container ', Container);
console.log('Dynamic Table ', DynamicTable);

export default class TableContainer extends Container {
    constructor() {
        super();
        this.component = DynamicTable;
        this.static = true;
        this.rows = 2;
        this.columns = 2;
    }
}
