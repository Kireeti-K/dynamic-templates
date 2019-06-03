/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import {
    Item, StyleSystem, WidthStyle, MarginStyle,
    FlexStyle, removeFlexIfWidth, TableContainer, ImageElement, TextElement
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
        console.log('ChildrenStyles ', JSON.stringify(childrenStyles));
        console.log(this.id);
        if (this.children && childrenStyles) {
            this.children.forEach(child => child.setStyles(childrenStyles));
        }
    }

    serialized() {
        const result = {};
        result.objectType = 'Container';
        result.styles = this.styles.computedStyles;
        result.children = [];
        for (let i = 0; i < this.children.length; i += 1) {
            result.children.push(this.children[i].serialized());
        }
        return result;
    }

    deserialize(config) {
        this.children.splice(0);
        // to-do deserialize styles
        this.styles.decompute(config.styles);
        for (let i = 0; i < config.children.length; i += 1) {
            const DataType = this.getConstuctor(config.children[i].objectType);
            const tchild = new DataType();
            tchild.deserialize(config.children[i]);
            this.addChild(tchild);
        }
    }

    getConstuctor(objectType) {
        let itemClass = null;
        switch (objectType) {
        case 'TextElement':
            itemClass = TextElement; break;
        case 'ImageElement':
            itemClass = ImageElement; break;
        case 'TableContainer':
            itemClass = TableContainer; break;
        default:
            itemClass = Container; break;
        }
        return itemClass;
    }
}
