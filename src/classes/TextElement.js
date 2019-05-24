/* eslint-disable linebreak-style */
import Element from './Element';
import DynamicTextComponent from '../components/DynamicText.vue';

export default class TextElement extends Element {
    constructor(parent) {
        super(parent);
        /*
        if (parent == null) {
            throw new Error('Item must have a parent');
        }
        */
        this.component = DynamicTextComponent;
        this.data = 'title';
    }
}
