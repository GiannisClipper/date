import { isString } from './isString.js';
import { getDate } from './getDate.js';

/**
 * Sets a date to an array expressing a date.
 * A date could be a Date instance or a string in YYYYMMDD format or an array expressing a date ([ day, month, year ]).
 * 
 * @param { ( Date | string | Object[] ) } value - The date
 * 
 * @returns { ( Object[] | null ) } - An array expressing a date or null in case of invalid param
 */

const setDateArr = value => {

    const result = getDate( value );

    return result !== null
        ? [ result.day, result.month, result.year ]
        : null;
}

export default setDateArr;
export { setDateArr };