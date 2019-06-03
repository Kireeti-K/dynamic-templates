/* eslint-disable import/prefer-default-export */
import { Item } from '../internal';

export class Element extends Item {
    constructor() {
        super();
        this.data = { static: true };
    }
}
