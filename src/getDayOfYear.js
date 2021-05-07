import { isString } from './isString.js';
import { asDateArr } from './asDateArr.js';
import { isDateArr } from './isDateArr.js';
import { getMonthDays } from './getMonthDays.js';

/**
 * Gets the position of a date in the days sequence of the year (from 1 to 365/366)
 * 
 * @example
 * getDayOfYear( "20210201" ); // returns 32
 * getDayOfYear( "20211231" ); // returns 365
 * 
 * @param { ( string | Object[] ) } value - The date
 * 
 * @returns { ( number | null ) } - The position in year or null in case of invalid param
 */

const getDayOfYear = value => {

    if ( isString( value ) ) {
        value = asDateArr( value );
    }

    if ( isDateArr( value ) ) {

        const [ day, month, year ] = value;

        let pos = day;
        for ( let i = 1; i < month; i++ ) {
            pos += getMonthDays( i, year );
        }

        return pos;
    }

    return null;
}

export default getDayOfYear;
export { getDayOfYear };