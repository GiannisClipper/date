import { getDate } from './getDate.js';

/**
 * Sets a date as a Date instance.
 * A date could be a Date instance or a string in YYYYMMDD format or an array expressing a date ([ day, month, year ]).
 * 
 * @param { ( Date | string | Object[] ) } value - The date
 * 
 * @returns { ( Date | null ) } - An instance of Date or null in case of invalid param
 */

const setDateObj = value => {

    const result = getDate( value );

    return result !== null
        ? new Date( result.year, result.month - 1, result.day, 12, 0, 0, 0 )  // hour=12 to assure against timezone or summertime
        : null;
}

export default setDateObj;
export { setDateObj };