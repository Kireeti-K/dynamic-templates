/* eslint-disable class-methods-use-this */
import { randomString } from '../utils/string';

export default class Container {
    constructor() {
        this.id = this.createContainerId();
        this.children = {};
        this.childOrder = [];
        this.isFocused = false;
        this.styles = {
            inputStyles: {
                width: '100%',
                backgroundColor: '#fff',
                padding: 0,
                margin: 0,
            },
            computedStyles: {
                width: '100%',
                backgroundColor: '#fff',
                padding: '0px',
                margin: '0px',
            },
        };
    }

    createContainerId() {
        return `${randomString(4)}-${randomString(4)}`;
    }

    getId() {
        return this.uuid;
    }

    recompute() {
        if (typeof this.styles.computedStyles.width === 'number') {
            this.styles.computedStyles.width = `${this.styles.inputStyles.width}px`;
        } else {
            this.styles.computedStyles.width = this.styles.inputStyles.width;
        }

        this.styles.computedStyles.backgroundColor = this.styles.inputStyles.backgroundColor;

        if (typeof this.styles.computedStyles.padding === 'number') {
            this.styles.computedStyles.padding = `${this.styles.inputStyles.padding}px`;
        } else {
            this.styles.computedStyles.padding = this.styles.inputStyles.padding;
        }

        if (typeof this.styles.computedStyles.margin === 'number') {
            this.styles.computedStyles.margin = `${this.styles.inputStyles.margin}px`;
        } else {
            this.styles.computedStyles.margin = this.styles.inputStyles.margin;
        }
    }
}
