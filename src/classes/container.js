/* eslint-disable class-methods-use-this */
import Item from './Item';


export default class Container extends Item {
    constructor(parent, children = null) {
        super(parent);
        this.children = children != null ? children : [];
        // this.childOrder = [];
        // this.isFocused = false;
    }


    recomputeStyles() {
        this.styles.recompute();
    }
}
