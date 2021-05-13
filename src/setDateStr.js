import { setDateObj } from './setDateObj.js';

/**
 * Creates a string expressing a date (in YYYYMMDD format)
 * 
 * @param { ( Object | Object[] | string | Date ) } value - A date value
 * 
 * @returns { ( string | null ) } - A string in YYYYMMDD format or null in case of invalid param
 * 
 * @example
 * setDateStr( { year: 2021, month: 1, day: 31 } ); // returns '20210131'
 * setDateStr( [ 2021, 1, 31 ] ); // returns '20210131'
 * setDateStr( '20210131' ); // returns '20210131'
 * setDateStr( '31/01/2021' ); // returns '20210131'
 * setDateStr( new Date( 2021, 0, 31 ) ); // returns '20210131'
 * setDateStr(); // returns null
 * 
 * - - -
 * @memberof A.set
 */

const setDateStr = value => {

    const result = setDateObj( value );

    return result !== null
        ? result.year.toString().padStart( 4, '0' )
        + result.month.toString().padStart( 2, '0' )
        + result.day.toString().padStart( 2, '0' )
        : null;
}

export default setDateStr;
export { setDateStr };