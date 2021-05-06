import { isString } from './isString.js';
import { isDateArr } from './isDateArr.js';

/**
 * Converts a string in YYYYMMDD form to an array expressing a date 
 * @param { string } value - The value to be converted
 * @returns { ( Object[] | null ) } - An array expressing a date or null in case of invalid param
 */
const splitYYYYMMDD = value => {

    if ( isString( value ) ) {
        const array = [
            parseInt( value.substring( 6, 8 ) ),
            parseInt( value.substring( 4, 6 ) ),
            parseInt( value.substring( 0, 4 ) )
        ];
    
        if ( isDateArr( array ) ) {
            return array;
        }
    }

    return null;
}

export default splitYYYYMMDD;
export { splitYYYYMMDD };