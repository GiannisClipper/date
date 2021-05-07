import { isInteger } from './isInteger.js';

/**
 * Checks if a value is a valid month (an integer from 1 to 12)
 * @param { number } value - The value to be checked
 * @returns { boolean } - True or false
 */
const isMonth = value => {

    return isInteger( value ) && value >= 1 && value <= 12;
}

export default isMonth;
export { isMonth };