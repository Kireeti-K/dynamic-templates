/* eslint-disable import/prefer-default-export */

export const randomString = (length = 8) => {
    const characters = 'abcdefghijklmnopqrsttuvwxyz';
    let resultString = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= length; i++) {
        resultString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return resultString;
};
