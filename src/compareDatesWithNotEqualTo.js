import compareDatesValidation from './compareDatesValidation.js';

/**
* Checks if dates are all different between them
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* compareDatesWithNotEqualTo( '20210101', '20210101' );  // returns false
* compareDatesWithNotEqualTo( '20210101', '20210102', '20210103' );  // returns true
*/

const compareDatesWithNotEqualTo = ( ...dates ) => {

    if ( compareDatesValidation( dates ) ) {

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

export default compareDatesWithNotEqualTo;
export { compareDatesWithNotEqualTo };