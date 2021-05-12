import { isInteger } from './isInteger.js';

/**
 * Checks if a value is an integer expressing a leap year
 * 
 * @param { number } value - The value to be checked
 * 
 * @returns { boolean } - True or false
 * 
 * @example
 * isLeapYear( 2021 ); // returns false
 * isLeapYear( 2024 ); // return true
 */

const isLeapYear = ( value, from, till ) => {

    return isInteger( value ) && value % 4 === 0 && ( value % 100 !== 0 || value % 400 === 0 );
}

export default isLeapYear;
export { isLeapYear };