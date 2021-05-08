import { isDateArr } from './isDateArr.js';

/**
 * Converts an array expressing a date to a string in YYYYMMDD format
 * 
 * @param { Object[] } value - The value to be converted
 * 
 * @returns { ( string | null ) } - A string in YYYYMMDD format or null in case of invalid param
 */

const convertToDateStr = value => {

    if ( isDateArr( value ) ) {
        const day = value[ 0 ].toString().padStart( 2, '0' );
        const month = value[ 1 ].toString().padStart( 2, '0' );
        const year = value[ 2 ].toString().padStart( 4, '0' );

        return year + month + day;
    }

    return null;
}

export default convertToDateStr;
export { convertToDateStr };