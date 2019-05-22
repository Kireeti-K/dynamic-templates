/* eslint-disable class-methods-use-this */
import { randomString } from '../utils/string';

export default class Container {
    constructor() {
        this.id = this.createContainerId();
        this.children = {};
        this.childOrder = [];
        this.isFocused = false;
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
