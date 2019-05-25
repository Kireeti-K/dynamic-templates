import StyleSystem from '../components/styles/styles';
import { randomString } from '../utils/string';

export default class Item {
    constructor() {
        this.parent = null;
        this.styles = new StyleSystem();
        this.id = this.createContainerId();
    }

    // eslint-disable-next-line class-methods-use-this
    createContainerId() {
        return `${randomString(4)}-${randomString(4)}`;
    }

    setParent(parent) {
        this.parent = parent;
    }

    setStyles(styles) {
        this.styles.mergeComputedStyles(styles);
    }
}
