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
        // this.data = { imageUrl: '', width: '128', height: '128' };
        this.data.imageUrl = 'http://playweb.eckovation.com/bhagyasri2/wp-content/uploads/2018/05/golden-retriever.jpg';
        this.data.width = 0;
        this.data.height = 0;
        // this.data.aspectRatio = 1;
        this.displayName = 'Image';
        this.component = DynamicImage;
        this.composer = DynamicImageComposer;
        this.styles = new StyleSystem([
            new MarginStyle(),
        ]);
    }

    serialized() {
        const result = {};
        result.objectType = 'ImageElement';
        result.data = Object.assign({}, this.data);
        result.styles = this.styles.computedStyles;
        return result;
    }

    deserialize(config) {
        this.data = Object.assign({}, config.data);
        this.styles.decompute(config.styles);
    }
}
