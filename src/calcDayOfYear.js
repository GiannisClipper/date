import { setDateObj } from './setDateObj.js';
import { countDaysOfMonth } from './countDaysOfMonth.js';

/**
 * Calculates the position of a date in the days sequence of the year (from 1 to 365/366)
 * 
 * @param { ( Object | Object[] | string | Date ) } date - A date value
 * 
 * @returns { ( number | null ) } - The position in year or null in case of invalid param
 * 
 * @example
 * calcDayOfYear( "20210201" ); // returns 32
 * calcDayOfYear( "20211231" ); // returns 365
 * calcDayOfYear(); // returns null
 */

const calcDayOfYear = date => {

    date = setDateObj( date );

    if ( date ) {

        const { year, month, day } = date;

        let pos = day;
        for ( let i = 1; i < month; i++ ) {
            pos += countDaysOfMonth( i, year );
        }

        return pos;
    }

    return null;
}

export default calcDayOfYear;
export { calcDayOfYear };