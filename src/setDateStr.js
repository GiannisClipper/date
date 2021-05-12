import { setDateObj } from './setDateObj.js';

/**
 * Creates a string expressing a date (in YYYYMMDD format)
 * 
 * @param { ( Object | Object[] | string | Date ) } value - A date value
 * 
 * @returns { ( string | null ) } - A string in YYYYMMDD format or null in case of invalid param
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