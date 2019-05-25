import { randomString } from '../utils/string';

export default class Item {
    constructor() {
        this.id = this.createContainerId();
        this.parent = null;
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
}
