import { isInteger } from './isInteger.js';
import { isMonth } from './isMonth.js';
import { isYear } from './isYear.js';
import { countDaysOfMonth } from './countDaysOfMonth.js';

/**
 * Validates if a series of values expressing a date.
 * 
 * @param { number } year - A year ( by default from 1900 to 2099 but customizable to other values)
 * @param { number } month - A month (from 1 to 12)
 * @param { number } day - A day (from 1 to 28/29/30/31)
 * 
 * @returns { boolean } - True or false
 * 
 * @example
 * isDate( 2021, 1, 31 ); // returns true
 * isDate( 2021, 1, 32 ); // return false
 * isDate( 2021 ); // returns false
 * 
 * - - -
 * @memberof F.is
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