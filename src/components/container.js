/* eslint-disable class-methods-use-this */
import { randomString } from '../utils/string';
import StyleSystem from './styles/styles';

export default class Container {
    constructor() {
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
