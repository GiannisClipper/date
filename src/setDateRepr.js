import { isString } from './isString.js';
import { config } from './config.js';
import { setDateObj } from './setDateObj.js';

/**
 * Sets a date as a string in representation format.
 * A date could be a Date instance or a string in YYYYMMDD format or an array expressing a date ([ day, month, year ]).
 * 
 * @param { ( Date | string | Object[] ) } value - The date
 * @param { string } [ pattern ] - A representation pattern
 * 
 * @returns { ( string | null ) } - A string in representation format or null in case of invalid param
 */

const setDateRepr = ( value, pattern ) => {

    pattern = isString( pattern )
        ? pattern
        : config.getReprPattern();

    value = setDateObj( value );

    if ( value !== null ) {

        let { day, month, year } = value;

        day = day.toString().split( '' );
        month = month.toString().split( '' );
        year = year.toString().split( '' );

        let result ='';

        for ( let i = pattern.length - 1; i >= 0; i-- ) {
            switch( pattern[ i ] ) {
                case 'd':
                    result = ( day.pop() || '' ) + result;
                    break;
                case 'D':
                    result = ( day.pop() || '0' ) + result;
                    break;
                case 'm':
                    result = ( month.pop() || '' ) + result;
                    break;
                case 'M':
                    result = ( month.pop() || '0' ) + result;
                    break;
                case 'y':
                    result = ( year.pop() || '' ) + result;
                    break;
                case 'Y':
                    result = ( year.pop() || '0' ) + result;
                    break;
                default:
                    result = pattern[ i ] + result;
            }
        }

        return result;
    }

    return null;
}

export default setDateRepr;
export { setDateRepr };