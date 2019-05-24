/* eslint-disable class-methods-use-this */
import Item from './Item';
import DynamicContainerComponent from '../components/DynamicContainer.vue';


export default class Container extends Item {
    constructor(parent, children = null) {
        super(parent);
        this.children = children != null ? children : [];
        this.component = DynamicContainerComponent;
    }

    recomputeStyles() {
        const parentStyles = this.styles.recompute();
        if (this.parent && parentStyles) {
            console.log('Adding padding styles to parent ', this.parent.id);
            this.parent.setStyles(parentStyles);
        }
    }
}
