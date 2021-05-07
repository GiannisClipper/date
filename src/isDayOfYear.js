import { isInteger } from './isInteger.js';
import { isYear } from './isYear.js';
import { yearDays } from './yearDays.js';

/**
 * Checks if a day is included in days range of a year (from 1 to 365/366)
 * @param { number } day - The day
 * @param { number } year - The year
 * @returns { boolean } - True or false
 */
const isDayOfYear = ( day, year ) => {

    if ( isInteger( day ) && isYear( year ) ) {

        const lastDay = yearDays( year );

        return day >= 1 && day <= lastDay;
    }

    return false;
}

export default isDayOfYear;
export { isDayOfYear };