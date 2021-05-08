import { isString } from './isString.js';
import { isDate } from './isDate.js';

/**
 * Checks if a value is a string expressing a date (in YYYYMMDD format)
 * 
 * @param { string } value - The value
 * 
 * @returns { boolean } - True or false
 * 
 * @example
 * isDateStr( '20210509' ); // returns true
 * isDateStr( '2021' ); // returns false
 */

const isDateStr = value => {

    return isString( value ) && value.length === 8 && isDate(
        parseInt( value.substring( 6, 8 ) ),
        parseInt( value.substring( 4, 6 ) ),
        parseInt( value.substring( 0, 4 ) )
    );
}

export default isDateStr;
export { isDateStr };