<<<<<<< HEAD
/* eslint-disable import/prefer-default-export */
import { Container } from '../internal';
=======
import Container from './Container';
import TextElement from './TextElement';
>>>>>>> composer

export class TableCellContainer extends Container {
    constructor() {
        super();
        this.addChild(new TextElement());
        this.styles.inputStyles[1].inputs[0].value = 10;
    }
}
