

export default class Item {
    constructor(parent, styling) {
        this.parent = parent;
        this.styling = styling;
        if (parent == null) {
            throw new Error('Item must have a parent');
        }
    }
}
