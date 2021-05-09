import { isString } from './isString.js';
import { isDateArr } from './isDateArr.js';

/**
 * Converts a string in YYYYMMDD format or an array expressing a date to a Date instance 
 * 
 * @param { ( string | object[] ) } value - The value to be converted
 * 
 * @returns { ( Date | null ) } - An instance of Date or null in case of invalid param
 */

const convertToDateObj = value => {

    if ( isString( value ) ) {
        value = [
            parseInt( value.substring( 6, 8 ) ),
            parseInt( value.substring( 4, 6 ) ),
            parseInt( value.substring( 0, 4 ) )
        ];
    }

    if ( isDateArr( value ) ) {
        let [ day, month, year ] = value;
        month -= 1;  // due to month in Date is from 0 to 11
        const hour = 12; // to assure against timezones or summer time

        return new Date( year, month, day, hour, 0, 0, 0 );
    }

    // in case param is already a Date instance
    if ( value instanceof Date ) {

        return value;
    }
    
    return null;
}

export default convertToDateObj;
export { convertToDateObj };