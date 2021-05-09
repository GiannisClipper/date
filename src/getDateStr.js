import { isString } from './isString.js';
import { isDate } from './isDate.js';

/**
 * Gets the day, month, year values of a string expressing a date (in YYYYMMDD format)
 * 
 * @param { string } value - The string
 * 
 * @returns { ( Object | null ) } - The day, month, year values as an object or null in case of invalid param
 * 
 * @example
 * getDateStr( '20210101' ); // returns { day: 1, month: 1, year: 2021 }
 * getDateStr( '2021' ); // returns null
 */

const getDateStr = value => {

    if ( isString( value ) && value.length === 8 ) {

        const day = parseInt( value.substring( 6, 8 ) );
        const month = parseInt( value.substring( 4, 6 ) );
        const year = parseInt( value.substring( 0, 4 ) );

        if ( isDate( day, month, year ) ) {
            return { day, month, year };
        }
    }

    return null;

}

export default getDateStr;
export { getDateStr };