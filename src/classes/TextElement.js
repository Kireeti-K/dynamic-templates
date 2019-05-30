/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import {
    Element, StyleSystem, WidthStyle, MarginStyle,
} from '../internal';
import DynamicTextComponent from '../components/DynamicText.vue';
import DynamicTextComposer from '../components/composer/DynamicTextComposer.vue';
import { randomString } from '../utils/string';


export class TextElement extends Element {
    constructor() {
        super();
        this.data = { text: 'text' };
        this.displayName = 'Text';
        this.component = DynamicTextComponent;
        this.composer = DynamicTextComposer;
        this.styles = new StyleSystem([
            new WidthStyle(),
            new MarginStyle(),
        ]);
        this.data.text = randomString(4);
    }
}
