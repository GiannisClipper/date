import compareDates from './compareDates.js';

/**
* Compares each date of a series of dates to be greater than the following one
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* compareDatesWithGreaterThan( '20210102', '20210101' );  // returns true
* compareDatesWithGreaterThan( '20210102', '20210102', '20210101' );  // returns false
*/

const compareDatesWithGreaterThan = ( ...dates ) => {

    return compareDates( dates, ( date1, date2 ) => date1 > date2 );
};

export default compareDatesWithGreaterThan;
export { compareDatesWithGreaterThan };