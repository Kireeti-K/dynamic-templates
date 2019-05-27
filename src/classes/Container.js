/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import { Item } from '../internal';
import DynamicContainer from '../components/DynamicContainer.vue';
import DynamicContainerComposer from '../components/composer/DynamicContainerComposer.vue';
import StyleSystem, { WidthStyle, MarginStyle, FlexStyle } from '../components/styles/styles';


export class Container extends Item {
    constructor() {
        super();
        this.children = [];
        this.component = DynamicContainer;
        this.composer = DynamicContainerComposer;
        this.styles = new StyleSystem([
            new WidthStyle(),
            new MarginStyle(),
            new FlexStyle(),
        ]);
    }

    addChild(child) {
        this.children.push(child);
        child.setParent(this);
    }

    deleteChild(child) {
        this.children = this.children.filter(c => c.id !== child.id);
    }
}
