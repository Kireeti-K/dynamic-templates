/* eslint-disable class-methods-use-this */
import Item from './Item';


export default class Container extends Item {
    constructor(parent, children = null) {
        super(parent);
        this.children = children != null ? children : [];
    }

    recomputeStyles() {
        const parentStyles = this.styles.recompute();
        this.parent.setStyles(parentStyles);
    }
}
