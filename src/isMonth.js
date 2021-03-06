import { isInteger } from './isInteger.js';

/**
 * Validates if a value is an integer expressing a month (from 1 to 12).
 * 
 * @param { number } value A value to be validated
 * 
 * @returns { boolean } True or false
 * 
 * @example
 * isMonth( 12 ); // returns true
 * isMonth( 'December'); // returns false
 * 
 * - - -
 * @memberof F.is
 */

const isMonth = value => {

    return isInteger( value ) && value >= 1 && value <= 12;
}

export default isMonth;
export { isMonth };