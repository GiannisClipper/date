import { setDateObj } from './setDateObj.js';

/**
 * Creates a Date instance
 * 
 * @param { ( Object | Object[] | string | Date ) } value - A date value
 * 
 * @returns { ( Date | null ) } - An instance of Date() or null in case of invalid param
 * 
 * @example
 * setDateDate( { year: 2021, month: 1, day: 31 } ); // returns new Date( 2021, 0, 31 )
 * setDateDate( [ 2021, 1, 31 ] ); // returns new Date( 2021, 0, 31 )
 * setDateDate( '20210131' ); // returns new Date( 2021, 0, 31 )
 * setDateDate( '31/01/2021' ); // returns new Date( 2021, 0, 31 )
 * setDateDate( new Date( 2021, 0, 31 ) ); // returns new Date( 2021, 0, 31 )
 * setDateDate(); // returns null
 */

const setDateDate = value => {

    const result = setDateObj( value );

    return result !== null
        ? new Date( result.year, result.month - 1, result.day, 12, 0, 0, 0 )  // hour=12 to assure against timezone or summertime
        : null;
}

export default setDateDate;
export { setDateDate };