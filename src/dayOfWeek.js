import { isString } from './isString.js';
import { splitYYYYMMDD } from './splitYYYYMMDD.js';
import { isDateArr } from './isDateArr.js';
import { getRangeDays } from './getRangeDays.js';

/**
 * Calcaulates the position of a date in the days sequence of the week (from 1: monday to 7: sunday)
 * @param { ( string | Object[] ) } value - The date to be calculated
 * @returns { ( number | null ) } - The position of the date or null in case of invalid param
 */
const dayOfWeek = value => {

    if ( isString( value) ) {
        value = splitYYYYMMDD( value );
    }

    if ( isDateArr( value ) ) {

        const sampleDate = [ 1, 1, 2020 ];
        const sampleDayOfWeek = 3;  // 1/1/2020 supposed to be wednesday

        const daysBetween = getRangeDays( sampleDate, value ) - 1;
        const dayOffset = daysBetween % 7;
        const result = sampleDayOfWeek + dayOffset;

        return ( 
            result > 7 ? result - 7 :
            result < 1 ? 7 + result :
            result
        );
    }

    return null;
}

export default dayOfWeek;
export { dayOfWeek };