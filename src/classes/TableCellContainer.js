import Container from './Container';
import TextElement from './TextElement';

export default class TableCellContainer extends Container {
    constructor() {
        super();
        this.addChild(new TextElement());
        this.styles.inputStyles[1].inputs[0].value = 10;
    }
}
