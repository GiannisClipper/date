import { isInteger } from './isInteger.js';
import { configYearRange } from './configYearRange.js';

/**
 * Checks if a value is an integer expressing a valid year
 * 
 * @param { number } value - The value to be checked
 * 
 * @returns { boolean } - True or false
 */

const isYear = value => {

    const [ from, till ] = configYearRange.get();

    return isInteger( value ) && value >= from && value <= till;
}

export default isYear;
export { isYear };