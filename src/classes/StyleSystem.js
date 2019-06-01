/* eslint-disable import/prefer-default-export */
import { removeFlexIfWidth } from '../internal';

export class StyleSystem {
    constructor(inputStyles = []) {
        this.inputStyles = inputStyles;
        this.computedStyles = [];
        this.recompute();
    }

    mergeComputedStyles(styles) {
        this.computedStyles = removeFlexIfWidth({ ...this.computedStyles, ...styles });
    }

    recompute() {
        try {
            this.computedStyles = removeFlexIfWidth(
                this.inputStyles
                    .map(inputStyle => inputStyle.getComputedValue())
                    .reduce((obj, item) => ({ ...obj, ...item })),
            );
        } catch {
            console.log('Exception');
        }
    }

    recomputeParentStyles() {
        try {
            return this.inputStyles
                .map(inputStyle => inputStyle.getParentComputedValue())
                .reduce((obj, item) => ({ ...obj, ...item }));
        } catch {
            console.log('Exception computing parent styles');
            return null;
        }
    }

    recomputeChildrenStyles() {
        try {
            return this.inputStyles
                .map(inputStyle => inputStyle.getChildrenComputedValue())
                .reduce((obj, item) => ({ ...obj, ...item }));
        } catch {
            console.log('Exception computing child styles');
            return null;
        }
    }
}
