import { isString } from 'util';
import StyleComponent from '../components/styles/StyleComponent.vue';
import MarginStyleComponent from '../components/styles/MarginStyleComponent.vue';
import WidthStyleComponent from '../components/styles/WidthStyleComponent.vue';

export class BaseStyle {
    constructor() {
        this.setOnParent = false;
        this.component = StyleComponent;
    }

    getComputedValue() {
        const computedStyle = {};
        this.inputs
            .filter(input => !input.setOnParent && !input.setOnChildren)
            .forEach((input) => {
                computedStyle[input.attr] = input.getComputedValue(input.value);
            });
        return computedStyle;
    }

    getParentComputedValue() {
        const computedStyle = {};
        this.inputs
            .filter(input => input.setOnParent)
            .forEach((input) => {
                computedStyle[input.attr] = input.getComputedValue(input.value);
            });
        return computedStyle;
    }

    getChildrenComputedValue() {
        const computedStyle = {};
        this.inputs
            .filter(input => input.setOnChildren)
            .forEach((input) => {
                computedStyle[input.attr] = input.getComputedValue(input.value);
            });
        return computedStyle;
    }

    decompute(computedStyles) {
        // this.computedStyles = computedStyles;
        for (let i = 0; i < this.inputs.length; i += 1) {
            const inputStyle = this.inputs[i];
            if (inputStyle.attr) {
                let tvalue = computedStyles[inputStyle.attr];
                if (tvalue && isString(tvalue) && tvalue.slice(-2) === 'px' /* || tvalue.slice(-1) === '%' */) {
                    tvalue = parseInt(tvalue.slice(0, -2), 10);
                }
                inputStyle.value = tvalue;
            }
        }
    }
}

export class InputStyle {
    constructor(data) {
        Object.keys(data).forEach((key) => { this[key] = data[key]; });
        if (!this.getComputedValue) this.getComputedValue = value => value;
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

export class MarginStyle extends BaseStyle {
    constructor() {
        super();
        this.label = 'Margin';
        this.component = MarginStyleComponent;
        this.inputs = [
            new InputStyle({
                meta: 'margin-left',
                label: 'Left',
                attr: 'margin-left',
                inputType: 'number',
                value: 0,
                getComputedValue: value => `${value}px`,
            }),
            new InputStyle({
                meta: 'margin-top',
                label: 'Top',
                attr: 'margin-top',
                inputType: 'number',
                value: 0,
                getComputedValue: value => `${value}px`,
            }),
            new InputStyle({
                meta: 'margin-right',
                label: 'Right',
                attr: 'margin-right',
                inputType: 'number',
                value: 0,
                getComputedValue: value => `${value}px`,
            }),
            new InputStyle({
                meta: 'margin-bottom',
                label: 'Bottom',
                attr: 'margin-bottom',
                inputType: 'number',
                value: 0,
                getComputedValue: value => `${value}px`,
            }),
        ];
    }
}

export class FlexStyle extends BaseStyle {
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
            }),
            new InputStyle({
                label: '',
                attr: 'flex',
                setOnChildren: true,
                value: 1,
            }),
        ];
    }

    getComputedValue() {
        return { display: 'flex', ...super.getComputedValue() };
    }
}


export class TextAlignStyle extends BaseStyle {
    constructor() {
        super();
        this.label = 'Alignment';
        this.inputs = [
            new InputStyle({
                meta: 'text-align',
                label: 'Text Align',
                attr: 'text-align',
                options: [
                    { id: 'left', text: 'Left' },
                    { id: 'right', text: 'Right' },
                    { id: 'center', text: 'Center' },
                ],
                inputType: 'radio-switch',
                value: 'left',
            }),
        ];
    }
}


export class FontStyle extends BaseStyle {
    constructor() {
        super();
        this.label = 'Font';
        this.inputs = [
            new InputStyle({
                label: 'Font Size',
                attr: 'font-size',
                inputType: 'number',
                value: 14,
                getComputedValue: value => `${value}px`,
            }),
            new InputStyle({
                label: 'Font Weight',
                attr: 'font-weight',
                options: [
                    { id: 400, text: 'Normal' },
                    { id: 500, text: 'SemiBold' },
                    { id: 700, text: 'Bold' },
                ],
                inputType: 'radio-switch',
                value: 'normal',
            }),
        ];
    }
}
