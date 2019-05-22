import WidthStyleComponent from './WidthStyleComponent.vue';

export class BaseStyle {
    getComputedValue() {
        return this.inputs.map(input => input.getComputedValue());
    }
}

export class BaseInputStyle {
}

export class InputStyle extends BaseInputStyle {
    constructor(data) {
        super();
        Object.keys(data).forEach((key) => { this[key] = data[key]; });
    }
}

export class WidthStyle extends BaseStyle {
    constructor() {
        super();
        this.label = 'Width';
        this.attr = 'width';
        this.component = WidthStyleComponent;
        this.inputs = [
            new InputStyle({
                label: 'Width Type',
                attr: null,
                options: [{ id: 'percent', text: 'Percentage' }, { id: 'pixel', text: 'Pixels' }],
                value: 'percent',
                getComputedValue: () => `${this.value}px`,
            }),
            new InputStyle({
                label: 'Width',
                attr: 'width',
                value: 100,
                getComputedValue: () => this.value,
            }),
        ];
    }

    getComputedValue() {
        const widthType = this.inputs.filter(input => input.label === 'Width Type')[0];
        const width = this.inputs.filter(input => input.label === 'Width')[0];
        return { width: widthType.value === 'percent' ? `${width.value}%` : `${width.value}px` };
    }
}

// individual inputStyle can return key-value pair
// or array of key-value pairs through getComputedValue

export default class StyleSystem {
    constructor() {
        this.inputStyles = [
            new WidthStyle(),
        ];
        this.computedStyles = {
            width: '100%',
            backgroundColor: '#fff',
            padding: '0px',
            margin: '0px',
        };
    }

    recompute() {
        this.computedStyles = this.inputStyles.map(inputStyle => inputStyle.getComputedValue());
    }
}

// structure of inputStyle
// {label: "Width, value: "100%", }
