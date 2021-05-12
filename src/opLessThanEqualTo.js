import setDateStr from './setDateStr.js';

/**
* Operates a comparison between two dates where the first should be less than or equal to the second
* 
* @param { ( Object | Object[] | string | Date ) } date1 - The first date
* @param { ( Object | Object[] | string | Date ) } date2 - The second date
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* opLessThanEqualTo( '01/01/2021', '02/01/2021' ); // returns true
* opLessThanEqualTo( '02/01/2021', '02/01/2021' ); // returns true
* opLessThanEqualTo( '03/01/2021', '02/01/2021' ); // returns false
* opLessThanEqualTo(); // returns null
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