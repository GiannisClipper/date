import isDate from './isDate.js';
import { isDateArr } from './isDateArr.js';
import { isDateStr } from './isDateStr.js';

/**
 * Converts a Date instance or an array expressing a date to a string in YYYYMMDD format
 * 
 * @param { ( Date | Object[] ) } value - The value to be converted
 * 
 * @returns { ( string | null ) } - A string in YYYYMMDD format or null in case of invalid param
 */

const convertToDateStr = value => {

    if ( value instanceof Date ) {
        value = [
            value.getDate(),
            value.getMonth() + 1,
            value.getFullYear()
        ];
    }

    if ( isDateArr( value ) ) {
        const year = value[ 2 ].toString().padStart( 4, '0' );
        const month = value[ 1 ].toString().padStart( 2, '0' );
        const day = value[ 0 ].toString().padStart( 2, '0' );

        return year + month + day;
    }

    // in case param is already a string in YYYYMMDD format
    if ( isDateStr( value ) ) {

        return value;
    }

    return null;
}

export default convertToDateStr;
export { convertToDateStr };