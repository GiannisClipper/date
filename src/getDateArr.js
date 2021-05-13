import { isDate } from './isDate.js';

/**
 * Retrieves date values from an array ([ year, month, day ]).
 * 
 * @param { Object[] } value - An array expressing a date
 * 
 * @returns { ( Object | null ) } - An object with the date values ({ year:, month:, day: }) or null in case of invalid param
 * 
 * @example
 * getDateArr( [ 2021, 1, 31 ] ); // returns { year: 2021, month: 1, day: 31 }
 * getDateArr( [] ); // returns null
 * 
 * - - -
 * @memberof B.get
 */

const getDateArr = value => {

    if ( Array.isArray( value ) && value.length === 3 ) {

        const year = value[ 0 ];
        const month = value[ 1 ];
        const day = value[ 2 ];

        if ( isDate( year, month, day ) ) {
            return { year, month, day };
        }
    }

    return null;
}

export default getDateArr;
export { getDateArr };