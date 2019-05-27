/* eslint-disable import/prefer-default-export */
import { Container, TextElement } from '../internal';

export class TableCellContainer extends Container {
    constructor() {
        super();
        this.addChild(new TextElement());
        this.styles.inputStyles[1].inputs[0].value = 10;
    }
}
