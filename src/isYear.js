import { isInteger } from './isInteger.js';

/**
 * Checks if a value is a valid year (an integer in a range)
 * @param { number } value - The value to be checked
 * @param { number } [ from=1900 ] - The down limit of the accepted values
 * @param { number } [ till=2099 ] - The up limit of the accepted values
 * @returns { boolean } - A boolean response
 */
const isYear = ( value, from, till ) => {

    from = isInteger( from ) ? from : 1900;
    till = isInteger( till ) ? till : 2099;

    return isInteger( value ) && value >= from && value <= till;
}

export default isYear;
export { isYear };