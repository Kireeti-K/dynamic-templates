import StyleSystem from '../components/styles/styles';

export default class Item {
    constructor(parent) {
        this.parent = parent;
        this.styling = new StyleSystem();
    }
}
