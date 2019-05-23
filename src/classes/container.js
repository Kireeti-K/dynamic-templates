/* eslint-disable class-methods-use-this */
import { randomString } from '../utils/string';
import Item from './Item';

export default class Container extends Item {
    constructor(parent, styling) {
        super(parent, styling);
        this.id = this.createContainerId();
        this.children = [];
        this.styles = {
            formData: {
                width: '100%',
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            styleObject: {},
        };
    }

    createContainerId() {
        return `${randomString(4)}-${randomString(4)}`;
    }

    getId() {
        return this.uuid;
    }
}
