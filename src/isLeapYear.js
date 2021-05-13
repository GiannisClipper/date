import { isInteger } from './isInteger.js';

/**
 * Validates if a value is an integer expressing a leap year.
 * 
 * @param { number } value A value to be validated
 * 
 * @returns { boolean } True or false
 * 
 * @example
 * isLeapYear( 2020 ); // returns true
 * isLeapYear( 2021 ); // return false
 * 
 * - - -
 * @memberof F.is
 */

const isLeapYear = ( value, from, till ) => {

    return isInteger( value ) && value % 4 === 0 && ( value % 100 !== 0 || value % 400 === 0 );
}

export default isLeapYear;
export { isLeapYear };