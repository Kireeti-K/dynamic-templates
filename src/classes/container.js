/* eslint-disable class-methods-use-this */
import { randomString } from '../utils/string';
import Item from './Item';


export default class Container extends Item {
    constructor(parent, children = null) {
        super(parent);
        this.children = children != null ? children : [];
        // this.id = this.createContainerId();
        // this.childOrder = [];
        // this.isFocused = false;
    }

    createContainerId() {
        return `${randomString(4)}-${randomString(4)}`;
    }

    getId() {
        return this.uuid;
    }

    recomputeStyles() {
        this.styles.recompute();
    }
}
