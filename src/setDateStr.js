import { getDate } from './getDate.js';

/**
 * Sets a date as a string in YYYYMMDD format.
 * A date could be a Date instance or a string in YYYYMMDD format or an array expressing a date ([ day, month, year ]).
 * 
 * @param { ( Date | string | Object[] ) } value - The date
 * 
 * @returns { ( string | null ) } - A string in YYYYMMDD format or null in case of invalid param
 */

const setDateStr = value => {

    const result = getDate( value );

    return result !== null
        ? result.year.toString().padStart( 4, '0' )
        + result.month.toString().padStart( 2, '0' )
        + result.day.toString().padStart( 2, '0' )
        : null;
}

export default setDateStr;
export { setDateStr };