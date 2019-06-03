/* eslint-disable import/prefer-default-export */
import { Container, TextElement } from '../internal';

export class TableCellContainer extends Container {
    constructor() {
        super();
        this.addChild(new TextElement());
        this.styles.inputStyles[1].inputs[0].value = 10;
    }

    serialized() {
        const result = {};
        result.objectType = 'TableCellContainer';
        result.styles = this.styles.computedStyles;
        result.child = this.children[0].serialized();
        return result;
    }

    deserialize(config) {
        this.styles.decompute(config.styles);
        this.children[0].deserialize(config);
    }
}
