import { isString } from './isString.js';
import { isDateArr } from './isDateArr.js';

/**
 * Converts a Date instance or a string in YYYYMMDD format to an array expressing a date 
 * 
 * @param { ( Date | string ) } value - The value to be converted
 * 
 * @returns { ( Object[] | null ) } - An array expressing a date or null in case of invalid param
 */

const convertToDateArr = value => {

    if ( value instanceof Date ) {
        value = [
            value.getDate(),
            value.getMonth() + 1,
            value.getFullYear()
        ];

    } else if ( isString( value ) ) {
        value = [
            parseInt( value.substring( 6, 8 ) ),
            parseInt( value.substring( 4, 6 ) ),
            parseInt( value.substring( 0, 4 ) )
        ];
    }

    if ( isDateArr( value ) ) {
        return value;
    }

    return null;
}

export default convertToDateArr;
export { convertToDateArr };