import op from './op.js';

/**
* Operates a comparison on each date of a series of dates to be less than the following one
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* opLessThan( '20210101', '20210102' );  // returns true
* opLessThan( '20210101', '20210101', '20210102' );  // returns false
*/

const opLessThan = ( ...dates ) => {

    return op( dates, ( date1, date2 ) => date1 < date2 );
};

export default opLessThan;
export { opLessThan };