/* eslint-disable linebreak-style */
import Element from './Element';
import Container from './Container';
import DynamicTextComponent from '../components/DynamicText.vue';
import DynamicTextComposer from '../components/composer/DynamicTextComposer.vue';
import StyleSystem, { WidthStyle, MarginStyle, FlexStyle } from '../components/styles/styles';


export default class TextElement extends Element {
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
