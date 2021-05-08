import isDateStr from './isDateStr.js';
import convertToDateStr from './convertToDateStr.js';

/**
* Validates an array of two or more dates
* 
* @param { Object } dates - An array of dates
* 
* @returns { boolean } - True or false
* 
* @example
* compareValidation( '20210101', '20210115' );  // returns true
* compareValidation( '20210101', 'bla.. bla..' );  // returns false
*/

const compareValidation = dates => {

    if ( ! Array.isArray( dates ) || dates.length < 2 ) {
        return false;
    }

    for ( let i = 0; i < dates.length; i++ ) {

        dates[ i ] = 
            ! isDateStr( dates[ i ] )
            ? convertToDateStr( dates[ i ] )
            : dates[ i ];

        if ( dates[ i ] === null ) {
            return false;
        }
    }

    return true;
}

export default compareValidation;
export { compareValidation };