/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import {
    Item, StyleSystem, WidthStyle, MarginStyle,
    FlexStyle, removeFlexIfWidth,
} from '../internal';
import DynamicContainer from '../components/DynamicContainer.vue';
import DynamicContainerComposer from '../components/composer/DynamicContainerComposer.vue';


export class Container extends Item {
    constructor(editingMode) {
        super(editingMode);
        this.children = [];
        this.displayName = 'Container';
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

    recomputeStyles() {
        super.recomputeStyles();
        // children styles
        const childrenStyles = this.styles.recomputeChildrenStyles();
        if (this.children && childrenStyles) {
            this.children.forEach(child => child.setStyles(childrenStyles));
        }
    }
}
