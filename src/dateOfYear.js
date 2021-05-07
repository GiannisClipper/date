import { isDayOfYear } from './isDayOfYear.js';
import { monthDays } from './monthDays.js';

/**
 * Calcaulates the date given the day in the days sequence (from 1 to 365/366) of a year
 * @param { number } day - The day
 * @param { number } year - The year
 * @returns { ( Object[] | null ) } - An array expressing a date ([ day, month, year ]) or null in case of invalid params
 */
const dateOfYear = ( day, year ) => {

    if ( isDayOfYear( day, year ) ) {

        for ( let month = 1; month <= 12; month++ ) {

            const lastDay = monthDays( month, year );

            if ( day <= lastDay ) {
                return [ day, month, year ];

            } else {
                day -= lastDay;
            }
        }
    }

    return null;
}

export default dateOfYear;
export { dateOfYear };