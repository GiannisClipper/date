import { isInteger } from './isInteger.js';

/**
 * Checks if a value is an integer expressing a valid year
 * 
 * @param { number } value - The value to be checked
 * 
 * @param { number } [ from=1900 ] - The down limit of the accepted range
 * @param { number } [ till=2099 ] - The up limit of the accepted range
 * 
 * @returns { boolean } - True or false
 */

const isYear = ( value, from, till ) => {

    from = isInteger( from ) ? from : 1900;
    till = isInteger( till ) ? till : 2099;

    return isInteger( value ) && value >= from && value <= till;
}

export default isYear;
export { isYear };