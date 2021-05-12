import { isString } from './isString.js';
import { setDateObj } from './setDateObj.js';

/**
 * Creates an array expressing a date ([ year, month, day ])
 * 
 * @param { ( Object | Object[] | string | Date ) } value - A date value
 * 
 * @returns { ( Object[] | null ) } - An array ([ year, month, day ]) or null in case of invalid param
 */

const setDateArr = value => {

    const result = setDateObj( value );

    return result !== null
        ? [ result.year, result.month, result.day ]
        : null;
}

export default setDateArr;
export { setDateArr };