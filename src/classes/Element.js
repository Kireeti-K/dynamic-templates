/* eslint-disable import/prefer-default-export */
import { Item } from '../internal';

export class Element extends Item {
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
