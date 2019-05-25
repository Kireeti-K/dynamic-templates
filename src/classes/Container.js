/* eslint-disable class-methods-use-this */
import Item from './Item';
import DynamicContainerComponent from '../components/DynamicContainer.vue';


export default class Container extends Item {
    constructor(parent, children = null) {
        super(parent);
        this.children = children != null ? children : [];
        // this.childOrder = [];
        // this.isFocused = false;
        this.component = DynamicContainerComponent;
    }


    recomputeStyles() {
        this.styles.recompute();
    }
}
