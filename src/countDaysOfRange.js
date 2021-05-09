import { isString } from './isString.js';
import { setDateArr } from './setDateArr.js';
import { setDateStr } from './setDateStr.js';
import { getDateArr } from './getDateArr.js';
import { countDaysOfYear } from './countDaysOfYear.js';
import { calcDayOfYear } from './calcDayOfYear.js';

/**
 * Gets the number of the days of a date range including the starting and ending limits
 * 
 * @param { ( string | Object[] ) } from - The starting date of the range
 * @param { ( string | Object[] ) } till - The ending date of the range
 * 
 * @returns { ( number | null ) } - The the number of the days or null in case of invalid params
 * 
 * @example
 * countDaysOfRange( '20210429', '20210502' ) // returns 4
 * countDaysOfRange( '20210502', '20210429' ) // returns -4
 */

const countDaysOfRange = ( from, till ) => {

    if ( isString( from ) ) {
        from = setDateArr( from );
    }

    if ( isString( till ) ) {
        till = setDateArr( till );
    }

    if ( getDateArr( from ) && getDateArr( till ) ) {

        const [ _from, _till ] = setDateStr( from ) <= setDateStr( till )
            ? [ from, till ]
            : [ till, from ];

        const [ , , _fromYear ] = _from;
        const [ , , _tillYear ] = _till;

        // add the starting day and the rest days of that year
        let days = 1 + countDaysOfYear( _fromYear ) - calcDayOfYear( _from );

        // add all the days of the middle years
        for ( let i = _fromYear + 1; i < _tillYear; i++ ) {
            days += countDaysOfYear( i );
        }

        // add the ending day and the days before of the that year
        days += calcDayOfYear( _till );

        // subtract to correct result when dates are in the same year 
        days -= _fromYear === _tillYear ? countDaysOfYear( _fromYear ) : 0;

        return setDateStr( from ) <= setDateStr( till )
            ? days
            : days * -1;
    }

    return null;
}

export default countDaysOfRange;
export { countDaysOfRange };