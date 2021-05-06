import { isString } from './isString.js';
import { splitYYYYMMDD } from './splitYYYYMMDD.js';
import { isDateArr } from './isDateArr.js';
import { monthDays } from './monthDays.js';

/**
 * Calcaulates the position of a date in the days sequence of the year (from 1 to 366)
 * @param { ( string | Object[] ) } value - The date to be calculated
 * @returns { ( number | null ) } - The position of the date or null in case of invalid param
 */
const dayOfYear = value => {

    if ( isString( value ) ) {
        value = splitYYYYMMDD( value );
    }

    if ( isDateArr( value ) ) {

        const [ day, month, year ] = value;

        let pos = day;
        for ( let i = 1; i < month; i++ ) {
            pos += monthDays( i, year );
        }

        return pos;
    }

    return null;
}

export default dayOfYear;
export { dayOfYear };