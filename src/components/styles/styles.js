import StyleComponent from './StyleComponent.vue';
import MarginStyleComponent from './MarginStyleComponent.vue';
import WidthStyleComponent from './WidthStyleComponent.vue';

export class BaseStyle {
    constructor() {
        this.setOnParent = false;
        this.component = StyleComponent;
    }

    getComputedValue() {
        const computedStyle = {};
        this.inputs.forEach((input) => {
            computedStyle[input.attr] = input.getComputedValue(input.value);
        });
        return computedStyle;
    }
}

export class InputStyle {
    constructor(data) {
        Object.keys(data).forEach((key) => { this[key] = data[key]; });
    }
}

export class WidthStyle extends BaseStyle {
    constructor() {
        super();
        this.label = 'Width';
        this.component = WidthStyleComponent;
        this.inputs = [
            new InputStyle({
                meta: 'set-fixed-width',
                label: 'Set Fixed Width',
                attr: null,
                inputType: 'checkbox',
                value: false,
                getComputedValue: () => {},
            }),
            new InputStyle({
                meta: 'width',
                label: '',
                attr: 'width',
                inputType: 'number',
                value: 100,
                getComputedValue: value => `${value}px`,
            }),
        ];
    }

    getComputedValue() {
        const isFixedWidth = this.inputs[0].value;
        const fixedWidth = this.inputs[1].getComputedValue(this.inputs[1].value);
        return { width: isFixedWidth ? fixedWidth : 'initial' };
    }
}

class MarginStyle extends BaseStyle {
    constructor() {
        super();
        this.label = 'Margin';
        this.setOnParent = true;
        this.component = MarginStyleComponent;
        this.inputs = [
            new InputStyle({
                meta: 'margin-left',
                label: 'Left',
                attr: 'padding-left',
                inputType: 'number',
                value: 5,
                getComputedValue: value => `${value}px`,
            }),
            new InputStyle({
                meta: 'margin-top',
                label: 'Top',
                attr: 'padding-top',
                inputType: 'number',
                value: 5,
                getComputedValue: value => `${value}px`,
            }),
            new InputStyle({
                meta: 'margin-right',
                label: 'Right',
                attr: 'padding-right',
                inputType: 'number',
                value: 5,
                getComputedValue: value => `${value}px`,
            }),
            new InputStyle({
                meta: 'margin-bottom',
                label: 'Bottom',
                attr: 'padding-bottom',
                inputType: 'number',
                value: 5,
                getComputedValue: value => `${value}px`,
            }),
        ];
    }
}

class FlexStyle extends BaseStyle {
    constructor() {
        super();
        this.label = 'Alignment';
        this.inputs = [
            new InputStyle({
                label: 'Direction',
                attr: 'flex-direction',
                inputType: 'radio-switch',
                options: [
                    { id: 'column', text: 'Vertical' },
                    { id: 'row', text: 'Horizontal' },
                ],
                value: 'column',
                getComputedValue: value => value,
            }),
            new InputStyle({
                label: 'Alignment',
                attr: 'justify-content',
                inputType: 'radio-switch',
                options: [
                    { id: 'flex-start', text: 'Left' },
                    { id: 'flex-end', text: 'Right' },
                    { id: 'center', text: 'Center' },
                ],
                value: 'flex-start',
                getComputedValue: value => value,
            }),
        ];
    }

    getComputedValue() {
        return { display: 'flex', ...super.getComputedValue() };
    }
}

// individual inputStyle can return key-value pair
// or array of key-value pairs through getComputedValue

export default class StyleSystem {
    constructor() {
        this.inputStyles = [
            new WidthStyle(),
            new MarginStyle(),
            new FlexStyle(),
        ];
        this.computedStyles = [];
        this.recompute();
    }

    mergeComputedStyles(styles) {
        console.log('Merging computed styles');
        this.computedStyles = { ...this.computedStyles, ...styles };
    }

    recompute() {
        this.computedStyles = this.inputStyles
            .filter(inputStyle => !inputStyle.setOnParent)
            .map(inputStyle => inputStyle.getComputedValue())
            .reduce((obj, item) => {
                console.log('Acc Obj ', JSON.stringify(obj));
                console.log('Item ', JSON.stringify(item));
                return { ...obj, ...item };
            });

        return this.inputStyles
            .filter(inputStyle => inputStyle.setOnParent)
            .map(inputStyle => inputStyle.getComputedValue())
            .reduce((obj, item) => ({ ...obj, ...item }));
    }
}
