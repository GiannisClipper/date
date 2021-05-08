import compare from './compare.js';

/**
* Compares each date of a series of dates to be less than the following one
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* compareLessThan( '20210101', '20210102' );  // returns true
* compareLessThan( '20210101', '20210101', '20210102' );  // returns false
*/

const compareLessThan = ( ...dates ) => {

    return compare( dates, ( date1, date2 ) => date1 < date2 );
};

export default compareLessThan;
export { compareLessThan };