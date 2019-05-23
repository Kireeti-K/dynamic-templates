/* eslint-disable class-methods-use-this */
import { randomString } from '../utils/string';
import Item from './Item';
import StyleSystem from '../components/styles/styles';

export default class Container extends Item {
    constructor(parent, styling) {
        super(parent, styling);
        this.id = this.createContainerId();
        this.children = {};
        this.childOrder = [];
        this.isFocused = false;
        this.styles = new StyleSystem();
    }

    createContainerId() {
        return `${randomString(4)}-${randomString(4)}`;
    }

    getId() {
        return this.uuid;
    }

    recomputeStyles() {
        this.styles.recompute();
    }
}
