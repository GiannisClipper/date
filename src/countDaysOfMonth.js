import { isMonth } from './isMonth.js';
import { isYear } from './isYear.js';
import { isLeapYear } from './isLeapYear.js';

/**
 * Gets the number of days of a month.
 * 
 * 
 * @param { number } month A month (from 1 to 12)
 * @param { number } year A year (to consider 29 days for february on leap years)
 * 
 * @returns { ( number | null ) } A number of days or null in case of invalid params
 * 
 * @example
 * countDaysOfMonth( 1, 2021 ); // returns 31
 * countDaysOfMonth( 2, 2021 ); // returns 28
 * countDaysOfMonth( 2 ); // returns null
 * 
 * - - -
 * @memberof E.count
 */

const countDaysOfMonth = ( month, year ) => {

    if ( isMonth( month ) && isYear( year ) ) {

        return [ 1, 3, 5, 7, 8, 10, 12 ].includes( month )
            ? 31
            : [ 4, 6, 9, 11 ].includes( month )
            ? 30
            : month === 2 && isLeapYear( year )
            ? 29
            : 28;
    }

    return null;
}

export default countDaysOfMonth;
export { countDaysOfMonth };