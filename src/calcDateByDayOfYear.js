import { isInteger } from './isInteger.js';
import { isYear } from './isYear.js';
import { countDaysOfYear } from './countDaysOfYear.js';
import { countDaysOfMonth } from './countDaysOfMonth.js';

/**
 * Calculates the date according to a day in the sequence of a year (from 1 to 365/366)
 * 
 * @param { number } day - A day
 * @param { number } year - A year
 * 
 * @returns { ( Object | null ) } - An object expressing a date ({ year:, month:, day: }) or null in case of invalid params
 * 
 * @example
 * calcDateByDayOfYear( 32, 2021 ); // returns { year: 2021, month: 2, day: 1 }
 * calcDateByDayOfYear( 365, 2021 ); // returns { year: 2021, month: 12, day: 31 }
 * calcDateByDayOfYear(); // returns null
 */

const calcDateByDayOfYear = ( day, year ) => {

    if ( isInteger( day ) && isYear( year ) ) {

        const maxYearDay = countDaysOfYear( year );

        if ( day >= 1 && day <= maxYearDay ) {

            for ( let month = 1; month <= 12; month++ ) {

                const maxMonthDay = countDaysOfMonth( month, year );

                if ( day <= maxMonthDay ) {
                    return { year, month, day };

                } else {
                    day -= maxMonthDay;
                }
            }
        }
    }

    return null;
}

export default calcDateByDayOfYear;
export { calcDateByDayOfYear };