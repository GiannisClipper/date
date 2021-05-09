import { getDateObj } from './getDateObj.js';
import { getDateStr } from './getDateStr.js';
import { getDateArr } from './getDateArr.js';

/**
 * Gets day, month, year values of a date.
 * A date could be a Date instance or a string in YYYYMMDD format or an array expressing a date ([ day, month, year ]).
 * 
 * @param { ( Object[] | Date | string ) } value - The value expressing a date
 * 
 * @returns { ( Object | null ) } - The day, month, year values as an object or null in case of invalid param
 */

const getDate = value => {

    let result = getDateObj( value );

    if ( result === null ) {
        result = getDateStr( value );

        if ( result === null ) {
            result = getDateArr( value );
        }
    }

    return result;
}

export default getDate;
export { getDate };