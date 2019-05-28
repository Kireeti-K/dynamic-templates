/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import {
    Element, StyleSystem, WidthStyle, MarginStyle,
} from '../internal';
import DynamicTextComponent from '../components/DynamicText.vue';
import DynamicTextComposer from '../components/composer/DynamicTextComposer.vue';


export class TextElement extends Element {
    constructor(editingMode) {
        super(editingMode);
        this.data = 'title';
        this.component = DynamicTextComponent;
        this.composer = DynamicTextComposer;
        this.styles = new StyleSystem([
            new WidthStyle(),
            new MarginStyle(),
        ]);
    }
}
