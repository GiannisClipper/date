import { isMonth } from './isMonth.js';
import { isYear } from './isYear.js';
import { isLeapYear } from './isLeapYear.js';

/**
 * Returns the days of a month
 * @param { number } month - The month (from 1 to 12)
 * @param { number } year - The year (to count february on leap years)
 * @returns { ( number | null ) } - The sum of the days or null in case of invalid params
 */
const monthDays = ( month, year ) => {

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

export default monthDays;
export { monthDays };