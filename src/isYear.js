import { isInteger } from './isInteger.js';
import { config } from './config.js';

/**
 * Checks if a value is an integer expressing a valid year (by default from 1900 to 2099)
 * 
 * @param { number } value - The value to be checked
 * 
 * @returns { boolean } - True or false
 */

const isYear = value => {

    const [ from, till ] = config.getYearRange();

    return isInteger( value ) && value >= from && value <= till;
}

export default isYear;
export { isYear };