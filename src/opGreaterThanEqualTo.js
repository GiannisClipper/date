import op from './op.js';

/**
* Operates a comparison on each date of a series of dates to be greater than or equal to the following one
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* opGreaterThanEqualTo( '20210102', '20210101' );  // returns true
* opGreaterThanEqualTo( '20210102', '20210102', '20210101' );  // returns true
*/

const opGreaterThanEqualTo = ( ...dates ) => {

    return op( dates, ( date1, date2 ) => date1 >= date2 );
};

export default opGreaterThanEqualTo;
export { opGreaterThanEqualTo };