import compareDates from './compareDates.js';

/**
* Checks if each date is equal to next one
* 
* @param { ...( string | Object[] ) } dates - A series of dates
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* compareDatesWithLessThan( '20210101', '20210102' );  // returns true
* compareDatesWithLessThan( '20210101', '20210101', '20210102' );  // returns false
*/

const compareDatesWithLessThan = ( ...dates ) => {

    return compareDates( dates, ( date1, date2 ) => date1 < date2 );
};

export default compareDatesWithLessThan;
export { compareDatesWithLessThan };