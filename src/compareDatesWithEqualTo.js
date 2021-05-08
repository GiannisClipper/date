import compareDates from './compareDates.js';

/**
* Compares each date of a series of dates to be equal to the others
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* compareDatesWithEqualTo( '20210101', '20210101' );  // returns true
* compareDatesWithEqualTo( '20210101', '20210101', '20210102' );  // returns false
*/

const compareDatesWithEqualTo = ( ...dates ) => {

    return compareDates( dates, ( date1, date2 ) => date1 === date2 );
};

export default compareDatesWithEqualTo;
export { compareDatesWithEqualTo };