import compareDates from './compareDates.js';

/**
* Compares each date of a series of dates to be less than or equal to the following one
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* compareDatesWithLessThanEqualTo( '20210101', '20210102' );  // returns true
* compareDatesWithLessThanEqualTo( '20210101', '20210101', '20210102' );  // returns true
*/

const compareDatesWithLessThanEqualTo = ( ...dates ) => {

    return compareDates( dates, ( date1, date2 ) => date1 <= date2 );
};

export default compareDatesWithLessThanEqualTo;
export { compareDatesWithLessThanEqualTo };