import { isDateArr } from './isDateArr.js';

/**
 * Converts an array expressing a date to a string in YYYYMMDD form
 * @param { Object[] } value - The value to be converted
 * @returns { ( string | null ) } - A string in YYYYMMDD form or null in case of invalid param
 */
const asDateStr = value => {

    if ( isDateArr( value ) ) {
        const day = value[ 0 ].toString().padStart( 2, '0' );
        const month = value[ 1 ].toString().padStart( 2, '0' );
        const year = value[ 2 ].toString();

        return year + month + day;
    }

    return null;
}

export default asDateStr;
export { asDateStr };