import { getDateObj } from './getDateObj.js';
import { getDateArr } from './getDateArr.js';
import { getDateStr } from './getDateStr.js';
import { getDateRepr } from './getDateRepr.js';
import { getDateDate } from './getDateDate.js';

/**
 * Creates an object expressing a date ({ year:, month:, day: }).
 * 
 * @param { ( Object | Object[] | string | Date ) } value A date value
 * 
 * @returns { ( Object | null ) } An object ({ year:, month:, day: }) or null in case of invalid param
 * 
 * @example
 * setDateObj( { year: 2021, month: 1, day: 31 } ); // returns { year: 2021, month: 1, day: 31 }
 * setDateObj( [ 2021, 1, 31 ] ); // returns { year: 2021, month: 1, day: 31 }
 * setDateObj( '20210131' ); // returns { year: 2021, month: 1, day: 31 }
 * setDateObj( '31/01/2021' ); // returns { year: 2021, month: 1, day: 31 }
 * setDateObj( new Date( 2021, 0, 31 ) ); // returns { year: 2021, month: 1, day: 31 }
 * setDateObj(); // returns null
 * 
 * - - -
 * @memberof A.set
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