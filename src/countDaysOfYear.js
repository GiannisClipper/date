import { isYear } from './isYear.js';
import { isLeapYear } from './isLeapYear.js';

/**
 * Gets the number of days of a year
 * 
 * @param { number } year - A year
 * 
 * @returns { ( number | null ) } - A number of days or null in case of invalid param
 * 
 * @example
 * countDaysOfYear( 2021 ); // returns 365
 * countDaysOfYear( 2024 ); // returns 366
 * countDaysOfYear(); // returns null
 * 
 * - - -
 * @memberof E.count
 */

const countDaysOfYear = year => {

    if ( isYear( year ) ) {

        return isLeapYear( year ) ? 366 : 365;
    }

    return null;
}

export default countDaysOfYear;
export { countDaysOfYear };