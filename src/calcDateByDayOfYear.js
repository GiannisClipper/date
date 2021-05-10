import { isInteger } from './isInteger.js';
import { isYear } from './isYear.js';
import { countDaysOfYear } from './countDaysOfYear.js';
import { countDaysOfMonth } from './countDaysOfMonth.js';

/**
 * Calculates the date given the day in the days sequence (from 1 to 365/366) of a year
 * 
 * @param { number } day - The day
 * @param { number } year - The year
 * 
 * @returns { ( Object | null ) } - An object expressing a date ({ day, month, year }) or null in case of invalid params
 * 
 * @example
 * calcDateByDayOfYear( 32, 2021 ); // returns { day: 1, month: 2, year: 2021 }
 * calcDateByDayOfYear( 365, 2021 ); // returns { day: 31, month: 12, year: 2021 }
 */

const calcDateByDayOfYear = ( day, year ) => {

    if ( isInteger( day ) && isYear( year ) ) {

        const maxYearDay = countDaysOfYear( year );

        if ( day >= 1 && day <= maxYearDay ) {

            for ( let month = 1; month <= 12; month++ ) {

                const maxMonthDay = countDaysOfMonth( month, year );

                if ( day <= maxMonthDay ) {
                    return { day, month, year };

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