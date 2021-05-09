import setDateStr from './setDateStr.js';

/**
* Operates a comparison between two dates, the first should be less than or equal to the second
* 
* @param { ...( Date | string | Object[] ) } date1 - The first date
* @param { ...( Date | string | Object[] ) } date2 - The second date
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* opLessThanEqualTo( '20210101', '20210102' );  // returns true
* opLessThanEqualTo( '20210101', '20210101' );  // returns true
*/

const opLessThanEqualTo = ( date1, date2 ) => {

    date1 = setDateStr( date1 );
    date2 = setDateStr( date2 );

    if ( date1 && date2 ) {

        return date1 <= date2
            ? true
            : false;
    }

    return null;
};

export default opLessThanEqualTo;
export { opLessThanEqualTo };