import { setDateObj } from './setDateObj.js';

/**
 * Creates an array expressing a date ([ year, month, day ]).
 * 
 * @param { ( Object | Object[] | string | Date ) } value - A date value
 * 
 * @returns { ( Object[] | null ) } - An array ([ year, month, day ]) or null in case of invalid param
 * 
 * @example
 * setDateArr( { year: 2021, month: 1, day: 31 } ); // returns [ 2021, 1, 31 ]
 * setDateArr( [ 2021, 1, 31 ] ); // returns [ 2021, 1, 31 ]
 * setDateArr( '20210131' ); // returns [ 2021, 1, 31 ]
 * setDateArr( '31/01/2021' ); // returns [ 2021, 1, 31 ]
 * setDateArr( new Date( 2021, 0, 31 ) ); // returns [ 2021, 1, 31 ]
 * setDateArr(); // returns null
 * 
 * - - -
 * @memberof A.set
 */

const setDateArr = value => {

    const result = setDateObj( value );

    return result !== null
        ? [ result.year, result.month, result.day ]
        : null;
}

export default setDateArr;
export { setDateArr };