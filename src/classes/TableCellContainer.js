/* eslint-disable import/prefer-default-export */
import { Container, TextElement } from '../internal';
import { StyleSystem } from './StyleSystem';
import { BorderStyle, FontStyle } from './Styles';

export class TableCellContainer extends Container {
    constructor() {
        super();
        this.addChild(new TextElement());
        this.styles.inputStyles[1].inputs[0].value = 10;
        this.styles.inputStyles[1].inputs[1].value = 8;
        this.styles = new StyleSystem([new BorderStyle(), new FontStyle()]);
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
        this.children[0].deserialize(config.child);
    }
}
