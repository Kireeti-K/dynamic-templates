/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-param-reassign

const isWidthValueConcrete = (value) => {
    const trimmedValue = value.trim();
    if (trimmedValue.length === 0) return false;
    return trimmedValue.slice(-1) === '%' || trimmedValue.slice(-2) === 'px';
};

export const removeFlexIfWidth = (styles) => {
    if (styles.flex && styles.width && isWidthValueConcrete(styles.width)) {
        delete styles.flex;
    }
    console.log('Styles after deleting flex ', JSON.stringify(styles));
    return styles;
};
