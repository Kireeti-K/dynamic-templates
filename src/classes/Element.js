import Item from './Item';

export default class Element extends Item {
    constructor(data, parent) {
        super(parent);
        /*
        if (parent == null) {
            throw new Error('Item must have a parent');
        }
        */
        // this.type = type;
        this.data = data;
    }
}
