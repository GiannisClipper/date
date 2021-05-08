import { isString } from './isString.js';
import { asDateArr } from './asDateArr.js';
import { isDateArr } from './isDateArr.js';
import { countDaysOfRange } from './countDaysOfRange.js';

/**
 * Ges the position of a date in the days sequence of the week (from 1: monday to 7: sunday)
 * 
 * @example
 * getDayOfWeek( "20210507" ); // returns 5
 * getDayOfWeek( "20210510" ); // returns 1
 * 
 * @param { ( string | Object[] ) } value - The date
 * 
 * @returns { ( number | null ) } - The position in week or null in case of invalid param
 */

const getDayOfWeek = value => {

    if ( isString( value) ) {
        value = asDateArr( value );
    }

    if ( isDateArr( value ) ) {

        const sampleDate = [ 1, 1, 2020 ];
        const samplegetDayOfWeek = 3;  // 01.01.2020 was wednesday

        const daysBetween = countDaysOfRange( sampleDate, value ) - 1;
        const dayOffset = daysBetween % 7;
        const result = samplegetDayOfWeek + dayOffset;

        return ( 
            result > 7 ? result - 7 :
            result < 1 ? 7 + result :
            result
        );
    }

    return null;
}

export default getDayOfWeek;
export { getDayOfWeek };