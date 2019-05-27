/* eslint-disable class-methods-use-this */
import Item from './Item';
import DynamicContainerComponent from '../components/DynamicContainer.vue';


export default class Container extends Item {
    constructor(parent, children = null) {
        super(parent);
        this.children = children != null ? children : [];
        this.component = DynamicContainerComponent;
    }

    addChild(child) {
        this.children.push(child);
        child.setParent(this);
    }

    deleteChild(child) {
        this.children = this.children.filter(c => c.id !== child.id);
    }
}
