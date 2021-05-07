import { isString } from './isString.js';
import { splitYYYYMMDD } from './splitYYYYMMDD.js';
import { joinYYYYMMDD } from './joinYYYYMMDD.js';
import { isDateArr } from './isDateArr.js';
import { yearDays } from './yearDays.js';
import { dayOfYear } from './dayOfYear.js';

/**
 * Counts the sum of days in a range of two days including them
 * @param { ( string | Object[] ) } from - The starting date to count
 * @param { ( string | Object[] ) } till - The ending date to count
 * @returns { ( number | null ) } - The sum of days or null in case of invalid params
 */
const countDays = ( from, till ) => {

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
        let days = 1 + yearDays( _fromYear ) - dayOfYear( _from );

        // add all the days of the middle years
        for ( let i = _fromYear + 1; i < _tillYear; i++ ) {
            days += yearDays( i );
        }

        // add the ending day and the days before of the that year
        days += dayOfYear( _till );

        // subtract to correct result when dates are in the same year 
        days -= _fromYear === _tillYear ? yearDays( _fromYear ) : 0;

        return joinYYYYMMDD( from ) <= joinYYYYMMDD( till )
            ? days
            : days * -1;
    }

    return null;
}

export default countDays;
export { countDays };