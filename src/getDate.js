import { getDateDate } from './getDateDate.js';
import { getDateStr } from './getDateStr.js';
import { getDateRepr } from './getDateRepr.js';
import { getDateArr } from './getDateArr.js';
import isDate from './isDate.js';

/**
 * Gets day, month, year values of a date.
 * A date could be a Date instance or a string in YYYYMMDD format or an array expressing a date ([ day, month, year ]).
 * 
 * @param { ( Object[] | Date | string ) } value - The value expressing a date
 * 
 * @returns { ( Object | null ) } - The day, month, year values as an object or null in case of invalid param
 */

const getDate = value => {

    let result = null;

    if ( ( typeof value === 'object' ) &&
        ( Object.keys( value ).reduce( ( keys, key ) => keys += key, '' ) === 'daymonthyear' ) &&
        ( isDate( value.day, value.month, value.year ) ) ) {
        result = value;
    }

    if ( result === null ) {
        result = getDateDate( value );

        if ( result === null ) {
            result = getDateStr( value );

            if ( result === null ) {
                result = getDateRepr( value );

                if ( result === null ) {
                    result = getDateArr( value );
                }
            }
        }
    }

    return result;
}

export default getDate;
export { getDate };