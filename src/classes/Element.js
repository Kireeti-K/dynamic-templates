/* eslint-disable import/prefer-default-export */
import { Item } from '../internal';

export class Element extends Item {
    constructor(parent) {
        super(parent);
        this.data = '';
    }
}
