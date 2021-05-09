import { isString } from './isString.js';
import { setDateObj } from './setDateObj.js';

/**
 * Sets a date to an array expressing a date.
 * A date could be a Date instance or a string in YYYYMMDD format or an array expressing a date ([ day, month, year ]).
 * 
 * @param { ( Date | string | Object[] ) } value - The date
 * 
 * @returns { ( Object[] | null ) } - An array expressing a date or null in case of invalid param
 */

const setDateArr = value => {

    const result = setDateObj( value );

    return result !== null
        ? [ result.day, result.month, result.year ]
        : null;
}

export default setDateArr;
export { setDateArr };