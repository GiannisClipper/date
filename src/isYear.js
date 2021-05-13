import { isInteger } from './isInteger.js';
import { config } from './config.js';

/**
 * Validates if a value is an integer expressing a year (by default from 1900 to 2099 but customizable to other values).
 * 
 * @param { number } value - A value to be validated
 * 
 * @returns { boolean } - True or false
 *
 * @example
 * isYear( 2021 ); // returns true
 * isYear( '2021' ); // return false
 * 
 * - - -
 * @memberof F.is
 */

const isYear = value => {

    const [ from, till ] = config.getYearRange();

    return isInteger( value ) && value >= from && value <= till;
}

export default isYear;
export { isYear };