import { setDateObj } from './setDateObj.js';
import { countDaysOfRange } from './countDaysOfRange.js';

/**
 * Calculates the position of a date in the days sequence of the week (from 1 to 7, monday to sunday).
 * 
 * @param { ( Object | Object[] | string | Date ) } date - A date value
 * 
 * @returns { ( number | null ) } - The position in week or null in case of invalid param
 * 
 * @example
 * calcDayOfWeek( "20210507" ); // returns 5
 * calcDayOfWeek(); // returns null
 * 
 * - - -
 * @memberof D.calc
 */

const calcDayOfWeek = date => {

    date = setDateObj( date );

    if ( date ) {

        const sampleDate = [ 2020, 1, 1 ];
        const samplecalcDayOfWeek = 3;  // 1 Jan of 2020 was wednesday

        const daysBetween = countDaysOfRange( sampleDate, date ) - 1;
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