/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import {
    Element, StyleSystem, WidthStyle, MarginStyle,
    TextAlignStyle, FontStyle,
} from '../internal';
import DynamicTextComponent from '../components/DynamicText.vue';
import DynamicTextComposer from '../components/composer/DynamicTextComposer.vue';
import { randomString } from '../utils/string';


export class TextElement extends Element {
    constructor(editingMode) {
        super(editingMode);
        // this.data = { text: 'text', static: true };
        this.data.text = 'text';

        this.displayName = 'Text';
        this.component = DynamicTextComponent;
        this.composer = DynamicTextComposer;
        this.styles = new StyleSystem([
            new WidthStyle(),
            new MarginStyle(),
            new TextAlignStyle(),
            new FontStyle(),
        ]);
        this.data.text = randomString(4);
    }

    serialized() {
        const result = {};
        result.objectType = 'TextElement';
        // result.data = this.data.text;
        result.data = Object.assign({}, this.data);
        result.styles = this.styles.computedStyles;
        return result;
    }

    // scrap this probably
    static construct(config) {
        const item = new TextElement();
        item.deserialize(config);
    }

    deserialize(config) {
        this.data = Object.assign({}, config.data);
        this.styles.decompute(config.styles);
    }
}
