import compareValidation from './compareValidation.js';

/**
* Compares each date of a series of dates to be different to the others
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* compareNotEqualTo( '20210101', '20210101' );  // returns false
* compareNotEqualTo( '20210101', '20210102', '20210103' );  // returns true
*/

const compareNotEqualTo = ( ...dates ) => {

    if ( compareValidation( dates ) ) {

        for ( let i = 0; i < dates.length - 1; i++ ) {

            for ( let j = i + 1; j < dates.length; j++ ) {

                if ( dates[ i ] === dates[ j ] ) {

                    return false;
                }
            }
        }

        return true;
    }

    return null;
};

export default compareNotEqualTo;
export { compareNotEqualTo };