/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import {
    Element, StyleSystem, MarginStyle,
} from '../internal';
import DynamicImage from '../components/DynamicImage.vue';
import DynamicImageComposer from '../components/composer/DynamicImageComposer.vue';


export class ImageElement extends Element {
    constructor() {
        super();
        this.data = { imageUrl: '', width: '128', height: '128' };
        this.displayName = 'Image';
        this.component = DynamicImage;
        this.composer = DynamicImageComposer;
        this.styles = new StyleSystem([
            new MarginStyle(),
        ]);
    }
}
