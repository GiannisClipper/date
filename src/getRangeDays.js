import { isString } from './isString.js';
import { splitYYYYMMDD } from './splitYYYYMMDD.js';
import { joinYYYYMMDD } from './joinYYYYMMDD.js';
import { isDateArr } from './isDateArr.js';
import { getYearDays } from './getYearDays.js';
import { dayOfYear } from './dayOfYear.js';

/**
 * Gets the number of the days of a date range including the starting and ending limits
 * 
 * @example
 * getRangeDays( '20210429', '20210502' ) // returns 4
 * getRangeDays( '20210502', '20210429' ) // returns -4
 * 
 * @param { ( string | Object[] ) } from - The starting date of the range
 * @param { ( string | Object[] ) } till - The ending date of the range
 * 
 * @returns { ( number | null ) } - The the number of the days or null in case of invalid params
 */

const getRangeDays = ( from, till ) => {

    if ( isString( from ) ) {
        from = splitYYYYMMDD( from );
    }

    if ( isString( till ) ) {
        till = splitYYYYMMDD( till );
    }

    if ( isDateArr( from ) && isDateArr( till ) ) {

        const [ _from, _till ] = joinYYYYMMDD( from ) <= joinYYYYMMDD( till )
            ? [ from, till ]
            : [ till, from ];

        const [ , , _fromYear ] = _from;
        const [ , , _tillYear ] = _till;

        // add the starting day and the rest days of that year
        let days = 1 + getYearDays( _fromYear ) - dayOfYear( _from );

        // add all the days of the middle years
        for ( let i = _fromYear + 1; i < _tillYear; i++ ) {
            days += getYearDays( i );
        }

        // add the ending day and the days before of the that year
        days += dayOfYear( _till );

        // subtract to correct result when dates are in the same year 
        days -= _fromYear === _tillYear ? getYearDays( _fromYear ) : 0;

        return joinYYYYMMDD( from ) <= joinYYYYMMDD( till )
            ? days
            : days * -1;
    }

    return null;
}

export default getRangeDays;
export { getRangeDays };