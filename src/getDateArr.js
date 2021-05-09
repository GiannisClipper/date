import { isDate } from './isDate.js';

/**
 * Gets the day, month, year values of an array expressing a date ([ day, month, year ])
 * 
 * @param { Object[] } value - The array
 * 
 * @returns { ( Object | null ) } - The day, month, year values as an object or null in case of invalid param
 * 
 * @example
 * getDateArr( [ 1, 1, 2021 ] ); // returns { day: 1, month: 1, year: 2021 }
 * getDateArr( [] ); // returns null
 */

const getDateArr = value => {

    if ( Array.isArray( value ) && value.length === 3 ) {

        const day = value[ 0 ];
        const month = value[ 1 ];
        const year = value[ 2 ];

        if ( isDate( day, month, year ) ) {
            return { day, month, year };
        }
    }

    return null;
}

export default getDateArr;
export { getDateArr };