import { isInteger } from './isInteger.js';
import { setDateObj } from './setDateObj.js';
import { countDaysOfYear } from './countDaysOfYear.js';
import { calcDayOfYear } from './calcDayOfYear.js';
import { calcDateByDayOfYear } from './calcDateByDayOfYear.js';
import isYear from './isYear.js';

/**
 * Calculates the date according to a starting date and a positive or negative number of days to be added
 * 
 * @param { ( Object | Object[] | string | Date ) } from - A starting date
 * @param { number } days - A number of days to be added
 * 
 * @returns { ( Object[] | null ) } - An array expressing a date ([ year, month, day ]) or null in case of invalid params
 * 
 * @example
 * calcDateByDaysAddition( "20210110", 10 ); // returns [ 2021, 1, 20 ]
 * calcDateByDaysAddition( "20210110", -10 ); // returns [ 2020, 12, 31 ]
 * calcDateByDaysAddition( "20210110" ); // returns null
 */

const calcDateByDaysAddition = ( date, days ) => {

    date = setDateObj( date );

    if ( date && isInteger( days ) ) {

        let { year } = date;
        let day = calcDayOfYear( date );
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
                return calcDateByDayOfYear( day, year );
            }

            if ( ! isYear( year ) ) {
                break;
            }
        }
    }

    return null;
}

export default calcDateByDaysAddition;
export { calcDateByDaysAddition };