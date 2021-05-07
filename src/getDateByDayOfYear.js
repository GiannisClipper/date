import { isInteger } from './isInteger.js';
import { isYear } from './isYear.js';
import { getYearDays } from './getYearDays.js';
import { getMonthDays } from './getMonthDays.js';

/**
 * Gets the date given the day in the days sequence (from 1 to 365/366) of a year
 * 
 * @example
 * getDayByDay( 32, 2021 ); // returns [ 1, 2, 2021 ]
 * getDayByDay( 365, 2021 ); // returns [ 31, 12, 2021 ]
 * 
 * @param { number } day - The day
 * @param { number } year - The year
 * 
 * @returns { ( Object[] | null ) } - An array expressing a date ([ day, month, year ]) or null in case of invalid params
 */

const getDateByDayOfYear = ( day, year ) => {

    if ( isInteger( day ) && isYear( year ) ) {

        const maxYearDay = getYearDays( year );

        if ( day >= 1 && day <= maxYearDay ) {

            for ( let month = 1; month <= 12; month++ ) {

                const maxMonthDay = getMonthDays( month, year );

                if ( day <= maxMonthDay ) {
                    return [ day, month, year ];

                } else {
                    day -= maxMonthDay;
                }
            }
        }
    }

    return null;
}

export default getDateByDayOfYear;
export { getDateByDayOfYear };