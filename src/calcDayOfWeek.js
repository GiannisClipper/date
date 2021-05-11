import { setDateObj } from './setDateObj.js';
import { countDaysOfRange } from './countDaysOfRange.js';

/**
 * Calculates the position of a date in the days sequence of the week (from 1: monday to 7: sunday)
 * 
 * @param { ( string | Object[] ) } value - The date
 * 
 * @returns { ( number | null ) } - The position in week or null in case of invalid param
 * 
 * @example
 * calcDayOfWeek( "20210507" ); // returns 5
 * calcDayOfWeek( "20210510" ); // returns 1
 */

const calcDayOfWeek = value => {

    value = setDateObj( value );

    if ( value ) {

        const sampleDate = [ 2020, 1, 1 ];
        const samplecalcDayOfWeek = 3;  // 1 Jan of 2020 was wednesday

        const daysBetween = countDaysOfRange( sampleDate, value ) - 1;
        const dayOffset = daysBetween % 7;
        const result = samplecalcDayOfWeek + dayOffset;

        return ( 
            result > 7 ? result - 7 :
            result < 1 ? 7 + result :
            result
        );
    }

    return null;
}

export default calcDayOfWeek;
export { calcDayOfWeek };