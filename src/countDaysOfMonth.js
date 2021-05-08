import { isMonth } from './isMonth.js';
import { isYear } from './isYear.js';
import { isLeapYear } from './isLeapYear.js';

/**
 * Gets the number of the days of a month
 * 
 * @example
 * countDaysOfMonth( 1, 2021 ); // returns 31
 * countDaysOfMonth( 2, 2021 ); // returns 28
 * 
 * @param { number } month - The month (from 1 to 12)
 * @param { number } year - The year (to consider february on leap years)
 * 
 * @returns { ( number | null ) } - The number of the days or null in case of invalid params
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