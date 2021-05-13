import { isString } from './isString.js';
import { config } from './config.js';
import { isDate } from './isDate.js';

/**
 * Retrieves date values from a string (in representation format).
 * 
 * @param { string } value A string expressing a date
 * @param { string } [ pattern ] A representation pattern
 * 
 * @returns { ( Object | null ) } An object with the date values ({ year:, month:, day: }) or null in case of invalid param
 * 
 * @example
 * getDateRepr( '31/01/2021' ); // returns { year: 2021, month: 1, day: 31 }
 * getDateRepr( '20210131' ); // returns null
 * 
 * - - -
 * @memberof B.get
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