import { isString } from './isString.js';
import { setDateArr } from './setDateArr.js';
import { getDateArr } from './getDateArr.js';
import { countDaysOfRange } from './countDaysOfRange.js';

/**
 * Finds the position of a date in the days sequence of the week (from 1: monday to 7: sunday)
 * 
 * @param { ( string | Object[] ) } value - The date
 * 
 * @returns { ( number | null ) } - The position in week or null in case of invalid param
 * 
 * @example
 * findDayOfWeek( "20210507" ); // returns 5
 * findDayOfWeek( "20210510" ); // returns 1
 */

const findDayOfWeek = value => {

    if ( isString( value) ) {
        value = setDateArr( value );
    }

    if ( getDateArr( value ) ) {

        const sampleDate = [ 1, 1, 2020 ];
        const samplefindDayOfWeek = 3;  // 01.01.2020 was wednesday

        const daysBetween = countDaysOfRange( sampleDate, value ) - 1;
        const dayOffset = daysBetween % 7;
        const result = samplefindDayOfWeek + dayOffset;

        return ( 
            result > 7 ? result - 7 :
            result < 1 ? 7 + result :
            result
        );
    }

    return null;
}

export default findDayOfWeek;
export { findDayOfWeek };