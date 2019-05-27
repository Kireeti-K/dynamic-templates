/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { Element } from '../internal';
import DynamicTextComponent from '../components/DynamicText.vue';
import DynamicTextComposer from '../components/composer/DynamicTextComposer.vue';
import StyleSystem, { WidthStyle, MarginStyle } from '../components/styles/styles';


export class TextElement extends Element {
    constructor() {
        super();
        this.data = 'title';
        this.component = DynamicTextComponent;
        this.composer = DynamicTextComposer;
        this.styles = new StyleSystem([
            new WidthStyle(),
            new MarginStyle(),
        ]);
    }
}
