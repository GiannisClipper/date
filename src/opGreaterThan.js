import op from './op.js';

/**
* Operates a comparison on each date of a series of dates to be greater than the following one
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* opGreaterThan( '20210102', '20210101' );  // returns true
* opGreaterThan( '20210102', '20210102', '20210101' );  // returns false
*/

const opGreaterThan = ( ...dates ) => {

    return op( dates, ( date1, date2 ) => date1 > date2 );
};

export default opGreaterThan;
export { opGreaterThan };