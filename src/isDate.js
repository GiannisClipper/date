import { isInteger } from './isInteger.js';
import { isMonth } from './isMonth.js';
import { isYear } from './isYear.js';
import { monthDays } from './monthDays.js';

/**
 * Checks if a siries of values is a valid date
 * @param { number } day - The day
 * @param { number } month - The month (from 1 to 12)
 * @param { number } year - The year
 * @returns { boolean } - A boolean response
 */
const isDate = ( day, month, year ) => {

    if ( isInteger( day ) && isMonth( month ) && isYear( year ) ) {

        const lastDay = monthDays( month, year );

        return day >= 1 && day <= lastDay;
    }

    return false;
}

export default isDate;
export { isDate };