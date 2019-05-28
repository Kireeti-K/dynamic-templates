/* eslint-disable import/prefer-default-export */
import { randomString } from '../utils/string';

export class Item {
    constructor() {
        this.id = this.createContainerId();
        this.parent = null;
        this.displayName = 'Item';
        // each item should declare its own StyleSystem
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
