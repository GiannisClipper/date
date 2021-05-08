import { isString } from './isString.js';
import { convertToDateArr } from './convertToDateArr.js';
import { convertToDateStr } from './convertToDateStr.js';
import { isDateArr } from './isDateArr.js';
import { countDaysOfYear } from './countDaysOfYear.js';
import { findDayOfYear } from './findDayOfYear.js';

/**
 * Gets the number of the days of a date range including the starting and ending limits
 * 
 * @example
 * countDaysOfRange( '20210429', '20210502' ) // returns 4
 * countDaysOfRange( '20210502', '20210429' ) // returns -4
 * 
 * @param { ( string | Object[] ) } from - The starting date of the range
 * @param { ( string | Object[] ) } till - The ending date of the range
 * 
 * @returns { ( number | null ) } - The the number of the days or null in case of invalid params
 */

const countDaysOfRange = ( from, till ) => {

    if ( isString( from ) ) {
        from = convertToDateArr( from );
    }

    if ( isString( till ) ) {
        till = convertToDateArr( till );
    }

    if ( isDateArr( from ) && isDateArr( till ) ) {

        const [ _from, _till ] = convertToDateStr( from ) <= convertToDateStr( till )
            ? [ from, till ]
            : [ till, from ];

        const [ , , _fromYear ] = _from;
        const [ , , _tillYear ] = _till;

        // add the starting day and the rest days of that year
        let days = 1 + countDaysOfYear( _fromYear ) - findDayOfYear( _from );

        // add all the days of the middle years
        for ( let i = _fromYear + 1; i < _tillYear; i++ ) {
            days += countDaysOfYear( i );
        }

        // add the ending day and the days before of the that year
        days += findDayOfYear( _till );

        // subtract to correct result when dates are in the same year 
        days -= _fromYear === _tillYear ? countDaysOfYear( _fromYear ) : 0;

        return convertToDateStr( from ) <= convertToDateStr( till )
            ? days
            : days * -1;
    }

    return null;
}

export default countDaysOfRange;
export { countDaysOfRange };