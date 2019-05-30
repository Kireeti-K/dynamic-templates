/* eslint-disable import/prefer-default-export */
import { randomString } from '../utils/string';


const colors = ['#F9F7F3', '#E4F4FD', '#D0EAF6', '#FAF6E6', '#FDEDE5', '#F8D8DA', '#D6E4DF'];

export class Item {
    constructor(editingMode = false) {
        this.id = this.createContainerId();
        this.parent = null;
        this.displayName = 'Item';
        // each item should declare its own StyleSystem
        this.editingMode = editingMode;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    // eslint-disable-next-line class-methods-use-this
    createContainerId() {
        return `${randomString(4)}-${randomString(4)}`;
    }

    setParent(parent) {
        this.parent = parent;
    }

    setStyles(styles) {
        this.styles.mergeComputedStyles(styles);
    }

    recomputeStyles() {
        // this item styles
        this.styles.recompute();

        // parent styles
        const parentStyles = this.styles.recomputeParentStyles();
        if (this.parent && parentStyles) {
            this.parent.setStyles(parentStyles);
        }
    }
}
