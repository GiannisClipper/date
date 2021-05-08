import compare from './compare.js';

/**
* Compares each date of a series of dates to be greater than or equal to the following one
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* compareGreaterThanEqualTo( '20210102', '20210101' );  // returns true
* compareGreaterThanEqualTo( '20210102', '20210102', '20210101' );  // returns true
*/

const compareGreaterThanEqualTo = ( ...dates ) => {

    return compare( dates, ( date1, date2 ) => date1 >= date2 );
};

export default compareGreaterThanEqualTo;
export { compareGreaterThanEqualTo };