import { isString } from './isString.js';
import { config } from './config.js';
import { isDate } from './isDate.js';

/**
 * Extracts date values from a string (in representation format)
 * 
 * @param { string } value - The string expressing a date
 * @param { string } [ pattern ] - A representation pattern
 * 
 * @returns { ( Object | null ) } - An object expressing a date ({ year, month, day }) or null in case of invalid param
 * 
 * @example
 * getDateRepr( '01/01/2021' ); // returns { day: 1, month: 1, year: 2021 }
 * getDateRepr( '20210101' ); // returns null
 */

const getDateRepr = ( value, pattern ) => {

    pattern = isString( pattern )
        ? pattern
        : config.getReprPattern();

    if ( isString( value ) && value.length <= pattern.length ) {

        let day = '';
        let month = '';
        let year = '';

        let j = value.length - 1;
    
        for ( let i = pattern.length - 1; i >= 0; i-- ) {
            switch( pattern[ i ] ) {

                case 'm':
                    if ( '0123456789'.includes( value[ j ] ) ) {
                        month = value[ j ] + month;
                        j--;    
                    }
                    break;
                case 'M':
                    month = value[ j ] + month;
                    j--;
                    break;

                case 'y':
                    if ( '0123456789'.includes( value[ j ] ) ) {
                        year = value[ j ] + year;
                        j--;    
                    }
                    break;    
                case 'Y':
                    year = value[ j ] + year;
                    j--;
                    break;
    
                case 'd':
                    if ( '0123456789'.includes( value[ j ] ) ) {
                        day = value[ j ] + day;
                        j--;    
                    }
                    break;
                case 'D':
                    day = value[ j ] + day;
                    j--;
                    break;

                default:
                    j--;
            }
        }

        year = parseInt( year );
        month = parseInt( month );
        day = parseInt( day );

        if ( isDate( year, month, day ) ) {
            return { year, month, day };
        }
    }

    return null;

}

export default getDateRepr;
export { getDateRepr };