import { isString } from './isString.js';
import { config } from './config.js';
import { isDate } from './isDate.js';

/**
 * Gets the day, month, year values of a string expressing a date (in representation format)
 * 
 * @param { string } value - The string
 * @param { string } [ pattern ] - A representation pattern
 * 
 * @returns { ( Object | null ) } - The day, month, year values as an object or null in case of invalid param
 * 
 * @example
 * getDateRepr( '01/01/2021' ); // returns { day: 1, month: 1, year: 2021 }
 * getDateRepr( '20210101' ); // returns null
 */

const getDateRepr = ( value, pattern ) => {

    pattern = isString( pattern )
        ? pattern.toUpperCase()
        : config.getReprPattern().toUpperCase();

    if ( isString( value ) && value.length === pattern.length ) {

        let day = '';
        let month = '';
        let year = '';

        for ( let i = 0; i < pattern.length; i++ ) {
            switch( pattern[ i ] ) {
                case 'D':
                    day += value[ i ];
                    break;
                case 'M':
                    month += value[ i ];
                    break;
                case 'Y':
                    year += value[ i ];
                    break;
                default:
            }
        }

        day = parseInt( day );
        month = parseInt( month );
        year = parseInt( year );

        if ( isDate( day, month, year ) ) {
            return { day, month, year };
        }
    }

    return null;

}

export default getDateRepr;
export { getDateRepr };