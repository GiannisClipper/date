import { isString } from './isString.js';
import { config } from './config.js';
import { setDateObj } from './setDateObj.js';

/**
 * Creates a string expressing a date (in representation format).
 * 
 * @param { ( Object | Object[] | string | Date ) } value - A date value
 * @param { string } [ pattern ] A representation pattern
 * 
 * @returns { ( string | null ) } A string in representation format or null in case of invalid params
 * 
 * @example
 * setDateRepr( { year: 2021, month: 1, day: 31 } ); // returns '31/12/2021'
 * setDateRepr( [ 2021, 1, 31 ] ); // returns '31/12/2021'
 * setDateRepr( '20210131' ); // returns '31/12/2021'
 * setDateRepr( '31/01/2021' ); // returns '31/12/2021'
 * setDateRepr( new Date( 2021, 0, 31 ) ); // returns '31/12/2021'
 * setDateRepr(); // returns null
 * 
 * - - -
 * @memberof A.set
 */

const setDateRepr = ( value, pattern ) => {

    pattern = isString( pattern )
        ? pattern
        : config.getReprPattern();

    value = setDateObj( value );

    if ( value !== null ) {

        let { year, month, day } = value;

        year = year.toString().split( '' );
        month = month.toString().split( '' );
        day = day.toString().split( '' );

        let result ='';

        for ( let i = pattern.length - 1; i >= 0; i-- ) {
            switch( pattern[ i ] ) {
                case 'y':
                    result = ( year.pop() || '' ) + result;
                    break;
                case 'Y':
                    result = ( year.pop() || '0' ) + result;
                    break;
                case 'm':
                    result = ( month.pop() || '' ) + result;
                    break;
                case 'M':
                    result = ( month.pop() || '0' ) + result;
                    break;
                case 'd':
                    result = ( day.pop() || '' ) + result;
                    break;
                case 'D':
                    result = ( day.pop() || '0' ) + result;
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