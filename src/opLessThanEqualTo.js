import op from './op.js';

/**
* Operates a comparison on each date of a series of dates to be less than or equal to the following one
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* opLessThanEqualTo( '20210101', '20210102' );  // returns true
* opLessThanEqualTo( '20210101', '20210101', '20210102' );  // returns true
*/

const opLessThanEqualTo = ( ...dates ) => {

    return op( dates, ( date1, date2 ) => date1 <= date2 );
};

export default opLessThanEqualTo;
export { opLessThanEqualTo };