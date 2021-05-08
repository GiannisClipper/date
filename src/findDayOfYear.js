import { isString } from './isString.js';
import { convertToDateArr } from './convertToDateArr.js';
import { isDateArr } from './isDateArr.js';
import { countDaysOfMonth } from './countDaysOfMonth.js';

/**
 * Finds the position of a date in the days sequence of the year (from 1 to 365/366)
 * 
 * @param { ( string | Object[] ) } value - The date
 * 
 * @returns { ( number | null ) } - The position in year or null in case of invalid param
 * 
 * @example
 * findDayOfYear( "20210201" ); // returns 32
 * findDayOfYear( "20211231" ); // returns 365
 */

const findDayOfYear = value => {

    if ( isString( value ) ) {
        value = convertToDateArr( value );
    }

    if ( isDateArr( value ) ) {

        const [ day, month, year ] = value;

        let pos = day;
        for ( let i = 1; i < month; i++ ) {
            pos += countDaysOfMonth( i, year );
        }

        return pos;
    }

    return null;
}

export default findDayOfYear;
export { findDayOfYear };