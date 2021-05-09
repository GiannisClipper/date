import { isString } from './isString.js';
import { isInteger } from './isInteger.js';
import { setDateArr } from './setDateArr.js';
import { getDateArr } from './getDateArr.js';
import { countDaysOfYear } from './countDaysOfYear.js';
import { findDayOfYear } from './findDayOfYear.js';
import { findDateByDayOfYear } from './findDateByDayOfYear.js';
import isYear from './isYear.js';

/**
 * Finds the date given a starting date and a positive or negative number of days to be added
 * 
 * @param { ( string | Object[] ) } from - The starting date
 * @param { number } days - The number of days to be added
 * 
 * @returns { ( Object[] | null ) } - An array expressing a date ([ day, month, year ]) or null in case of invalid params
 * 
 * @example
 * findDateByDaysAddition( "20210110", 10 ); // returns [ 20, 1, 2021 ]
 * findDateByDaysAddition( "20210110", -10 ); // returns [ 31, 12, 2020 ]
 */

const findDateByDaysAddition = ( date, days ) => {

    if ( isString( date ) ) {
        date = setDateArr( date );
    }

    if ( getDateArr( date ) && isInteger( days ) ) {

        let [ , , year ] = date;
        let day = findDayOfYear( date );
        let daysOfYear = countDaysOfYear( year );

        while ( true ) {
            if ( day + days < 1 ) {
                days += day;
                year -= 1;
                daysOfYear = countDaysOfYear( year );
                day = daysOfYear;

            } else if ( day + days > daysOfYear ) {
                days -= ( daysOfYear - day + 1 );  // destruct the rest days of that year and the current day
                year += 1;
                daysOfYear = countDaysOfYear( year );
                day = 1;

            } else {
                day += days;
                return findDateByDayOfYear( day, year );
            }

            if ( ! isYear( year ) ) {
                break;
            }
        }
    }

    return null;
}

export default findDateByDaysAddition;
export { findDateByDaysAddition };