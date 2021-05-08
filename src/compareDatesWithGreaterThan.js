import compareDates from './compareDates.js';

/**
* Checks if each date is equal to next one
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