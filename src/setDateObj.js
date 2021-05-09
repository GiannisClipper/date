import { getDateObj } from './getDateObj.js';
import { getDateDate } from './getDateDate.js';
import { getDateStr } from './getDateStr.js';
import { getDateRepr } from './getDateRepr.js';
import { getDateArr } from './getDateArr.js';

/**
 * Sets a date to an object expressing a date ({ day, month, year }).
 * A date could be a Date instance or a string in YYYYMMDD format or an array expressing a date ([ day, month, year ]).
 * 
 * @param { ( Date | string | Object[] ) } value - The date
 * 
 * @returns { ( Object[] | null ) } - An object expressing a date or null in case of invalid param
 */

const setDateObj = value => {
    let result = getDateObj( value );

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

export default setDateObj;
export { setDateObj };