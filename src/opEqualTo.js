import op from './op.js';

/**
* Operates a comparison on each date of a series of dates to be equal to the others
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* opEqualTo( '20210101', '20210101' );  // returns true
* opEqualTo( '20210101', '20210101', '20210102' );  // returns false
*/

const opEqualTo = ( ...dates ) => {

    return op( dates, ( date1, date2 ) => date1 === date2 );
};

export default opEqualTo;
export { opEqualTo };