import compare from './compare.js';

/**
* Compares each date of a series of dates to be less than or equal to the following one
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* compareLessThanEqualTo( '20210101', '20210102' );  // returns true
* compareLessThanEqualTo( '20210101', '20210101', '20210102' );  // returns true
*/

const compareLessThanEqualTo = ( ...dates ) => {

    return compare( dates, ( date1, date2 ) => date1 <= date2 );
};

export default compareLessThanEqualTo;
export { compareLessThanEqualTo };