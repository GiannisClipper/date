import { isYear } from './isYear.js';
import { isLeapYear } from './isLeapYear.js';

/**
 * Returns the days of a year
 * @param { number } year - The year to be counted
 * @returns { ( number | null ) } - The sum of the days or null in case of invalid year
 */
const yearDays = year => {

    if ( isYear( year ) ) {

        return isLeapYear( year ) ? 366 : 365;
    }

    return null;
}

export default yearDays;
export { yearDays };