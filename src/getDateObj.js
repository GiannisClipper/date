import { isDate } from './isDate.js';

/**
 * Gets the day, month, year values of an object expressing a date ({ day, month, year })
 * 
 * @param { Object } value - The object
 * 
 * @returns { ( Object | null ) } - The input object or null in case of invalid param
 * 
 * @example
 * getDateObj( { day: 1, month: 1, year: 2021 } ); // returns { day: 1, month: 1, year: 2021 }
 * getDateObj( { month: 1, year: 2021 } ); // returns null
 */

const getDateObj = value => {

    if ( ( value !== null && typeof value === 'object' ) &&
        ( Object.keys( value ).sort().reduce( ( keys, key ) => keys += key, '' ) === 'daymonthyear' ) &&
        ( isDate( value.day, value.month, value.year ) ) ) {

        return value;
    }

    return null;
}

export default getDateObj;
export { getDateObj };