import { isInteger } from './isInteger.js';

/**
 * Checks if a value is a leap year
 * @param { number } value - The value to be checked
 * @returns { boolean } - A boolean response
 */
const isLeapYear = ( value, from, till ) => {

    return isInteger( value ) && value % 4 === 0 && ( value % 100 !== 0 || value % 400 === 0 );
}

export { isLeapYear };