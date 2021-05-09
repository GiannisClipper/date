import { getDate } from './getDate.js';
import { config } from './config.js';

/**
 * Sets a date as a string in representation format.
 * A date could be a Date instance or a string in YYYYMMDD format or an array expressing a date ([ day, month, year ]).
 * 
 * @param { ( Date | string | Object[] ) } value - The date
 * 
 * @returns { ( string | null ) } - A string in representation format or null in case of invalid param
 */

const setDateRepr = value => {

    value = getDate( value );

    if ( value !== null ) {

        value.day = value.day.toString().split( '' );
        value.month = value.month.toString().split( '' );
        value.year = value.year.toString().split( '' );

        const pattern = config.getReprPattern().toUpperCase();

        let result ='';

        for ( let i = pattern.length - 1; i >= 0; i-- ) {
            switch( pattern[ i ] ) {
                case 'D':
                    result = ( value.day.pop() || '0' ) + result;
                    break;
                case 'M':
                    result = ( value.month.pop() || '0' ) + result;
                    break;
                case 'Y':
                    result = ( value.year.pop() || '0' ) + result;
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