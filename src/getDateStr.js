import { isString } from './isString.js';
import { isDate } from './isDate.js';

/**
 * Retrieves date values from a string (in YYYYMMDD format)
 * 
 * @param { string } value - A string expressing a date
 * 
 * @returns { ( Object | null ) } - An object with the date values ({ year:, month:, day: }) or null in case of invalid param
 * 
 * @example
 * getDateStr( '20210131' ); // returns { year: 2021, month: 1, day: 31 }
 * getDateStr( '2021' ); // returns null
 * 
 * - - -
 * @memberof B.get
 */

const getDateStr = value => {

    if ( isString( value ) && value.length === 8 ) {

        const year = parseInt( value.substring( 0, 4 ) );
        const month = parseInt( value.substring( 4, 6 ) );
        const day = parseInt( value.substring( 6, 8 ) );

        if ( isDate( year, month, day ) ) {
            return { year, month, day };
        }
    }

    return null;

}

export default getDateStr;
export { getDateStr };