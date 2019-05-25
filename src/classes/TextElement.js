/* eslint-disable linebreak-style */
import Element from './Element';
import DynamicTextComponent from '../components/DynamicText.vue';
import StyleSystem, { WidthStyle, MarginStyle, FlexStyle } from '../components/styles/styles';

export default class TextElement extends Element {
    constructor(parent) {
        super(parent);
        this.component = DynamicTextComponent;
        this.data = 'title';
        this.styles = new StyleSystem([
            new WidthStyle(),
            new MarginStyle(),
        ]);
    }
}
