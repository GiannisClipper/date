import { isInteger } from './isInteger.js';
import { isMonth } from './isMonth.js';
import { isYear } from './isYear.js';
import { getMonthDays } from './getMonthDays.js';

/**
 * Checks if a series of values expressing a date
 * 
 * @param { number } day - The day (from 1 to 28/29/30/31)
 * @param { number } month - The month (from 1 to 12)
 * @param { number } year - The year (from 1900 to 2099)
 * 
 * @returns { boolean } - True or false
 */

const isDate = ( day, month, year ) => {

    if ( isInteger( day ) && isMonth( month ) && isYear( year ) ) {

        const lastDay = getMonthDays( month, year );

        return day >= 1 && day <= lastDay;
    }

    return false;
}

export default isDate;
export { isDate };