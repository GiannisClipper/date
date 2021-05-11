import { getDateObj } from './getDateObj.js';
import { getDateArr } from './getDateArr.js';
import { getDateStr } from './getDateStr.js';
import { getDateRepr } from './getDateRepr.js';
import { getDateDate } from './getDateDate.js';

/**
 * Creates an object expressing a date ({ year, month, day })
 * 
 * @param { ( Object | string | Object[] | Date ) } value - The date
 * 
 * @returns { ( Object[] | null ) } - An object ({ year, month, day }) or null in case of invalid param
 */

const setDateObj = value => {
    let result = getDateObj( value );

    if ( result === null ) {
        result = getDateArr( value );

        if ( result === null ) {
            result = getDateStr( value );

            if ( result === null ) {
                result = getDateRepr( value );

                if ( result === null ) {
                    result = getDateDate( value );
                }
            }
        }
    }

    return result;
}

export default setDateObj;
export { setDateObj };