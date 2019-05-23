import Item from './Item';

export default class Element extends Item {
    constructor(type, data, parent, styling) {
        super(parent, styling);
        this.type = type;
        this.data = data;
    }
}
