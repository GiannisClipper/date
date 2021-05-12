import { isYear } from './isYear.js';
import { isLeapYear } from './isLeapYear.js';

/**
 * Gets the number of days of a year
 * 
 * @example
 * countDaysOfYear( 2021 ); // returns 365
 * countDaysOfYear( 2024 ); // returns 366
 * 
 * @param { number } year - A year
 * 
 * @returns { ( number | null ) } - A number of days or null in case of invalid param
 */

const countDaysOfYear = year => {

    if ( isYear( year ) ) {

        return isLeapYear( year ) ? 366 : 365;
    }

    return null;
}

export default countDaysOfYear;
export { countDaysOfYear };