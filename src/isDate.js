import { isInteger } from './isInteger.js';
import { isMonth } from './isMonth.js';
import { isYear } from './isYear.js';
import { countDaysOfMonth } from './countDaysOfMonth.js';

/** @lends config */

/**
 * Checks if a series of values expressing a date
 * 
 * @param { number } year - The year (from 1900 to 2099 by default)
 * @param { number } month - The month (from 1 to 12)
 * @param { number } day - The day (from 1 to 28/29/30/31)
 * 
 * @returns { boolean } - True or false
 * 
 * @example
 * isDate( 2021, 1, 31 ); // returns true
 * isDate( 2021, 1, 32 ); // return false
 */

const isDate = ( year, month, day ) => {

    if ( isInteger( day ) && isMonth( month ) && isYear( year ) ) {

        const lastDay = countDaysOfMonth( month, year );

        return day >= 1 && day <= lastDay;
    }

    return false;
}

export default isDate;
export { isDate };