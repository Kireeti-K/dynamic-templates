import StyleSystem from '../components/styles/styles';
import { randomString } from '../utils/string';

export default class Item {
    constructor(parent) {
        this.parent = parent;
        this.styles = new StyleSystem();
        this.id = this.createContainerId();
    }

    // eslint-disable-next-line class-methods-use-this
    createContainerId() {
        return `${randomString(4)}-${randomString(4)}`;
    }

    getId() {
        return this.uuid;
    }

    setStyles(styles) {
        this.styles.mergeComputedStyles(styles);
    }
}
